ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:shiraz_palace/shiraz_palace_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.addTag("acs:m1", true).weight(10).count([1, 2]);
            pool.addTag("acs:m2", true).weight(10).count([1, 3]);
            pool.addTag("acs:m3", true).weight(30).count([1, 8]);
            pool.addEmpty(50);

            pool.rolls = 4;
        });
        
        loot.addPool(pool =>
        {
            pool.addItem("quark:diamond_heart").weight(25).count(1);
            pool.addEmpty(75);
        });

        loot.addPool(pool =>
        {
            pool.addItem("trinketsandbaubles:moon_rose")
                .weight(25)
                .count(1)
                .enchantRandomly("minecraft:fire_aspect")
                .name(Text.translatable("loot.kubejs.tooltip.trinketsandbaubles.moon_rose_frie"));

            pool.addEmpty(75);
        });
    });
});
