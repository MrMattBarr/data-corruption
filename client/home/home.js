Template.home.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        this.headerText("Matt Barr");
        this.menuItems([]);
        this.printMessages(["HOME", "1,341 power Disruptor"]);
    },
    goToCharacter: function() {
        Router.go('character');
    },
    goToUpgrades: function() {
        Router.go('upgrade');
    },
    goToItems: function() {
        Router.go('items');
    },
});
