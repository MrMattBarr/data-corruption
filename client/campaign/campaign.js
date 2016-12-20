Template.campaign.viewmodel({
    share: ['character', 'messages', 'menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }, {
                label: "Other Campaigns",
                icon: "fa-users",
                route: 'campaigns'
            }]);
        this.headerText(this.name());
        this.printMessages(['Very exciting campaign']);
    },
    members: function() {
        return Characters.find({ campaign: this._id.value });
    }
});
