Template.items.viewmodel({
    share: ['character', 'header', 'menu'],
    addItem: function(vm) {
        const adjectives = ["Big", "Red", "Ugly", "Ancient", "Strong"];
        const nouns = ["Dragon", "Crowbar", "Sandwich", "Tome", "Bricks"];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const itemName = adj + " " + noun;
        const character = vm.character();
        if (character) {
            Items.insert({
                name: itemName,
                createdAt: new Date(),
                character: character._id
            });
        } else {
            vm.printMessage["no user logged in"];
        }
    },
    items: function() {
        const character = this.character();
        if (character) {
            return Items.find({ character: character._id });
        }
        return [];
    },
    selectItem: function(item) {
        Router.go('item', {
            _id: item._id
        });
    },
    onRendered: function() {
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }, {
                label: "Add Item",
                icon: "fa-plus",
                action: this.addItem,
                arguments: this
            }]);
        this.headerText("Inventory");
        this.printHeaderMessages(["list ITEMS"]);
    }
});
