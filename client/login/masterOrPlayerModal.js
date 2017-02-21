Template.masterOrPlayerModal.viewmodel({
    share: 'modal',
    onRendered: function() {

    },
    goMaster: function() {
        var profile = Profiles.findOne({ user: Meteor.user()._id });
        var campaign = profile.campaign;
        console.log('campaign is this %O', campaign);
        if (campaign) {
            this.closeModalAndGo('master');
        } else {

            this.closeModalAndGo('campaignCreate');
        }
    }
});
