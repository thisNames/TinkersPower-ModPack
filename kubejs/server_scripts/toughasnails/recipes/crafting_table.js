ServerEvents.recipes(event =>
{
    const _this = id => "toughasnails:" + id;
    const _create = id => "create:" + id;
    const _mc = id => "minecraft:" + id;

    event.remove({
        output: [
            _this("ice_cream"),
            _this("charc_os")
        ]
    });

    // 米饭
    event.recipes.kubejs.shaped({ item: _this("ice_cream"), count: 2 }, [
        [_create("wheat_flour"), _mc("ice"), _create("wheat_flour")],
        [_mc("ice"), _mc("sugar"), _mc("ice")],
        [_mc("bowl"), _mc("sugar"), _mc("bowl")]
    ]);

    event.recipes.kubejs.shaped({ item: _this("charc_os"), count: 2 }, [
        [_create("wheat_flour"), _mc("blaze_powder"), _create("wheat_flour")],
        [_mc("blaze_powder"), _mc("sugar"), _mc("blaze_powder")],
        [_mc("bowl"), _mc("sugar"), _mc("bowl")]
    ]);
});
