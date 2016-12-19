Template.home.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        if (Meteor.user()) {
            if (Meteor.user().username) {
                this.headerText(Meteor.user().username);

            } else {
                this.headerText(Meteor.user().emails[0].address);
            }
            this.menuItems([]);
            this.printMessages(["HOME", "1,341 power Disruptor"]);
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
    createCampaign: function() {

        Campaigns.insert({
            name: 'Mamma Jamma Slampaign',
            createdAt: new Date(),
            host: Meteor.user()._id
        });
    }

    // Meteor.loginWithFacebook({
    //     loginStyle: "redirect",
    //     requestPermissions: ['user_friends', 'public_profile', 'email']
    // }, (err) => {
    //     if (err) {
    //         this.printMessages([JSON.stringify(err)]);
    //         // handle error
    //     } else {
    //         this.printMessages(["facebook account connected", "10,320 likes ... 2 comments"]);
    //         // successful login!
    //     }
    // });

});
