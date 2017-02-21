Template.campaignJoin.viewmodel({
    share: ['character', 'header', 'menu'],
    onRendered: function() {
        this.menuItems(
            []);
        this.headerText("Join a Campaign");
    },
    campaign: function() {
        var code = parseInt(this.inviteCode());
        var campaign = Campaigns.findOne({ inviteCode: code });
        if (campaign) {
            return campaign;
        } else {
            return null;
        }
    },
    inviteCode: null,
    characterName: null,
    joinCampaign: function() {
        console.log('hi');
        var cid = this.campaign()._id;
        var name = this.characterName.value;
        var user = Meteor.user()._id;
        var profile = this.profile();
        if (cid && name && user && profile) {
            var character = Characters.insert({
                name: name,
                createdAt: new Date(),
                profile: profile._id,
                campaign: cid
            });
            Campaigns.update(cid, { $set: { inviteCode: null } });
            Profiles.update(profile._id, { $set: { character: character._id, campaign: cid } });

            this.go('home');
        }
    }
});
