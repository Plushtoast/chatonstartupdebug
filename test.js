Hooks.once("init", function() {
    console.log("Initializing chatonstartupdebug module")

    game.settings.register("chatonstartupdebug", "firstTimeStart", {
        name: "firstTimeStart",
        hint: "firstTimeStart",
        scope: "world",
        config: false,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
    if (!game.settings.get("chatonstartupdebug", "firstTimeStart")) {
        ChatMessage.create( { content: "some user hint" })
        game.settings.set("chatonstartupdebug", "firstTimeStart", true)
    }
})