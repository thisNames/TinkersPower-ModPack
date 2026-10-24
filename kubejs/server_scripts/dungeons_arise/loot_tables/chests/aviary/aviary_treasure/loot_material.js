ServerEvents.chestLootTables(event =>
{
    event.modify("dungeons_arise:aviary/aviary_treasure", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(0.1);
            pool.addTag("acs:m1", true).weight(10).quality(1).count([1, 2]);
            pool.addTag("acs:m2", true).weight(40).quality(1).count([1, 3]);
            pool.addEmpty(50);

            pool.rolls = 3;
            pool.bonusRolls = 1;
        });

        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("quark:diamond_heart").weight(50).quality(1).count(1);
            pool.addEmpty(50);

            pool.bonusRolls = 1;
        });

        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("xat:moon_rose")
                .weight(25)
                .quality(1)
                .count(1)
                .enchantRandomly("minecraft:fire_aspect")
                .name(Text.translatable("loot.kubejs.tooltip.xat.moon_rose_frie"));

            pool.addEmpty(75);

            pool.bonusRolls = 1;
        });
    });
});
