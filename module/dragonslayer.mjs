Hooks.on("init", () => {
    console.log("Dragonslayer | Initializing");

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);
});
