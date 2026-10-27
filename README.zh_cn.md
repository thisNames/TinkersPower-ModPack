# TinkersPower ModPack

## GIT COMMIT
注意：每次提交代码，请务必执行 **`alignment_options`** NPM [脚本](.manifest/scripts/alignment_options.js)

## 简述
项目：TinkersPower Minecraft Forge 1.20.1 整合包

作者: animator70@outlook.com

Java：**17**

## 详细模组列表请看
路径：[.manifest/index.html](.manifest/index.html)

项目地址：[Github](https://github.com/thisNames/TinkersPower-ModPack)

## 打包
### 服务端
- 打包为服务端包，服务器安装见 [服务端安装指南](#服务端安装指南)

- 运行脚本 npm 命令：
```cmd
npm run build_server
```

### 客户端
- 打包为在线安装包

- 运行脚本 npm 命令：
```cmd
npm run build_client
```

### 客户端离线
- 注意：打包为客户端替换包，不是安装包

- **禁止发布离线包**

- 运行脚本 npm 命令：
```cmd
npm run build_client_offline
```

## 服务端安装指南
### 下载 forge 服务器核心安装文件
- [forge-1.20.1-47.4.20-installer.jar](https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-47.4.20/forge-1.20.1-47.4.20-installer.jar)

### 运行下载服务核心文件
1. 运行命令
```cmd
java -jar forge-1.20.1-47.4.20-installer.jar
```

2. 选择服务器端：`install server`

3. 选择一个空目录

4. 将下载好的文件复制到服务端目录中

## 运行
### 启动脚本：`run.bat`
```bat
@echo off
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.20/win_args.txt %* nogui
pause
```

### JVM 参数：`user_jvm_args.txt` 建议
- 内部分配
```txt
-Xms6G -Xmx8G
```

### 服务器配置：`server.properties` 建议
```properties
# 允许飞行
allow-flight=true

# 难度困难
difficulty=hard

# 默认生存模式
gamemode=survival

# 强制玩家加入时为默认游戏模式
force-gamemode=true
```

### 协议：eula.txt
```txt
eula=true
```

### 首次进入新存档建议运行命令
- 创建结构缓存，提升结构的加载速度
```cmd
/modernfix upgradeStructures
```

---

## 许可证
限制：**未经作者许可，不得将打包后的整合包发布、上传或提供下载。**
第三方模组（.jar）及其自带配置归各自作者所有，遵循其自身许可协议。
完整条款见 [LICENSE](./LICENSE)。

版权所有 © 2026 animator70@outlook.com。

