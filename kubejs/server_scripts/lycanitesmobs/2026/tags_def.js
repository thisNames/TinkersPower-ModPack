// priority: 2026

/**
 * 恐怖生物：崩解牌可崩解标签
 * @type {string}
 */
const lycanitesmobs_disintegration_tablet_tag = "lycanitesmobs:disintegration_tablet";

ServerEvents.tags("item", event =>
{
    const _this = id => "lycanitesmobs:" + id;    

    [
        _this("equipmentpart_afritlung"),
        _this("equipmentpart_apollyonclaw"),
        _this("equipmentpart_argustail"),
        _this("equipmentpart_arixbrain"),
        _this("equipmentpart_astarothclaw"),
        _this("equipmentpart_bansheeeye"),
        _this("equipmentpart_behemophethand"),
        _this("equipmentpart_belphegorarm"),
        _this("equipmentpart_bruchaquill"),
        _this("equipmentpart_cherufecore"),
        _this("equipmentpart_cinderblade"),
        _this("equipmentpart_clinkscythe"),
        _this("equipmentpart_conbabutt"),
        _this("equipmentpart_darklingskull"),
        _this("equipmentpart_eechetikarm"),
        _this("equipmentpart_entarm"),
        _this("equipmentpart_epionwing"),
        _this("equipmentpart_erepededrill"),
        _this("equipmentpart_ettinclub"),
        _this("equipmentpart_eyewigeye"),
        _this("equipmentpart_frostweaverleg"),
        _this("equipmentpart_gammasphere"),
        _this("equipmentpart_geonachfist"),
        _this("equipmentpart_geonachspear"),
        _this("equipmentpart_goldscepterhead"),
        _this("equipmentpart_grueclaw"),
        _this("equipmentpart_ioraystinger"),
        _this("equipmentpart_ironaxehead"),
        _this("equipmentpart_ironguard"),
        _this("equipmentpart_ironpaxel"),
        _this("equipmentpart_ironpikejoint"),
        _this("equipmentpart_ironrod"),
        _this("equipmentpart_lacedonhead"),
        _this("equipmentpart_malwratheye"),
        _this("equipmentpart_naxiriseye"),
        _this("equipmentpart_raidrablade"),
        _this("equipmentpart_reaperclaw"),
        _this("equipmentpart_reiverhorns"),
        _this("equipmentpart_remobrawing"),
        _this("equipmentpart_serpixmandible"),
        _this("equipmentpart_spectretendril"),
        _this("equipmentpart_sprigganheart"),
        _this("equipmentpart_sprigganroot"),
        _this("equipmentpart_stryderheart"),
        _this("equipmentpart_sutiramustinger"),
        _this("equipmentpart_sylphwing"),
        _this("equipmentpart_uvaraptorskull"),
        _this("equipmentpart_vapulacrystal"),
        _this("equipmentpart_ventoraptorskull"),
        _this("equipmentpart_vespidstinger"),
        _this("equipmentpart_wargskull"),
        _this("equipmentpart_wendigoantler"),
        _this("equipmentpart_wildkinarm"),
        _this("equipmentpart_woodenguard"),
        _this("equipmentpart_woodenpaxel"),
        _this("equipmentpart_woodenrod"),
        _this("equipmentpart_wraithskull"),
        _this("equipmentpart_xaphanspine"),
        _this("equipmentpart_zephyrcloud")
    ].forEach(item => event.add(lycanitesmobs_disintegration_tablet_tag, item));
});
