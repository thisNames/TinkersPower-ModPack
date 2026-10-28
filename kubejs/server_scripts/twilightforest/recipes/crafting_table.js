ServerEvents.recipes(event =>
{
    const _this = id => "twilightforest:" + id;
    const _ice = id => "iceandfire:" + id;
    
    event.shapeless(_this("fiery_ingot"), ["#twilightforest:fiery_vial", _ice("silver_ingot")]);
});
