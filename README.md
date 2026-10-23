# TinkersPower ModPack

## Overview
Project: TinkersPower Minecraft Forge 1.20.1 ModPack

Author: animator70@outlook.com

Java: **17**

## Please refer to the detailed module list
Path: [.manifest/index.html](.manifest/index.html)

Project address: [Github](https://github.com/thisNames/TinkersPower-ModPack)

## Building
### Server
- Builds a server package. For server setup, see [Server Installation Guide](#server-installation-guide).

- Run the npm script:
```cmd
npm run build_server
```

### Client
- Builds an online installer package.

- Run the npm script:
```cmd
npm run build_client
```

### Client (Offline)
- Note: builds a client replacement package, not an installer.

- **Prohibit publishing offline packages**.

- Run the npm script:
```cmd
npm run build_client_offline
```

## Server Installation Guide
### Download the Forge server installer
- [forge-1.20.1-47.4.20-installer.jar](https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-47.4.20/forge-1.20.1-47.4.20-installer.jar)

### Run the installer
1. Run the command:
```cmd
java -jar forge-1.20.1-47.4.20-installer.jar
```

2. Select server side: `install server`

3. Choose an empty directory

4. Copy the downloaded files into your server directory

## Running
### Launch script: `run.bat`
```bat
@echo off
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.20/win_args.txt %* nogui
pause
```

### JVM arguments: suggested `user_jvm_args.txt`
- Memory allocation
```txt
-Xms6G -Xmx8G
```

### Server config: suggested `server.properties`
```properties
# Allow flight
allow-flight=true

# Hard difficulty
difficulty=hard

# Default survival mode
gamemode=survival

# Force default game mode on player join
force-gamemode=true

# Players are required to have a Mojang signed public key in order to access the server (usually in conjunction with disabling genuine authentication)
enforce-secure-profile=false

# Do you want to enable online verification
online-mode=false
```

### Agreement: `eula.txt`
```txt
eula=true
```

---

## License
Restriction: **The packaged ModPack may not be published, uploaded, or made available for download without the author's permission.**
Third-party mods (.jar) and their bundled configurations belong to their respective authors and are governed by their own license terms.
Full terms are available in [LICENSE](./LICENSE).

Copyright © 2026 animator70@outlook.com.
