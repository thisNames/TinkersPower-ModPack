// 日志类
const FS = require("node:fs");
const PT = require("node:path");

/**
 * 日志级别枚举
 */
class LogLevel
{
    /** @type {string} 调试信息 */
    static DEBUG = "DEBUG";
    /** @type {string} 常规信息 */
    static INFO = "INFO";
    /** @type {string} 警告信息 */
    static WARN = "WARN";
    /** @type {string} 错误信息 */
    static ERROR = "ERROR";
}

/**
 * Forge 风格日志器
 * 输出格式: [2010月2026 19:27:08.842] [INFO] [module]: 消息
 */
class Logger
{
    /** @type {string} 日志保存根目录 */
    static ROOT = PT.join("logs", "build");

    /**
     * 创建日志器
     * @param {string} filename 日志文件名称
     * @param {string} [module="ROOT"] 模块名称
     */
    constructor(filename, module = "ROOT")
    {
        /** @type {string} 日志文件名称 */
        this.filename = PT.extname(filename) == ".log" ? filename : filename + ".log";

        /** @type {string} 模块名称 */
        this.module = module;

        FS.mkdirSync(Logger.ROOT, { recursive: true });

        /** @type {number} 文件描述符 */
        this.fd = FS.openSync(PT.join(Logger.ROOT, this.filename), "w");

        process.once("exit", () => this.close());
    }

    /**
     * 格式化当前时间戳
     * @returns {string}
     */
    static timestamp()
    {
        const now = new Date();
        const pad = (value, length = 2) => String(value).padStart(length, "0");

        const date = `${pad(now.getDate())}${now.getMonth() + 1}月${now.getFullYear()}`;
        const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.${pad(now.getMilliseconds(), 3)}`;

        return `${date} ${time}`;
    }

    /**
     * 写出一条日志（落盘 + 控制台）
     * @param {string} level 日志级别
     * @param {string} module 模块名称
     * @param {string} message 日志内容
     */
    _write(level, module, message)
    {
        const line = `[${Logger.timestamp()}] [${level}] [${module}]: ${message}`;
        FS.writeSync(this.fd, line + "\n");

        if (level == LogLevel.ERROR) console.error(line);
        else if (level == LogLevel.WARN) console.warn(line);
        else console.log(line);
    }

    /**
     * 输出 DEBUG 级别日志
     * @param {string} message 日志内容
     * @returns {Logger}
     */
    debug(message)
    {
        this._write(LogLevel.DEBUG, this.module, message);
        return this;
    }

    /**
     * 输出 INFO 级别日志
     * @param {string} message 日志内容
     * @returns {Logger}
     */
    info(message)
    {
        this._write(LogLevel.INFO, this.module, message);
        return this;
    }

    /**
     * 输出 WARN 级别日志
     * @param {string} message 日志内容
     * @returns {Logger}
     */
    warn(message)
    {
        this._write(LogLevel.WARN, this.module, message);
        return this;
    }

    /**
     * 输出 ERROR 级别日志
     * @param {string} message 日志内容
     * @returns {Logger}
     */
    error(message)
    {
        this._write(LogLevel.ERROR, this.module, message);
        return this;
    }

    /**
     * 关闭日志文件
     * @returns {Logger}
     */
    close()
    {
        if (this.fd != null)
        {
            FS.closeSync(this.fd);
            
            this.fd = null;
        }

        return this;
    }
}

module.exports = {
    Logger,
    LogLevel
};
