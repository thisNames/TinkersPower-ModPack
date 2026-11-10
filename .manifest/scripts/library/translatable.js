/**
 * 翻译
 */

const FS = require("node:fs");
const PT = require("node:path");

/**
 * 语言翻译配置
 */
class TranslatableOption
{
    /**
     * 创建语言翻译译配对象
     * @param {string} pack package.json
     */
    constructor(pack)
    {
        /** @type {string} 如果 key 为空则显示此默认值 + key */
        this.prefix = "";

        /** @type {Array<string>} 对其语言集合 */
        this.alignment = [];

        /** @type {Array<string>} 语言文件集合 */
        this.lang = [];

        /** @type {Array<string>} 名命空间目录集合 */
        this.required = [];

        this.init(pack);
    }

    /**
     * 初始化
     * @param {string} pack package.json
     * @returns {TranslatableOption} this
     */
    init(pack)
    {
        const buffer = FS.readFileSync(pack, { encoding: "utf-8" });
        const data = JSON.parse(buffer);
        const translatable = data.translatable;

        // 默认值
        this.prefix = translatable.prefix;

        // 去重
        const lang = new Set(translatable.lang.map(t => t.trim()));
        const required = new Set(translatable.required.map(t => t.trim()));
        const alignment = new Set(translatable.alignment.map(t => t.trim()));

        // 语言文件
        this.lang = [...lang];
        // 名命空间集合
        this.required = [...required];
        // 对其语言集合（只取 lang 的子集）
        this.alignment = [...alignment].filter(t => lang.has(t));

        return this;
    }
}

/**
 * 语言翻译生成
 */
class TranslatableBuilder
{
    /**
     * 创建语言翻译生成器
     * @param {TranslatableOption} option 语言翻译配置对象
     */
    constructor(option)
    {
        /** @type {TranslatableOption} 语言翻译配置对象 */
        this.option = option;

        /** @type {Set<string>} 语言对齐集合（以哪个语言文件作为基准，可含多个） */
        this.alignment = new Set(this.option.alignment.length > 0 ? this.option.alignment : this.option.lang);

        /** @type {string} 文件拓展名 */
        this.ext = ".json";

        /** @type {number} json 对齐空格：2~8 */
        this.space = 2;
    }

    /**
     * 获取语言集合
     * @returns {Array<string>}
     */
    get Lang()
    {
        return this.option.lang;
    }

    /**
     * 获取默认值
     * @returns {string}
     */
    get Prefix()
    {
        return this.option.prefix;
    }

    /**
     * 获取名命空间目录集合
     * @returns {Array<string>}
     */
    get Required()
    {
        return this.option.required;
    }

    /**
     * 设置空格数量
     * @param {number} value 空格数量：2~8
     * @returns {TranslatableBuilder} this
     */
    setSpace(value)
    {
        this.space = Math.max(2, Math.min(value, 8));

        return this;
    }

    /**
     * 设置拓展名
     * @param {string} value 拓展名：.json
     * @returns {TranslatableBuilder} this
     */
    setExt(value)
    {
        this.ext = value;

        return this;
    }

    /**
     * 获取空 key 值
     * @param {string} key key
     * @returns {string}
     */
    getPrefixKey(key)
    {
        return this.Prefix ? this.Prefix.concat(".", key) : key;
    }

    /**
     * 生成
     * @throws 空 lang 异常
     */
    builder()
    {
        // 至少包含一个语言文件
        if (this.Lang.length < 1) throw new Error("lang is empty");

        // 遍历所有目录
        for (let i = 0; i < this.Required.length; i++)
        {
            // 一个 required 目录
            const required = this.Required[i];
            // 名命空间集合
            const listDirent = FS.readdirSync(required, { encoding: "utf-8", withFileTypes: true });

            // 分发处理单个名命空间
            for (let i = 0; i < listDirent.length; i++)
            {
                // 名命空间
                const namespace = listDirent[i];

                // 是一个目录
                if (namespace.isDirectory())
                {
                    TranslatableBuilder.translatableGenerator(PT.join(required, namespace.name), this);
                }

                // TODO: debug
                break;
            }
        }
    }

    /**
     * 语言文件生成
     * @param {string} namespace 名命空间路径
     * @param {TranslatableBuilder} builder 语言翻译生成器对象
     */
    static translatableGenerator(namespace, builder)
    {
        // 语言目录路径
        const lang = PT.join(namespace, "lang");

        // 排除不存在的目录
        if (!FS.existsSync(lang) || !FS.statSync(lang).isDirectory()) return;

        // 对齐基准集合
        const alignment = TranslatableBuilder.collectLanguageKeys(lang, builder);

        // 对齐 key
        for (let i = 0; i < builder.Lang.length; i++)
        {
            const ln = builder.Lang[i];
            const filename = PT.join(lang, ln + builder.ext);
            const map = new Map();
            // 统计变量；0 = 没变、-1 减少 1 个 key、1 加一个 key
            let count = 0;

            // 校验、对齐（存在）
            if (FS.existsSync(filename) && FS.statSync(filename).isFile())
            {
                const data = JSON.parse(FS.readFileSync(filename, { encoding: "utf-8" }));
                const keys = Object.keys(data);

                for (let j = 0; j < keys.length; j++)
                {
                    const key = keys[j];
                    const value = alignment.has(key) ? data[key] : builder.getPrefixKey(key);

                    // 保存
                    map.set(key, value);
                }
            }
            else
            {
                // 生成（不存在）
                alignment.forEach(key => map.set(key, builder.getPrefixKey(key)));
            }

            // 保存
            TranslatableBuilder.mapSaveToJsonStringify(filename, map, builder.space);
        }
    }

    /**
     * 收集语言文件 key
     * @param {string} lang 语言文件目录
     * @param {TranslatableBuilder} builder 语言翻译生成器对象
     * @returns {Set<string>}
     */
    static collectLanguageKeys(lang, builder)
    {
        /** @type {Set<string>} 对齐基准集合 */
        const alignment = new Set();
        // 语言文件集合
        const listDirent = FS.readdirSync(lang, { encoding: "utf-8", withFileTypes: true });

        // 遍历所有的 json 文件
        for (let i = 0; i < listDirent.length; i++)
        {
            // 语言文件
            const language = listDirent[i];

            // 跳过非 json 文件
            if (!language.isFile() || PT.extname(language.name) != builder.ext) continue;
            // 不在收集列表中
            if (!builder.alignment.has(language.name.split(".").shift())) continue;

            // 文件
            const filename = PT.join(lang, language.name);
            // 读取
            const buffer = FS.readFileSync(filename, { encoding: "utf-8" });
            // 解析
            const data = JSON.parse(buffer);

            // 存表
            Object.keys(data).forEach(key => alignment.add(key));
        }

        return alignment;
    }

    /**
     * 保存
     * @param {string} filename 语言文件路径
     * @param {Map<string, string>} map 语言表
     * @param {number} space 空格
     */
    static mapSaveToJsonStringify(filename, map, space)
    {
        // 转为对象
        const data = Object.fromEntries(map.entries());

        // 写如
        FS.writeFileSync(filename, JSON.stringify(data, null, space), { encoding: "utf-8", flag: "w" });
    }
}

// TODO: 测试
const o = new TranslatableOption("package.json");
const b = new TranslatableBuilder(o);
// console.log(o);
// console.log(b);
b.builder();
