Template.augmentUpgrades.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Upgrades Page",
                icon: "fa-bars",
                route: 'upgrade'
            }, {
                label: "Help",
                icon: "fa-question",
                action: this.help
            }]);
        this.headerText("Augments");
        this.printMessages(["list AUGMENTS"]);
    },
    help: function() {
        alert('HELP!');
    }
});
