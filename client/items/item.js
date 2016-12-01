Template.item.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        if (!this.name) {
            Router.go('items');
            return;
        }
        this.menuItems(
            [{
                label: "Inventory",
                icon: "fa-bars",
                action: this.goToInventory
            }, {
                label: "Delete Item",
                icon: "fa-trash",
                action: this.deleteItem,
                arguments: this._id
            }]);
        this.headerText(this.name.value);
        var msgs = [
            "display ITEM:" + this._id.value
        ];
        this.printMessages(msgs);
    },
    goToInventory: function() {
        Router.go('items');
    },
    deleteItem: function(itemId) {
        Items.remove(itemId);
        Router.go('items');
    },
    changeName: function() {
        Items.update(this._id(), {
            $set: {
                name: "Chipped Crowbar"
            }
        });
    }
});
