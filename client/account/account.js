Template.account.viewmodel({
    share: ['messages', 'menu'],
    username: "matt@barr.farm",
    password: "password",
    isLoggedIn: false,
    onRendered: function() {
        this.headerText("Account Settings");
        this.printMessages(["user.account"]);
        this.checkLogIn(this);
    },
    checkLogIn: function(vm) {
        if (!vm) vm = this;
        vm.isLoggedIn(!!Meteor.user());
        if (vm.isLoggedIn.value) {
            vm.menuItems(
                [{
                    label: "Home",
                    icon: "fa-bars",
                    route: 'home'
                }, {
                    label: "Edit",
                    icon: "fa-edit",
                    route: 'home'
                }, {
                    label: "Sign Out",
                    icon: "fa-sign-out",
                    action: vm.logOut,
                    arguments: vm
                }]);
        } else {
            vm.menuItems(
                [{
                    label: "Home",
                    icon: "fa-bars",
                    route: 'home'
                }]);
        }
    },
    logOut: function(vm) {
        Meteor.logout(function() {
            vm.checkLogIn();
        });
    },
    logIn: function(character) {
        var vm = this;
        Meteor.loginWithPassword(vm.username.value, vm.password.value, function(foo) {
            vm.printMessages(['account accessed: ' + Meteor.user().emails[0].address]);
            vm.checkLogIn();
        });
    }
});
