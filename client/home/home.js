Template.home.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        this.headerText("Matt Barr");
        this.menuItems([]);
        this.printMessages(["HOME", "1,341 power Disruptor"]);
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
    facebookLogin: function() {
        Meteor.loginWithFacebook({
            loginStyle: "redirect",
            requestPermissions: ['user_friends', 'public_profile', 'email']
        }, (err) => {
            if (err) {
                this.printMessages([JSON.stringify(err)]);
                // handle error
            } else {
                this.printMessages(["facebook account connected", "10,320 likes ... 2 comments"]);
                // successful login!
            }
        });
    }
});
