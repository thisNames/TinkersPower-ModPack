StartupEvents.registry("item", event =>
{
    const _this = id => "tp_accessories:" + id;
    const _pcore = id => "potioncore:" + id;

    // 魔力戒指
    const magicRing = event.create(_this("magic_ring"), "basic");

    // 能力
    const magicRingCapability = CuriosJSCapabilityBuilder.create();

    // 饰品能力效果
    const magicRingEffect = _pcore("magic_focus");

    // 单独联动盔甲
    const goldenArmors = [
        "minecraft:golden_helmet",
        "minecraft:golden_chestplate",
        "minecraft:golden_leggings",
        "minecraft:golden_boots"
    ];

    // 基本参数设置
    magicRing
        .maxStackSize(1)
        .rarity("epic")
        .tooltip(Text.translatable("item.tp_accessories.magic_ring_text1"))
        .tooltip(Text.translatable("item.tp_accessories.magic_ring_text2").gold())
        .tag("curios:ring");

    // 设置能力
    magicRingCapability
        .canEquip((slotContext, stack) => true)
        .canUnequip((slotContext, stack) => true)
        .canEquipFromUse((slotContext, stack) => false)
        .curioTick((slotContext, stack) =>
        {
            const player = slotContext.entity();
            // 找到所有相同类型的饰品（必做的）
            const rings = player["findCurios(net.minecraft.world.item.Item)"](stack.getItem());
            // 取最小索引
            const minIndex = rings.get(0).slotContext().index();
            // 当前饰品所在的索引
            const currentIndex = slotContext.index();

            // 去重（当携带两个相同饰品时，只加等级不重复执行逻辑）
            // 重点：其实这里的所索引不是所有的索引，而是在 curios 配置里，
            // 这个饰品栏位类型的 size 索引，ring 的 size = 2，也就是说最多装 2 个，那么所以索引只有 0 1
            // 然后取最小索引饰品执行即可：如果 0 带了执行 0，1 带了 执行 1，都带了执行 0
            if (minIndex != currentIndex) return;
            
            // 等级
            let level = 0;

            if (wearsArmor(player, goldenArmors)) level++;
            if (rings.size() > 1) level++;

            // 给予效果
            applyEffectLevel(player, magicRingEffect, level, 200);
        })
        .onUnequip((slotContext, oldStack, newStack) => slotContext.entity().removeEffect(magicRingEffect));

    // 应用能力
    magicRing.attachCuriosCapability(magicRingCapability);
});

StartupEvents.registry("creative_mode_tab", event =>
{
    const _this = id => "tp_accessories:" + id;

    // 注册创造物品栏，并给予创造物品栏id
    const tab = event.create(_this("items"));

    // 设置创造物品栏的图标,注意这里的物品一定要是存在的
    tab.icon(() => Item.of(_this("magic_ring")));
    // 设置创造物品栏的显示名称
    tab.displayName = Text.translatable("item_group.tp_accessories.items");
    //往物品栏里添加物品
    tab.content(() => [
        _this("magic_ring")
    ]);
});
