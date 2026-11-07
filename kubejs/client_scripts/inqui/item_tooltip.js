ItemEvents.tooltip(event =>
{
    // 腐梦时钟
    [
        Text.translatable("tooltip.inqui.bacterium_clock_dream").white(),
        Text.translatable("tooltip.inqui.bacterium_clock_dream.1").red(),
        Text.translatable("tooltip.inqui.bacterium_clock_dream.2").gray(),
        Text.translatable("tooltip.inqui.bacterium_clock_dream.3").red(),
    ].forEach(item => event.add("inqui:bacterium_clock_dream", item));

    // 菌庭暮时
      [
        Text.translatable("tooltip.inqui.bacterium_clock_finalitas").white(),
        Text.translatable("tooltip.inqui.bacterium_clock_finalitas.1").lightPurple(),
        Text.translatable("tooltip.inqui.bacterium_clock_finalitas.2").gray(),
        Text.translatable("tooltip.inqui.bacterium_clock_finalitas.3").lightPurple(),
    ].forEach(item => event.add("inqui:bacterium_clock_finalitas", item));
});