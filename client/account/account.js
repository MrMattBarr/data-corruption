Template.account.viewmodel({
    share: ['messages', 'menu'],
    username: "matt@barr.farm",
    password: "password",
    isLoggedIn: false,
    onRendered: function() {
        this.menuItems(
            [{
                label: "Home",
                icon: "fa-bars",
                route: 'home'
            }]);
        this.headerText("Account Settings");
        this.printMessages(["user.account"]);
    },
    createAccount: function() {
        Accounts.createUser({
            email: "jenisa@barr.farm",
            password: "password",
            username: "Jenisa"
        });
    },
    logOut: function() {
        var vm = this;
        Meteor.logout(function() {
            vm.isLoggedIn(!!Meteor.user());
        });
    },
    logIn: function(character) {
        var vm = this;
        if (character == 2) {
            vm.username("jenisa@barr.farm");
            vm.password("password");
        } else {

            vm.username("matt@barr.farm");
            vm.password("password");
        }
        Meteor.loginWithPassword(vm.username.value, vm.password.value, function(foo) {
            vm.printMessages(['account accessed: ' + Meteor.user().emails[0].address]);
            vm.isLoggedIn(!!Meteor.user());
        });
    }
});
