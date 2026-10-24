ServerEvents.genericLootTables(event =>
{
    event.modify("yungsextras:desert/chillzone", loot =>
    {
        loot.addPool(pool =>
        {
            pool.randomChance(1);
            pool.addItem("toughasnails:purified_water_bottle").weight(25).count(1);
            pool.addItem("toughasnails:melon_juice").weight(25).count(1);
            pool.addItem("toughasnails:cactus_juice").weight(25).count(1);
            pool.addItem("vinery:red_grapejuice").weight(25).count(1);
            pool.addItem("vinery:red_jungle_grapejuice").weight(25).count(1);

            pool.rolls = 5;
        });
    });
});
