Template.items.viewmodel({
    share: ['messages', 'menu'],
    addItem: function(vm) {
        var adjectives = ["Big", "Red", "Ugly", "Ancient", "Strong"];
        var nouns = ["Dragon", "Crowbar", "Sandwich", "Tome", "Bricks"];
        var adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        var noun = nouns[Math.floor(Math.random() * nouns.length)];
        var itemName = adj + " " + noun;
        if (Meteor.user()._id) {

            Items.insert({
                name: itemName,
                createdAt: new Date(),
                user: Meteor.user()._id
            });
        } else {
            vm.printMessage["no user logged in"];
        }
    },
    items: function() {
        return Items.find({ user: Meteor.user()._id });
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
                argument: this
            }]);
        this.headerText("Inventory");
        this.printMessages(["list ITEMS"]);
    },
    goHome: function() {
        Router.go('home');
    },
});
