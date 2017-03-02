Template.loot.viewmodel({
    share: ['character', 'header', 'menu'],
    createLoot: function(vm) {
        const adjectives = ["Iron", "Fishy", "Techno", "Cybertronic", "Elemental"];
        const nouns = ["iPod", "Horse", "Gun", "Dagger", "Dollar"];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const itemName = adj + " " + noun;
        Items.insert({
            name: itemName,
            createdAt: new Date(),
            character: null,
            loot: true
        });

    },
    query: '',
    loot: function() {
        const items = Items.find({ loot: true }).fetch();
        const query = this.query();
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
