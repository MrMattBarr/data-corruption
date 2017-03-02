Template.augments.viewmodel({
    share: ['header', 'menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Home",
                icon: "fa-bars",
                route: 'home'
            }, {
                label: "Help",
                icon: "fa-question",
                action: this.help
            }]);
        this.headerText("Augments");
        this.printHeaderMessages(["list AUGMENTS"]);
    },
    help: function() {},
    augments: function() {
        const augmentList = [];
        Augments.index.forEach(function(key) {
            augmentList.push(Augments.augments[key]);
        });
        return augmentList;
    }
});
