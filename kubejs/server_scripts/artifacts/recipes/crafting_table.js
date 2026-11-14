ServerEvents.recipes(event =>
{
    const _bount = id => "bountifulbaubles:" + id;

    // 幽冥粉
    event.shapeless({ item: _bount("spectral_silt"), count: 1 }, [
        "#artifacts:disintegration_tablet",
        _bount("disintegration_tablet")
    ]);
});
