ViewModel.share({
    master: {
        campaignMembers: function() {
            if (!Meteor.user()) return [];
            var account = Accounts.findOne({ user: Meteor.user()._id });
            var campaign = Campaigns.findOne({ master: account._id });
            return Characters.find({ campaign: campaign._id });
        }
    }
});
