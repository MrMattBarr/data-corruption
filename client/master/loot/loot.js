Template.loot.viewmodel({
    share: ['character', 'header', 'menu'],
    createLoot: function(vm) {
        var adjectives = ["Iron", "Fishy", "Techno", "Cybertronic", "Elemental"];
        var nouns = ["iPod", "Horse", "Gun", "Dagger", "Dollar"];
        var adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        var noun = nouns[Math.floor(Math.random() * nouns.length)];
        var itemName = adj + " " + noun;
        Items.insert({
            name: itemName,
            createdAt: new Date(),
            character: null,
            loot: true
        });

    },
    query: '',
    loot: function() {
        var items = Items.find({ loot: true }).fetch();
        var query = this.query();
        return items.filter(function(x) {
            return x.name.toLowerCase().includes(query.toLowerCase());
        });
    },
    selectLoot: function(item) {
        Router.go('lootDetail', {
            _id: item._id
        });
    },
    onRendered: function() {
        this.headerText("Inventory");
        this.printHeaderMessages(["list ITEMS"]);
    }
});
