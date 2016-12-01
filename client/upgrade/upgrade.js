Template.upgrade.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                action: this.goHome
            }]);
        this.headerText("Upgrade");
        this.printMessages(["self:enhance"]);
    },
    goHome: function() {
        Router.go('home');
    },
    goAugments: function() {
        Router.go('augmentUpgrades');
    },
});
