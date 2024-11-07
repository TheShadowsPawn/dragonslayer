Hooks.on("init", function() {
    console.log("Dragonslayer | Initializing");

    // Register the actor sheet
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("dragonslayer", DragonslayerActorSheet, {
        types: ["character"],
        makeDefault: true
    });
});

class DragonslayerActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["dragonslayer", "sheet", "actor"],
            template: "systems/dragonslayer/templates/actor/character-sheet.html",
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes" }]
        });
    }
}
