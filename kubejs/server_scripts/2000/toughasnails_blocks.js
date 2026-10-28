// priority: 2000

/**
 * 坚定意志：热方块标签
 * @type {string}
 */
const toughasnails_hot_block_tag = "toughasnails:heating_blocks";

/**
 * 坚定意志：冷方块标签
 * @type {string}
 */
const toughasnails_cool_block_tag = "toughasnails:cooling_blocks";

/**
 * 坚定意志：方块集合（外部温度）
 * @type {Array<TDServerToughasnailsBlock>}
 */
const toughasnails_blocks_list = [
    alexscaves_toughasnails_blocks,
    aquamirae_toughasnails_blocks,
    cataclysm_toughasnails_blocks,
    create_toughasnails_blocks,
    iceandfire_toughasnails_blocks,
    lycanitesmobs_toughasnails_blocks,
    minecraft_toughasnails_block,
    quark_toughasnails_blocks,
    supplementaries_toughasnails_blocks,
    twilightforest_toughasnails_blocks
];


// 添加标签
ServerEvents.tags("block", event =>
{
    toughasnails_blocks_list.forEach(mod =>
    {
        mod.blocks.forEach(block =>
        {
            const id = nToiServer(mod.namespace, block.id);

            event.add(block.isHot ? toughasnails_hot_block_tag : toughasnails_cool_block_tag, id);
        });
    });
});
