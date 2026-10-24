// 服务端打包
const PT = require("node:path");

const { PlatformType, BuildOption, BuildBuilder } = require("./library/build");
const { Logger } = require("./library/logger");

const bbrServer = new BuildBuilder(new BuildOption(BuildOption.PACKAGE_JSON, BuildOption.BUILD));
const platform = PlatformType.server;
const logger = new Logger(platform, PT.basename(__filename));

bbrServer.eventCopying((source, target) => logger.info("copying: " + target));
bbrServer.eventThrowing(source => logger.info("throwing: " + source));

bbrServer
    .createOutput(platform)
    .offline()
    .copyingExplanation();

bbrServer
    .builder(platform)
    .then(res =>
    {
        logger.info(`source: ${BuildBuilder.totalFileTables(res.source)}`);
        logger.info(`target: ${BuildBuilder.totalFileTables(res.target)}`);
        logger.info(`additional: ${bbrServer.additionalFile}`);
        logger.info(`throwing: ${bbrServer.throwingFile}`);
    })
    .catch(err => logger.error(err.message))
    .finally(() => logger.close());
