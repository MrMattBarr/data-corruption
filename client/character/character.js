Template.character.viewmodel({
    share: ['header', 'menu'],
    onRendered() {
        var msgs = [
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
                var profile = Profiles.findOne({ user: Meteor.user()._id });
                if (profile) {
                    var character = Characters.findOne({ _id: profile.currentCharacter });
                    return character;
                }
            }
            return null;
        },
        profile: function() {
            if (Meteor.user()) {
                var profile = Profiles.findOne({ user: Meteor.user()._id });
                if (profile) {
                    return profile;
                }
            }
            return null;
        }
    }
});
