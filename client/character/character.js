Template.character.viewmodel({
    share: ['header', 'menu'],
    onRendered() {
        const msgs = [
            "STATS = loadModule 'Statistics'",
            "READOUT = STATS.analyze 'Matt Barr'",
            "print READOUT"
        ];
        this.printHeaderMessages(msgs);
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }]);
    }
})


ViewModel.share({
    character: {
        character: function() {
            if (Meteor.user()) {
                const profile = Profiles.findOne({ user: Meteor.user()._id });
                if (profile) {
                    const character = Characters.findOne({ _id: profile.character });
                    return character;
                }
            }
            return null;
        },
        profile: function() {
            if (Meteor.user()) {
                const profile = Profiles.findOne({ user: Meteor.user()._id });
                if (profile) {
                    return profile;
                }
            }
            return null;
        },
        campaign: function() {
            if (Meteor.user()) {
                const profile = Profiles.findOne({ user: Meteor.user()._id });
                if (profile && profile.campaign) {
                    const campaign = Campaigns.findOne({ _id: profile.campaign });
                    return campaign || null;
                }
            }
            return null;
        }
    }
});
