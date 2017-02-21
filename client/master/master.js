ViewModel.share({
    master: {
        campaignMembers: function() {
            var campaign = this.campaign();
            return Characters.find({ campaign: campaign._id });
        }
    }
});
