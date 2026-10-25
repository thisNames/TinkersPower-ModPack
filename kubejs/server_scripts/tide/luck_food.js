ItemEvents.foodEaten("tide:midas_fish", event =>
{
    const player = event.getPlayer();

    if (player)
    {
        // 幸运 10、5 分钟
        player.potionEffects.add("minecraft:luck", 6000, 9);
    }
});

ItemEvents.foodEaten("tide:devils_hole_pupfish", event =>
{
    const player = event.getPlayer();

    if (player)
    {
        // 幸运 10、2.5 分钟
        player.potionEffects.add("minecraft:luck", 3000, 9);
    }
});
