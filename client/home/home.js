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
    logIn: function() {
        var vm = this;
        Meteor.loginWithPassword('matt@barr.farm', 'Just8characters',
            function(foo) {
                console.log(Meteor.user()._id);
                vm.printMessages(['ready', Meteor.user()._id, "1,341 power Disruptor"]);
            });
    }
});
