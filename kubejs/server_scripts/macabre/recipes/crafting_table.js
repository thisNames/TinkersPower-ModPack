ServerEvents.recipes(event =>
{
    const _this = id => "macabre:" + id;
    const _spore = id => "spore:" + id;
    const _mc = id => "minecraft:" + id;
    const _biom = id => "biomesoplenty:" + id;

    // 移除
    event.remove({
        output: [
            _this("hemorrhage_sword"),
            _this("true_gorescythe")
        ]
    });

    // id
    event.remove({ id: "macabre:sac_dir_rec" });

    // 饮湿者
    event.shaped(_this("moistdrinker"), [
        [_this("flesh"), _this("flesh"), _this("skin_tissue")],
        [_this("sacrificial_dirk"), _this("skin_tissue"), _this("flesh")],
        [_spore("greatsword"), _this("sacrificial_dirk"), _this("flesh")]
    ]);

    // 侧眼
    event.shaped(_this("sideye"), [
        [_this("loose_sinew"), _this("loose_sinew"), _this("eye")],
        [_this("heart"), _this("eye"), _this("heart")],
        [_this("moistdrinker"), _this("heart"), _this("loose_sinew")]
    ]);

    // 浸血巨刃
    event.shaped(_this("hemorrhage_sword"), [
        [_this("baal_heart"), _this("crystalized_blood"), _this("gomoria_heart")],
        [_this("crystalized_blood"), _this("gargamaw_heart"), _this("crystalized_blood")],
        [_spore("rapier"), _this("crystalized_blood"), _this("morphegor_heart")]
    ]);

    // 浸血巨镰
    event.shaped(_this("true_gorescythe"), [
        [_this("baal_heart"), _this("crystalized_blood"), _this("gomoria_heart")],
        [_this("crystalized_blood"), _this("valamon_heart"), _this("crystalized_blood")],
        [_spore("scythe"), _this("crystalized_blood"), _this("morphegor_heart")]
    ]);

    // 献祭匕首
    event.shaped(_this("sacrificial_dirk"), [
        ["", "", _biom("eyebulb")],
        [_biom("flesh"), _mc("netherite_ingot"), ""],
        [_mc("blaze_rod"), _biom("porous_flesh"), ""]
    ]);
});
