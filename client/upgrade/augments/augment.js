Template.augmentUpgrades.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Upgrades Page",
                icon: "fa-bars",
                action: this.goUpgrades
            }, {
                label: "Help",
                icon: "fa-question",
                action: this.help
            }]);
        this.headerText("Augments");
        this.printMessages(["list AUGMENTS"]);
    },
    goUpgrades: function() {
        Router.go('upgrade');
    },
    help: function() {
        alert('HELP!');
    }
});
