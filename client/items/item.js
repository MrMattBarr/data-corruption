Template.item.viewmodel({
    share: ['header', 'menu'],
    onRendered: function() {
        if (!this.name) {
            Router.go('items');
            return;
        }
        this.menuItems(
            [{
                label: "Inventory",
                icon: "fa-bars",
                route: 'items'
            }, {
                label: "Delete Item",
                icon: "fa-trash",
                action: this.deleteItem,
                arguments: this._id.value
            }]);
        this.headerText(this.name.value);
        var msgs = [
            "display ITEM:" + this._id.value
        ];
        this.printHeaderMessages(msgs);
    },
    deleteItem: function(itemId) {
        Items.remove(itemId);
        Router.go('items');
    },
    isWeaponized: function() {
        return Weaponizer.isWeaponized(this);
    },
    weaponize: function() {
        Router.go('weaponize', {
            _id: this._id
        });
    }
});
