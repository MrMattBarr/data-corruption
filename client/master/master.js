ViewModel.share({
    master: {
        campaignMembers: function() {
            if (!Meteor.user()) return null;
            var profile = Profiles.findOne({ user: Meteor.user()._id });
            if (!profile || !profile.campaign) return null;
            var campaign = Campaigns.findOne({ _id: profile.campaign });
            if (!campaign) return null
            var characters = Characters.find({ campaign: campaign._id });
            return characters;
        }
    }
});
