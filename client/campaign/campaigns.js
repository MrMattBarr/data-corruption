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
    },
    campaigns: function() {
        return Campaigns.find({});
    },
    createCampaign: function(vm) {
        var adjectives = ["The Last", "Evil", "My Fluffy", "The Worst", "Wrath of the"];
        var nouns = ["Dragon", "Emperor", "Murderer", "Puppy", "Cafe"];
        var adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        var noun = nouns[Math.floor(Math.random() * nouns.length)];
        var campaignName = adj + " " + noun;
        Campaigns.insert({
            name: campaignName,
            createdAt: new Date(),
            master: vm.account()._id
        });
    },
    joinCampaign: function(campaign) {
        var character = this.character();
        Characters.update(character._id, { $set: { campaign: campaign._id } });
        Router.go('campaign');
    }
});
