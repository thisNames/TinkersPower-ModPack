// 客户端打包（离线）
const PT = require("node:path");

const { PlatformType, BuildOption, BuildBuilder } = require("./library/build");
const { Logger } = require("./library/logger");

const bbrClientOffline = new BuildBuilder(new BuildOption(BuildOption.PACKAGE_JSON, BuildOption.BUILD));
const platform = PlatformType.clientOffline;
const logger = new Logger(platform, PT.basename(__filename));

bbrClientOffline.eventCopying((source, target) => logger.info(target));

bbrClientOffline
    .createOutput(platform)
    .offline()
    .copyingOptionsTxt()
    .copyingExplanation();

bbrClientOffline
    .builder(platform)
    .then(res =>
    {
        logger.info(`source: ${BuildBuilder.totalFileTables(res.source)}`);
        logger.info(`target: ${BuildBuilder.totalFileTables(res.target)}`);
        logger.info(`additional: ${bbrClientOffline.additionalFile}`);
    })
    .catch(err => logger.error(err.message))
    .finally(() => logger.close());
