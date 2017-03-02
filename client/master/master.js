ViewModel.share({
    master: {
        campaignMembers: function() {
            if (!Meteor.user()) return null;
            const profile = Profiles.findOne({ user: Meteor.user()._id });
            if (!profile || !profile.campaign) return null;
            const campaign = Campaigns.findOne({ _id: profile.campaign });
            if (!campaign) return null
            const characters = Characters.find({ campaign: campaign._id });
            return characters;
        }
    }
});
