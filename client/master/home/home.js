Template.master.viewmodel({
    share: ['header', 'menu'],
    onRendered: function() {
        this.headerText('Campaign Master');
        this.menuItems([]);
        this.printHeaderMessages(["Initializing godMode.exe"]);
    },
    goToLoot: function() {
        Router.go('loot');
    },
});
