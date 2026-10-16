// onServerSubCapability(Item.of("trinketsandbaubles:damage_shield").asIngredient())
//     .onEquip((ctx, stack) =>
//     {
//         console.log(stack.getId() + "run: " + "onEquip");
//         console.log(ctx.toString());
//         console.log("====================================================");
//     })
//     .onCurioTick((ctx, stack) =>
//     {
//         const player = ctx.entity();

//         applyEffectLevelServer(player, "minecraft:resistance", 0, 200, 100);
//     })
//     .onUnequip((ctx, stack) =>
//     {
//         ctx.entity().removeEffect("minecraft:resistance");

//         console.log(stack.getId() + "run: " + "onUnequip");
//         console.log(ctx.toString());
//         console.log("====================================================");
//     });
