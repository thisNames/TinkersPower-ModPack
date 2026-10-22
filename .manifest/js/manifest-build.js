/**
 * 创建模组下载链接
 * @param {Number} projectID 模组 ID
 * @param {Number} fileID 模组文件 ID（版本 ID）
 * @returns {String}
 */
const createDownloadLink = (projectID, fileID) => `https://www.curseforge.com/api/v1/mods/${projectID}/files/${fileID}/download`;

// 整合包名称
const mname = document.querySelector(".name").textContent.trim();
// 整合包版本
const version = document.querySelector(".version").textContent.trim();
// 整合包作者
const author = document.querySelector(".author").textContent.trim();
// 游戏版本
const mcVersion = document.querySelector(".mc-version").textContent.trim();
// 建议分配内存
const recommendedRam = document.querySelector(".recommended-ram").textContent.trim();
// 清单类型
const manifestType = document.querySelector(".manifest-type").textContent.trim();
// 清单格式版本
const manifestVersion = document.querySelector(".manifest-version").textContent.trim();
// 覆盖目录名称
const overrides = document.querySelector(".overrides").textContent.trim();
// 文件列表
const fileList = [...document.querySelectorAll(".item")];
// 导航栏列表
const nav = document.querySelector(".nav>ul.list");
// 导航栏元素
const navList = [...document.querySelectorAll("body>div[id]")];


// 模组加载器对象
const modLoaders = [...document.querySelectorAll(".mod-loader")].map(el => new ModLoader(el.textContent.trim(), el.classList.contains("primary")));

// Minecraft 对象
const minecraft = new Minecraft(mcVersion, modLoaders, Number.parseInt(recommendedRam));

// 模组列表
const modFiles = fileList.filter(el => !el.classList.contains("disable")).map(el => new ModFile(
    Number.parseInt(el.querySelector(".project-id").textContent.trim()),
    Number.parseInt(el.querySelector(".file-id").textContent.trim()),
    true,
    false
));

// 清单对象
const manifest = new Manifest(mname, version, author, minecraft, manifestType, Number.parseInt(manifestVersion), overrides, modFiles);

// 生成文件
const manifestBtn = document.querySelector(".manifest-btn");
const modlistBtn = document.querySelector(".modlist-btn");
const filesCount = document.querySelector(".files");

// 设置文件数量
filesCount.textContent = fileList.length;

// 点击下载 manifest.json 文件
manifestBtn.addEventListener("click", () =>
{
    const manifestFile = new Blob([JSON.stringify(manifest, null, 4)], { type: "application/json" });
    const manifestUrl = URL.createObjectURL(manifestFile);

    const download = document.createElement("a");
    download.href = manifestUrl;
    download.download = "manifest.json";

    download.click();
});

// 点击下载 modlist.html 文件
modlistBtn.addEventListener("click", () =>
{
    const ul = new Array(["<ul>"]);

    fileList.forEach(el =>
    {
        if (el.classList.contains("disable")) return;
        
        const mname = el.querySelector(".name").textContent.trim();
        const href = el.querySelector(".cf-link").href;
        const li = `\t<li><a href="${href}">${mname}</a></li>`;

        ul.push(li);
    });

    ul.push("</ul>");

    // 将 ul 转换为纯文本后下载
    const modlistFile = new Blob([ul.join("\r\n")], { type: "text/plain" });
    const modlistUrl = URL.createObjectURL(modlistFile);

    const download = document.createElement("a");
    download.href = modlistUrl;
    download.download = "modlist.html";

    download.click();
});

// 创建下载链接
fileList.forEach(el =>
{
    // 魔改模组，不下载
    if (el.classList.contains("disable")) return;

    const projectID = Number.parseInt(el.querySelector(".project-id").textContent.trim());
    const fileID = Number.parseInt(el.querySelector(".file-id").textContent.trim());
    const downloadLink = createDownloadLink(projectID, fileID);
    const alink = document.createElement("a");

    alink.classList.add("cf-download-link");
    alink.textContent = "下载模组";
    alink.href = downloadLink;

    el.appendChild(alink);
});

// 导航栏生成
navList.forEach(el =>
{
    const id = el.id;
    const name = el.querySelector(".title>h2").textContent.trim();
    const li = document.createElement("li");
    const a = document.createElement("a");
    const span = document.createElement("span");

    // 跳转链接
    a.href = `#${id}`;
    a.textContent = name;

    // id
    span.textContent = id;

    li.appendChild(a);
    li.appendChild(span);
    nav.appendChild(li);
});


// 设置标题
document.title = document.title + "-" + document.querySelector(".mc-version").textContent + "-" + document.querySelector(".version").textContent;
