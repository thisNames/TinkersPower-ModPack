ServerEvents.recipes(event =>
{
    const _this = id => "inqui:" + id;
    const _mc = id => "minecraft:" + id;
    const _biom = id => "biomesoplenty:" + id;
    const _deep = id => "deeperdarker:" + id;
    const _spore = id => "spore:" + id;
    const _chimes = id => "chimes:" + id;
    const _gra = id => "graveyard:" + id;

    // 腐梦时钟
    event.shaped(_this("bacterium_clock_dream"), [
        [_biom("porous_flesh"),_chimes("carved_bamboo_chimes"), _biom("porous_flesh")],
        [_biom("eyebulb"), _mc("clock"), _biom("eyebulb")],
        [_biom("porous_flesh"), _gra("corruption"), _biom("porous_flesh")]
    ]);

    // 菌庭暮时
    event.shaped(_this("bacterium_clock_finalitas"), [
        [_spore("mutated_fiber"), _chimes("amethyst_chimes"), _spore("mutated_fiber")],
        [_spore("mutated_heart"), _this("bacterium_clock_dream"), _spore("mutated_heart")],
        [_spore("mutated_fiber"), _deep("heart_of_the_deep"), _spore("mutated_fiber")]
    ]);
});
