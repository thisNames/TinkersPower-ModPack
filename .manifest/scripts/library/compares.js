/**
 * 比较依赖
 */

const FS = require("node:fs");
const PT = require("node:path");

/**
 * 模组比较项（清单文件和本地 mods 目录）
 */
class LocationCompareMods
{
    /**
     * 创建模组比较项
     * @param {string} dir 目录路径
     * @param {string} modsJson mods.json 文件路径
     */
    constructor(dir, modsJson)
    {
        /** @type {number} 项目数量 */
        this.count = 0;

        /** @type {Array<string>} 项目集合 */
        this.list = [];

        /** @type {string} mods.json 文件路径 */
        this.modsJson = modsJson;

        this.init(dir);
    }

    /**
     * 初始化
     * @param {string} dir 目录路径
     */
    init(dir)
    {
        this.list = FS.readdirSync(dir, { encoding: "utf-8" });
        this.count = this.list.length;
    }

    /**
     * 比较（以两个并集为标准）
     * @returns {{manifest: Array<string>, mods: Array<string>}} 
     */
    compare()
    {
        const buffer = FS.readFileSync(this.modsJson, { encoding: "utf-8" });

        /** @type {LocationCompareMods} 模组列表对象 */
        const target = JSON.parse(buffer);

        /** @type {Set<string>} 标准集 */
        const standSet = new Set([...this.list, ...target.list]);

        /** @type {Set<string>} 模组目录集 */
        const sourceSet = new Set([...this.list]);

        /** @type {Set<string>} 模组清单集 */
        const targetSet = new Set([...target.list]);

        // mods 目录里的文件
        const diffSource = [];
        // 模组清单上的文件
        const diffTarget = [];

        // 比较
        standSet.forEach(item =>
        {
            !sourceSet.has(item) && diffSource.push(item);
            !targetSet.has(item) && diffTarget.push(item);
        });

        return { manifest: diffTarget, mods: diffSource };
    }
}

module.exports = {
    LocationCompareMods
}
