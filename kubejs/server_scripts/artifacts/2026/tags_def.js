// priority: 2026

/**
 * 奇异饰品：崩解牌可崩解标签
 * @type {string}
 */
const artifacts_disintegration_tablet_tag = "artifacts:disintegration_tablet";

ServerEvents.tags("item", event =>
{
    const _this = id => "artifacts:" + id;

    [
        _this("umbrella"),
        _this("plastic_drinking_hat"),
        _this("novelty_drinking_hat"),
        _this("snorkel"),
        _this("night_vision_goggles"),
        _this("villager_hat"),
        _this("superstitious_hat"),
        _this("cowboy_hat"),
        _this("lucky_scarf"),
        _this("scarf_of_invisibility"),
        _this("panic_necklace"),
        _this("shock_pendant"),
        _this("flame_pendant"),
        _this("thorn_pendant"),
        _this("charm_of_sinking"),
        _this("cloud_in_a_bottle"),
        _this("antidote_vessel"),
        _this("universal_attractor"),
        _this("crystal_heart"),
        _this("helium_flamingo"),
        _this("digging_claws"),
        _this("feral_claws"),
        _this("power_glove"),
        _this("fire_gauntlet"),
        _this("pocket_piston"),
        _this("golden_hook"),
        _this("aqua_dashers"),
        _this("bunny_hoppers"),
        _this("kitty_slippers"),
        _this("running_shoes"),
        _this("snowshoes"),
        _this("steadfast_spikes"),
        _this("flippers"),
        _this("rooted_boots"),
        _this("whoopee_cushion"),
        _this("anglers_hat")
    ].forEach(item =>
    {
        event.add(artifacts_disintegration_tablet_tag, item);
    });
});

