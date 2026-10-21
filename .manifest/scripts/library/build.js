const FS = require("node:fs");
const PT = require("node:path");

// 打包脚本依赖
const { ModLoader, Minecraft, ModFile, Manifest } = require("../../js/manifest");

/**
 * 平台类型
 */
class PlatformType
{
    /** @type {string} 服务端 */
    static server = "server";

    /** @type {string} 客户端 */
    static clientOnline = "client";

    /** @type {string}  客户端离线 */
    static clientOffline = "client_offline";
}

/**
 * 平台名单对象
 */
class PlatformOption
{
    /**
     * 平台配置对象
     * @param {string} whitelist 白名单
     * @param {Array<string>} list 名单
     * @param {boolean} skip 跳过此项
     */
    constructor(whitelist, list, skip)
    {
        /** @type {boolean} true 为白名单模式，false 为黑名单模式 */
        this.whitelist = whitelist;

        /** @type {Array<string>} 名单集合 */
        this.list = list;

        /** @type {boolean} 跳过此项 */
        this.skip = skip;
    }
}

/**
 * 清单配置对象
 */
class ManifestOption
{
    /**
     * 创建清单配置对象
     * @param {string} path manifest.json
     */
    constructor(path)
    {
        /** @type {string} 清单文件路径 */
        this.path = path;

        /** @type {Manifest} 清单文件对象 */
        this.manifest = ManifestOption.load(this.path);
    }

    /**
     * 加载清单对象
     * @param {string} path manifest.json
     * @returns {Manifest}
     */
    static load(path)
    {
        if (!FS.existsSync(path) || !FS.statSync(path).isFile()) throw new Error("没有找到 manifest.json 文件！");

        const buffer = FS.readFileSync(path, "utf-8");
        const data = JSON.parse(buffer);
        const files = data.files.map(f => new ModFile(f.projectID, f.fileID, f.required, f.isLocked));

        const modloader = [new ModLoader(data.minecraft.modLoaders[0].id, data.minecraft.modLoaders[0].primary)];
        const minecraft = new Minecraft(data.minecraft.version, modloader, data.minecraft.recommendedRam);
        const manifest = new Manifest(data.name, data.version, data.author, minecraft, data.manifestType, data.manifestVersion, data.overrides, files);

        return manifest;
    }
}

/**
 * 打包配置对象
 */
class BuildOption
{
    /**
     * 创建打包配置对象
     * @param {string} pack package.json
     * @param {string} output 输出路径
     */
    constructor(pack, output)
    {
        /** @type {ManifestOption} package.json 文件路径 */
        this.pack = pack;

        /** @type {string} 输出路径 */
        this.output = output;


        /** @type {ManifestOption} 清单文件路径 manifest.json */
        this.manifest = null;

        /** @type {string} 模组列表文件路径 modlist.html */
        this.modlist = "";

        /** @type {string} 客户端配置文件路径 */
        this.optionsTxt = "";

        /** @type {Array<string>} 必须包含的项集合 */
        this.required = [];

        /** @type {Map<string, PlatformOption>} 服务端打包清单 */
        this.server = new Map();

        /** @type {Map<string, PlatformOption>} 客户端端打包清单 */
        this.clientOnline = new Map();

        /** @type {Map<string, PlatformOption>} 客户端端离线打包清单 */
        this.clientOffline = new Map();

        // 初始化
        this.init(this.pack);
    }

    /**
     * 初始化
     * @param {string} pack package.json
     */
    init(pack)
    {
        const buffer = FS.readFileSync(pack, "utf-8");
        const data = JSON.parse(buffer);
        const build = data.build;

        // 赋值
        this.manifest = new ManifestOption(build.manifest);
        this.modlist = build.modlist;
        this.optionsTxt = build.optionsTxt;
        this.required = build.required;

        // platform
        this.loadPlatform(this.server, build.server);
        this.loadPlatform(this.clientOnline, build.client.online);
        this.loadPlatform(this.clientOffline, build.client.offline);
    }

    /**
     * 加载平台对象 
     * @param {Map<string, PlatformOption>} platform 平台对象
     * @param {Object} data 对象
     */
    loadPlatform(platform, data)
    {
        for (const key in data)
        {
            const value = data[key];

            platform.set(key, new PlatformOption(value.whitelist, value.list, value.skip));
        }
    }
}

/**
 * 打包器
 */
class BuildBuilder
{
    /**
     * 创建打包器
     * @param {BuildOption} option 打包对象
     */
    constructor(option)
    {
        /** @type {BuildOption} 打包配置对象 */
        this.option = option;

        /** @type {string} 输出路径 */
        this.output = "";

        /** @type {string}  overrides 路径 */
        this.overrides = "";
    }

    /**
     * 获取清单对象
     * @returns {Manifest}
     */
    get Manifest() { return this.option.manifest.manifest };

    /**
     * 获取服务端
     * @returns {Map<string, PlatformOption>}
     */
    get Server() { return this.option.server };

    /**
     * 获取客户端
     * @returns {Map<string, PlatformOption>}
     */
    get ClientOnline() { return this.option.clientOnline };

    /**
     * 获取客户端离线
     * @returns {Map<string, PlatformOption>}
     */
    get ClientOffline() { return this.option.clientOffline };

    /**
     * 生成
     * @param {PlatformType} type 平台类型
     */
    builder(type)
    {
        if (type == PlatformType.server) return BuildBuilder.generator(this.option, this.option.server);
        if (type == PlatformType.clientOnline) return BuildBuilder.generator(this.option, this.option.clientOnline);
        if (type == PlatformType.clientOffline) return BuildBuilder.generator(this.option, this.option.clientOffline);

        throw new Error("不知道的打包类型！");
    }

    /**
     * 创建输出目录结构
     * @param {string} platform 平台分类目录名称
     * @returns {BuildBuilder} this
     */
    createOutput(platform)
    {
        const packname = [
            this.Manifest.name,
            this.Manifest.version,
            this.Manifest.minecraft.version,
            this.Manifest.minecraft.modLoaders[0].id.split("-").shift()
        ].join("-");

        this.output = PT.join(this.option.output, platform, packname);

        // 不存在则创建
        if (!FS.existsSync(this.output)) FS.mkdirSync(this.output, { recursive: true });

        return this;
    }

    /**
     * 创建 overrides 目录结构
     * @returns {BuildBuilder} this
     */
    createOverrides()
    {
        this.overrides = PT.join(this.output, this.Manifest.overrides);

        // 不存在则创建
        if (!FS.existsSync(this.overrides)) FS.mkdirSync(this.overrides, { recursive: true });

        return this;
    }

    /**
     * 拷贝清单文件
     * @returns {BuildBuilder} this
     */
    copyingManifest()
    {
        // manifest.json
        const manifestBuffer = FS.readFileSync(this.option.manifest.path, "utf-8");
        // modlist.html
        const modlistBuffer = FS.readFileSync(this.option.modlist, "utf-8");

        // 输出
        const manifestTo = PT.join(this.output, "manifest.json");
        const modlistTo = PT.join(this.output, "modlist.html");

        // 写入
        FS.writeFileSync(manifestTo, manifestBuffer, { encoding: "utf-8", flag: "w" });
        FS.writeFileSync(modlistTo, modlistBuffer, { encoding: "utf-8", flag: "w" });

        return this;
    }

    /**
     * 拷贝客户端选项文件
     * @returns {BuildBuilder} this
     */
    copyingOptionsTxt()
    {
        // options.txt
        const optionsTxtBuffer = FS.readFileSync(this.option.optionsTxt, "utf-8");

        // 输出
        const optionsTxtTo = PT.join(this.overrides, "options.txt");

        // 写入
        FS.writeFileSync(optionsTxtTo, optionsTxtBuffer, { encoding: "utf-8", flag: "w" });

        return this;
    }

    /**
     * 生成器
     * @param {BuildOption} option 打包对象
     * @param {Map<string, PlatformOption} platform 平台配置
     */
    static generator(option, platform)
    {

    }
}

// TODO: testing
const bbr = new BuildBuilder(new BuildOption("package.json", "build")).createOutput(PlatformType.clientOnline).createOverrides().copyingOptionsTxt();

module.exports = {
    PlatformType,
    PlatformOption,
    ManifestOption,
    BuildOption,
    BuildBuilder
};
