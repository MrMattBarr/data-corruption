Template.profile.viewmodel({
    share: ['header', 'menu'],
    onRendered: function() {
        const vm = this;
        vm.headerText("Profile Settings");
        vm.printHeaderMessages(["user.profile"]);
        if (!Meteor.user()) {
            Router.go("login");
        }
        vm.menuItems(
            [{
                label: "Home",
                icon: "fa-bars",
                route: 'home'
            }, {
                label: "New Character",
                icon: "fa-plus",
                action: vm.newCharacter,
                arguments: vm
            }, {
                label: "Sign Out",
                icon: "fa-sign-out",
                action: this.logOut
            }]);
    },
    profile: function() {
        return Profiles.findOne({ user: Meteor.user()._id });
    },
    characters: function() {
        if (Meteor.user()) {
            return Characters.find({ user: Meteor.user()._id });
        }
        return []
    },
    saveProfile: function() {
        Profiles.update(this._id(), {
            $set: {
                name: this.name.value
            }
        });
    },
    character: function() {
        const profile = Profiles.findOne({ user: Meteor.user()._id });
        return Characters.findOne({ _id: profile.character });
    },
    isCurrentCharacter: function(character) {
        const profile = Profiles.findOne({ user: Meteor.user()._id });
        return profile.character == character._id;
    },
    selectCharacter: function(character) {
        const id = this.profile()._id;
        if (id && character) {
            Profiles.update(id, { $set: { character: character._id } });

            Router.go('home');
        }
    },
    deleteCurrentCharacter: function() {
        Characters.remove(this.character()._id);
        Router.go('home');
    }
});
