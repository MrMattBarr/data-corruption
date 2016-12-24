Template.home.viewmodel({
    share: ['character', 'header', 'menu'],
    onRendered: function() {
        if (Meteor.user()) {
            var character = this.character();
            if (character) {
                this.headerText(this.character().name);
            } else {
                this.headerText(Meteor.user().emails[0].address);
            }
            this.menuItems([]);
            this.printHeaderMessages(["HOME", "1,341 power Disruptor"]);
        } else {
            Router.go('account');
        }
    },
    goToCharacter: function() {
        Router.go('character');
    },
    goToUpgrades: function() {
        Router.go('upgrade');
    },
    goToItems: function() {
        Router.go('items');
    },
    goToAccount: function() {
        Router.go('account');
    },
    goToAugments: function() {
        Router.go('augments');
    },
    goToCampaign: function() {
        Router.go('campaign');
    }

    // Meteor.loginWithFacebook({
    //     loginStyle: "redirect",
    //     requestPermissions: ['user_friends', 'public_profile', 'email']
    // }, (err) => {
    //     if (err) {
    //         this.printHeaderMessages([JSON.stringify(err)]);
    //         // handle error
    //     } else {
    //         this.printHeaderMessages(["facebook account connected", "10,320 likes ... 2 comments"]);
    //         // successful login!
    //     }
    // });

});
