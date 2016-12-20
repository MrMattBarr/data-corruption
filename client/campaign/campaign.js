Template.campaign.viewmodel({
    share: ['character', 'messages', 'menu'],
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
                argument: this
            }]);
        this.headerText("Campaigns");
        var character = this.character();
        this.printMessages(["member of: " + character.campaign]);
    },
    campaign: function() {
        if (Meteor.user().campaign) {
            return Campaigns.findOne({ user: Meteor.user().campaign });
        }
        return null;
    },
    campaigns: function() {
        return Campaigns.find({});
    },
    createCampaign: function(vm) {
        Campaigns.insert({
            name: 'Mamma Jamma Slampaign',
            createdAt: new Date(),
            user: Meteor.user()._id
        });
    },
    joinCampaign: function(campaign) {
        var character = this.character();
        Characters.update(character._id, { $set: { campaign: campaign._id } });
    }
});
