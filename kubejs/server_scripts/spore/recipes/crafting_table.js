ServerEvents.recipes(event =>
{
    const _this = id => "spore:" + id;

    // 手术台
    event.remove({ output: _this("surgery_table") });
});
