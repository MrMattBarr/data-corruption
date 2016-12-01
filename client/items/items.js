Template.items.helpers({
    items: function() {
        return Items.find({});
    }
});

Template.items.viewmodel({
    share: ['messages', 'menu'],
    addItem: function() {
        Items.insert({
            name: "New Item",
            createdAt: new Date()
        });
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
                action: this.goHome
            }, {
                label: "Add Item",
                icon: "fa-plus",
                action: this.addItem
            }]);
        this.headerText("Inventory");
        this.printMessages(["list ITEMS"]);
    },
    goHome: function() {
        Router.go('home');
    },
});
