const FS = require("node:fs");
const PT = require("node:path");

// 清单文件地址
const MANIFEST_PATH = ".manifest/manifest.json";
const MODLIST_PATH = ".manifest/modlist.html";
// 输出目录
const BUILD_DIR = "build/dev";

// 创建目录
if (!FS.existsSync(BUILD_DIR)) FS.mkdirSync(BUILD_DIR, { recursive: true });

// 读取
const str = FS.readFileSync(MANIFEST_PATH, "utf-8");
const manifest = JSON.parse(str);

// 解析
const dirname = manifest.name + "-" + manifest.version;
const root = PT.join(BUILD_DIR, dirname);
const over = PT.join(root, "overrides");
const mods = PT.join(over, "mods");


// 创建目录
if (!FS.existsSync(root)) FS.mkdirSync(root, { recursive: true });
if (!FS.existsSync(over)) FS.mkdirSync(over, { recursive: true });
if (!FS.existsSync(mods)) FS.mkdirSync(mods, { recursive: true });

// 拷贝文件
FS.copyFileSync(MANIFEST_PATH, PT.join(root, PT.basename(MANIFEST_PATH)));
FS.copyFileSync(MODLIST_PATH, PT.join(root, PT.basename(MODLIST_PATH)));
FS.copyFileSync(MODLIST_PATH, PT.join(root, PT.basename(MODLIST_PATH)));
