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
                var account = Accounts.findOne({ user: Meteor.user()._id });
                if (account) {
                    var character = Characters.findOne({ _id: account.currentCharacter });
                    return character;
                }
            }
            return null;
        },
        account: function() {
            if (Meteor.user()) {
                var account = Accounts.findOne({ user: Meteor.user()._id });
                if (account) {
                    return account;
                }
            }
            return null;
        }
    }
});
