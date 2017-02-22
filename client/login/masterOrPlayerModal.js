Template.masterOrPlayerModal.viewmodel({
    share: 'modal',
    onRendered: function() {

    },
    goMaster: function() {
        var profile = Profiles.findOne({ user: Meteor.user()._id });
        if (!profile) { this.closeModalAndGo('profile'); }
        var campaign = profile.campaign;
        if (campaign) {
            this.closeModalAndGo('master');
        } else {
            this.closeModalAndGo('campaignCreate');
        }
    }
});
