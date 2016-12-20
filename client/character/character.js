Template.character.viewmodel({
    share: ['messages', 'menu'],
    onRendered() {
        var msgs = [
            "STATS = loadModule 'Statistics'",
            "READOUT = STATS.analyze 'Matt Barr'",
            "print READOUT"
        ];
        this.printMessages(msgs);
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
                var account = Accounts.findOne({ user: Meteor.user()._id });
                if (account) {
                    var character = Characters.findOne({ _id: account.currentCharacter });
                    return character;
                }
            }
            return null;
        }
    }
});
