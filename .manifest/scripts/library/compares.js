/**
 * 比较依赖
 */

const FS = require("node:fs");
const PT = require("node:path");

/**
 * 目录比较项
 */
class CompareFiles
{
    /**
     * 创建目录比较项
     * @param {string} dir 目录路径
     */
    constructor(dir)
    {
        /** @type {number} 项目数量 */
        this.count = 0;

        /** @type {Array<string>} 项目集合 */
        this.list = [];

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
     * 将集合保存到指定路径
     * @param {string} output 输出路径
     * @param {string} filename 文件名称
     */
    saverTo(output, filename)
    {
        // 目录不存在则创建
        if (!FS.existsSync(output)) FS.mkdirSync(output, { recursive: true });

        // 输出路径
        const out = PT.join(output, filename);

        // 写入
        FS.writeFileSync(out, JSON.stringify(this, null, 4), { encoding: "utf-8", flag: "w" });
    }
}

module.exports = {
    CompareFiles
}
