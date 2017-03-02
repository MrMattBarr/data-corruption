Template.campaignJoin.viewmodel({
    share: ['character', 'header', 'menu'],
    onRendered: function() {
        this.menuItems(
            []);
        this.headerText("Join a Campaign");
    },
    campaign: function() {
        const code = parseInt(this.inviteCode());
        return Campaigns.findOne({ inviteCode: code }) || null;
    },
    inviteCode: null,
    characterName: null,
    joinCampaign: function() {
        console.log('hi');
        const cid = this.campaign()._id;
        const name = this.characterName.value;
        const user = Meteor.user()._id;
        const profile = this.profile();
        if (cid && name && user && profile) {
            const character = Characters.insert({
                name,
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
