Template.campaigns.viewmodel({
    share: ['character', 'header', 'menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }, {
                label: "New Campaign",
                icon: "fa-plus",
                action: this.createCampaign,
                arguments: this
            }]);
        this.headerText("Campaigns");
    },
    campaign: function() {
        if (Meteor.user()) {
            return Campaigns.findOne({ user: Meteor.user().campaign });
        }
        return null;
    }
});
