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
        this.default = "";

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
        this.default = translatable.default;

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
        this.space = 4;
    }

    /**
     * 获取语言集合
     * @returns {Array<string>}
     */
    get lang()
    {
        return this.option.lang;
    }

    /**
     * 获取默认值
     * @returns {string}
     */
    get default()
    {
        return this.default;
    }

    /**
     * 获取名命空间目录集合
     * @returns {Array<string>}
     */
    get required()
    {
        return this.option.required;
    }

    setSpace(value)
    {
        this.space = Math.min(2, Math.max(value, 8));
    }

    /**
     * 生成
     * @throws 空 lang 异常
     */
    builder()
    {
        // 至少包含一个语言文件
        if (this.lang.length < 1) throw new Error("lang is empty");

        // 遍历所有目录
        for (let i = 0; i < this.required.length; i++)
        {
            // 一个 required 目录
            const required = this.required[i];
            // 名命空间集合
            const listDirent = FS.readdirSync(required, { encoding: "utf-8", withFileTypes: true });

            // 分发处理单个名命空间
            for (let i = 0; i < listDirent.length; i++)
            {
                const namespace = listDirent[i];

                // 是一个目录
                if (namespace.isDirectory())
                {
                    this.generator(PT.join(required, namespace.name));
                }

                // TODO: debug
                break;
            }
        }
    }

    /**
     * 创建
     * @param {string} namespace 名命空间路径
     */
    generator(namespace)
    {
        // 语言目录路径
        const lang = PT.join(namespace, "lang");

        // 排除
        if (!FS.existsSync(lang) || !FS.statSync(lang).isDirectory()) return;

        // 统集合
        const alignment = this.collection(lang);

        // 对齐
        for (let i = 0; i < this.lang.length; i++)
        {
            const ln = this.lang[i];
            const filename = PT.join(lang, ln + this.ext);
            const map = new Map();

            // 校验、对齐
            if (FS.existsSync(filename) && FS.statSync(filename).isFile())
            {
                const data = JSON.parse(FS.readFileSync(filename, { encoding: "utf-8" }));
                const keys = Object.keys(data);

                for (let j = 0; j < keys.length; j++)
                {
                    const key = keys[j];

                    // 包含
                    if (alignment.has(key))
                    {
                        map.set(key, data[key]);
                    }
                }
            }
            else
            {
                // 生成
                alignment.forEach(key => map.set(key, ""));
            }

            // 保存
            this.saver(filename, map);
        }
    }

    /**
     * 收集 key
     * @param {string} lang 语言文件目录
     * @returns {Set<string>}
     */
    collection(lang)
    {
        /** @type {Set<string>} 统集合 */
        const alignment = new Set();
        // 文件集合
        const listDirent = FS.readdirSync(lang, { encoding: "utf-8", withFileTypes: true });

        // 获取所有的 json 文件
        for (let i = 0; i < listDirent.length; i++)
        {
            // 语言文件
            const dirent = listDirent[i];

            // 跳过非 json 文件
            if (!dirent.isFile() || PT.extname(dirent.name) != this.ext) continue;
            // 不在收集列表中
            if (!this.alignment.has(dirent.name.split(".").shift())) continue;

            // 名称
            const filename = PT.join(lang, dirent.name);
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
     * @param {string} lang 语言文件路径
     * @param {Map<string, string>} map 语言表
     */
    saver(lang, map)
    {
        const data = {};

        for (const [key, value] of map.entries())
        {
            data[key] = value;
        }

        FS.writeFileSync(lang, JSON.stringify(data, null, 4), { encoding: "utf-8", flag: "w" });
    }
}

const o = new TranslatableOption("package.json");
new TranslatableBuilder(o).builder();
// console.log(o);
