ViewModel.share({
    master: {
        campaignMembers: function() {
            if (!Meteor.user()) return [];
            var profile = Profiles.findOne({ user: Meteor.user()._id });
            var campaign = Campaigns.findOne({ master: profile._id });
            return Characters.find({ campaign: campaign._id });
        }
    }
});
