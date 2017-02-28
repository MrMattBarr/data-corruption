Template.home.viewmodel({
    share: ['character', 'header', 'menu'],
    onRendered: function() {
        if (Meteor.user()) {
            var profile = this.profile();
            var character = this.character();

            if (character) {
                this.headerText(this.character().name);
            } else {
                var firstCharacter = Characters.findOne({ profile: profile._id });
                if (!!firstCharacter) {
                    Profiles.update(profile._id, {
                        $set: {
                            character: firstCharacter._id
                        }
                    });
                    this.headerText(firstCharacter.name);
                } else {
                    this.headerText(Meteor.user().emails[0].address);
                }
            }
            this.menuItems([]);
            this.printHeaderMessages(["HOME", "1,341 power Disruptor"]);
        } else {
            Router.go('profile');
        }
    }

});
