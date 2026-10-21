/**
 * 模组加载器配置类
 */
class ModLoader
{
    /**
     * @param {String} id 模组加载器 id
     * @param {Boolean} primary 是否是主要加载器
     */
    constructor(id, primary)
    {
        this.id = id;
        this.primary = primary;
    }
}

/**
 * Minecraft 配置类
 */
class Minecraft
{
    /**
     * @param {String} version Minecraft 版本号
     * @param {Array<ModLoader>} modLoaders 模组加载器
     * @param {Number} recommendedRam 建议分配内存
     */
    constructor(version, modLoaders, recommendedRam)
    {
        this.version = version;
        this.modLoaders = modLoaders;
        this.recommendedRam = recommendedRam;
    }
}

/**
 * 模组文件配置类
 */
class ModFile
{
    /**
     * @param {Number} projectID 模组 id
     * @param {Number} fileID 模组版本/文件 id
     * @param {Boolean} required 是否是必需模组
     * @param {Boolean} isLocked 是否是锁定模组
     */
    constructor(projectID, fileID, required, isLocked)
    {
        this.projectID = projectID;
        this.fileID = fileID;
        this.required = required;
        this.isLocked = isLocked;
    }
}

/**
 * 清单配置类
 */
class Manifest
{
    /**
     * @param {String} name 整合包 名称
     * @param {String} version 整合包版本
     * @param {String} author 整合包作者
     * @param {Minecraft} mc Minecraft 配置类
     * @param {String} mt 清单类型
     * @param {Number} mv 清单格式版本
     * @param {String} over 覆盖目录名称
     * @param {Array<ModFile>} files 模组文件配置类
     */
    constructor(name, version, author, mc, mt, mv, over, files)
    {
        this.name = name;
        this.version = version;
        this.author = author;
        this.minecraft = mc;
        this.manifestType = mt;
        this.manifestVersion = mv;
        this.overrides = over;
        this.files = files;
    }
}

// node
if (typeof process !== "undefined" && process.versions && process.versions.node)
{
    module.exports = {
        ModLoader,
        Minecraft,
        ModFile,
        Manifest
    };
}
