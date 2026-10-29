ServerEvents.recipes(event =>
{
    const _bount = id => "bountifulbaubles:" + id;

    // 崩解牌合成标签
    const tablet_tag = "#" + lycanitesmobs_disintegration_tablet_tag;

    // 幽冥粉
    event.recipes.kubejs.shapeless({ item: _bount("spectral_silt"), count: 4 }, [tablet_tag, _bount("disintegration_tablet")]);
});
