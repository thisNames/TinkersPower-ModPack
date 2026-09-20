StartupEvents.registry("item", event => {
    // 奥兹内衬
    event.create("tp_armorunder:auto_helmet_liner", "basic");
    event.create("tp_armorunder:auto_chestplate_liner", "basic");
    event.create("tp_armorunder:auto_leggings_liner", "basic");
    event.create("tp_armorunder:auto_boots_liner", "basic");

    // 保温内衬
    event.create("tp_armorunder:beekeeper_helmet_liner", "basic");
    event.create("tp_armorunder:beekeeper_chestplate_liner", "basic");
    event.create("tp_armorunder:beekeeper_leggings_liner", "basic");
    event.create("tp_armorunder:beekeeper_boots_liner", "basic");

    // 降温内衬
    event.create("tp_armorunder:cool_helmet_liner", "basic");
    event.create("tp_armorunder:cool_chestplate_liner", "basic");
    event.create("tp_armorunder:cool_leggings_liner", "basic");
    event.create("tp_armorunder:cool_boots_liner", "basic");

    // 加热凝胶
    event.create("tp_armorunder:heating_goo", "basic");
    // 加热丝线
    event.create("tp_armorunder:flyweight_thread", "basic");

    // 降温凝胶
    event.create("tp_armorunder:cooling_goo", "basic");
    // 降温丝线
    event.create("tp_armorunder:cool_liner_material", "basic");

    // 奥兹丝线
    event.create("tp_armorunder:flipflop_liner_material", "basic");
});
