ServerEvents.recipes(event =>
{
    const _this = id => "dreadsteel:" + id;
    const _cataclysm = id => "cataclysm:" + id;
    const _graveyard = id => "graveyard:" + id;
    const _alexscaves = id => "alexscaves:" + id;


    event.remove({
        output: [
            _this("dreadsteel_helmet"),
            _this("dreadsteel_chestplate"),
            _this("dreadsteel_leggings"),
            _this("dreadsteel_boots"),
            _this("dreadsteel_shield")
        ]
    });

    event.shaped(_this("dreadsteel_helmet"), [
        [_this("dreadsteel_ingot"), _cataclysm("monstrous_horn"), _this("dreadsteel_ingot")],
        [_this("dreadsteel_ingot"), _graveyard("dark_iron_block"), _this("dreadsteel_ingot")],
        [_cataclysm("witherite_ingot"), "", _cataclysm("witherite_ingot")]
    ]);

    event.shaped(_this("dreadsteel_chestplate"), [
        [_this("dreadsteel_ingot"), "", _this("dreadsteel_ingot")],
        [_this("dreadsteel_ingot"), _cataclysm("ignitium_block"), _this("dreadsteel_ingot")],
        [_this("dreadsteel_ingot"), _graveyard("dark_iron_block"), _this("dreadsteel_ingot")]
    ]);

    event.shaped(_this("dreadsteel_leggings"), [
        [_this("dreadsteel_ingot"), _cataclysm("essence_of_the_storm"), _this("dreadsteel_ingot")],
        [_graveyard("dark_iron_block"), _this("dreadsteel_ingot"), _graveyard("dark_iron_block")],
        [_cataclysm("burning_ashes"), "", _cataclysm("burning_ashes")]
    ]);

    event.shaped(_this("dreadsteel_boots"), [
        [_cataclysm("black_steel_ingot"), "", _cataclysm("black_steel_ingot")],
        [_this("dreadsteel_ingot"), "", _this("dreadsteel_ingot")],
        [_graveyard("dark_iron_block"), "", _graveyard("dark_iron_block")]
    ]);

    event.shaped(_this("dreadsteel_shield"), [
        [_this("dreadsteel_ingot"), "", _this("dreadsteel_ingot")],
        [_this("dreadsteel_ingot"), _alexscaves("pure_darkness"), _this("dreadsteel_ingot")],
        [_graveyard("dark_iron_block"), _this("dreadsteel_ingot"), _graveyard("dark_iron_block")]
    ]);
});