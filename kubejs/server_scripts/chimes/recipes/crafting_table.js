ServerEvents.recipes(event =>
{
    const _this = id => "chimes:" + id;
    const _mc = id => "minecraft:" + id;
    const _ice = id => "iceandfire:" + id;
    
    // 紫水晶风铃
    event.replaceInput({ id: "chimes:amethyst_chimes" }, _mc("iron_ingot"), _ice("silver_ingot"));
});
