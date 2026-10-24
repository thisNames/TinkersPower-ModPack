// 客户端打包
const PT = require("node:path");

const { PlatformType, BuildOption, BuildBuilder } = require("./library/build");
const { Logger } = require("./library/logger");

const bbrClient = new BuildBuilder(new BuildOption(BuildOption.PACKAGE_JSON, BuildOption.BUILD));
const platform = PlatformType.clientOnline;
const logger = new Logger(platform, PT.basename(__filename));

bbrClient.eventCopying((source, target) => logger.info("copying: " + target));
bbrClient.eventThrowing(source => logger.info("throwing: " + source));

bbrClient
    .createOutput(platform)
    .createOverrides()
    .copyingManifest()
    .copyingOptionsTxt()
    .copyingExplanation();

bbrClient
    .builder(platform)
    .then(res =>
    {
        logger.info(`source: ${BuildBuilder.totalFileTables(res.source)}`);
        logger.info(`target: ${BuildBuilder.totalFileTables(res.target)}`);
        logger.info(`additional: ${bbrClient.additionalFile}`);
        logger.info(`throwing: ${bbrClient.throwingFile}`);
    })
    .catch(err => logger.error(err.message))
    .finally(() => logger.close());
