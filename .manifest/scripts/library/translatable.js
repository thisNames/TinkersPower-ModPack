/**
 * 翻译键对齐：
 * 1. 先收集所有 lang 文件作为基准集合（具体配置以：package.json 里的 translatable）
 * 2. 再用基准合计逐一分发给各个 lang 文件，确保每个类型的 lang 文件的 key 都是相同的
 * 
 * 配置：
 * alignment：对齐那些语言（例如：如果想要所有的 lang 都对齐 zh_cn 的 key，则 alignment = [zh_cn]）注意：alignment 必须是 lang 的子集
 * lang：支持那些语言
 */

const FS = require("node:fs");
const PT = require("node:path");

/**
 * 翻译键排序配置
 */
class TranslatableSortOption
{
    /** @type {string} 升序 */
    static collation_a_z = "a-z";

    /** @type {string} 降序 */
    static collation_z_a = "z-a";

    /**
     * 创建翻译键排序配置对象
     * @param {boolean} enable 是否启用排序
     * @param {string} collation 排序规则
     */
    constructor(enable, collation)
    {
        /** @type {boolean} enable 是否启用排序 */
        this.enable = enable;

        /** @type {string} collation 排序规则 */
        this.collation = "";

        // 排序规则校验
        const collationInculde = [TranslatableSortOption.collation_a_z, TranslatableSortOption.collation_z_a];
        const collationLower = collation.toLowerCase();

        // 不存在
        if (!collationInculde.includes(collationLower)) throw new Error("sort collation error not is: " + collationInculde.join(", "));

        // 赋值
        this.collation = collationLower;
    }
}

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
        /** @type {TranslatableSortOption} 排序规则配置 */
        this.sort = null;

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

        // 排序
        this.sort = new TranslatableSortOption(translatable.sort.enable, translatable.sort.collation);

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

        /** @type {(filename: string, count: number, diff: number) => void} 计数回调 */
        this.counting = null;
    }

    /**
     * 获取排序配置
     * @returns {TranslatableSortOption}
     */
    get Sort()
    {
        return this.option.sort;
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
     * 计数回调
     * @param {(filename: string, count: number, diff: number)} func 函数回调
     * @returns {TranslatableBuilder} this
     */
    onCounting(func)
    {
        this.counting = func;

        return this;
    }

    /**
     * 生成
     * @throws 空 lang 异常
     * @returns {number}
     */
    builder()
    {
        // 至少包含一个语言文件
        if (this.Lang.length < 1) throw new Error("lang is empty");

        // 总的翻译键数量（所有语言）
        let totalKayCount = 0;

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
                    totalKayCount += TranslatableBuilder.translatableGenerator(PT.join(required, namespace.name), this);
                }
            }
        }

        return totalKayCount;
    }

    /**
     * 语言文件生成
     * @param {string} namespace 名命空间路径
     * @param {TranslatableBuilder} builder 语言翻译生成器对象
     * @returns {number}
     */
    static translatableGenerator(namespace, builder)
    {
        // 语言目录路径
        const lang = PT.join(namespace, "lang");

        // 排除不存在的目录
        if (!FS.existsSync(lang) || !FS.statSync(lang).isDirectory()) return 0;

        // 对齐基准集合
        const alignment = TranslatableBuilder.collectLanguageKeys(lang, builder);

        // 对齐 key
        for (let i = 0; i < builder.Lang.length; i++)
        {
            // 语言项
            const ln = builder.Lang[i];
            // 语言文件路径
            const filename = PT.join(lang, ln + builder.ext);
            // 语言表
            const map = new Map();

            // 当前语言键数量
            let count = 0;
            // 当前语言键调整数量
            let diff = 0;

            // 校验、对齐（存在）
            if (FS.existsSync(filename) && FS.statSync(filename).isFile())
            {
                const data = JSON.parse(FS.readFileSync(filename, { encoding: "utf-8" }));
                const keys = Object.keys(data);

                // 计数总
                count = keys.length;

                // 遍历所有的健
                for (let j = 0; j < keys.length; j++)
                {
                    // 翻译健
                    const key = keys[j];

                    // 翻译文本
                    if (alignment.has(key))
                    {
                        map.set(key, data[key]);
                        diff++;
                    }
                    else
                    {
                        map.set(key, builder.getPrefixKey(key));
                    }
                }
            }
            else
            {
                // 生成（不存在）
                alignment.forEach(key => map.set(key, builder.getPrefixKey(key)));
            }

            // 保存
            TranslatableBuilder.mapSaveToJsonStringify(filename, map, builder);

            // 回调统计
            builder.counting && builder.counting(filename, count, alignment.size - diff);
        }

        // 总的 key 数量：对齐数量 * 语言数量
        return alignment.size * builder.Lang.length;
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
     * @param @param {TranslatableBuilder} builder 语言翻译生成器对象
     */
    static mapSaveToJsonStringify(filename, map, builder)
    {
        // 转为对象
        const data = Object.fromEntries(map.entries());
        // 排序对象
        const dataSort = {};

        // 排序
        if (builder.Sort.enable)
        {
            // 拿到排序后的 key
            const keys = Object.keys(data).sort((a, z) =>
            {
                return builder.Sort.collation == TranslatableSortOption.collation_a_z ? a.localeCompare(z) : z.localeCompare(a);
            });

            // 存入新的对象
            keys.forEach(key =>
            {
                dataSort[key] = data[key];
            });

            // 写入排序
            FS.writeFileSync(filename, JSON.stringify(dataSort, null, builder.space), { encoding: "utf-8", flag: "w" });

            return;
        }

        // 写入默认
        FS.writeFileSync(filename, JSON.stringify(data, null, builder.space), { encoding: "utf-8", flag: "w" });
    }
}

module.exports = {
    TranslatableSortOption,
    TranslatableOption,
    TranslatableBuilder
};
