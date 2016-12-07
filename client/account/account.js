Template.account.viewmodel({
    share: ['messages', 'menu'],
    onRendered: function() {
        var vm = this;
        vm.headerText("Account Settings");
        vm.printMessages(["user.account"]);
        if (!Meteor.user()) {
            Router.go("login");
        }
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
    },
    logOut: function(vm) {
        Meteor.logout(function() {
            Router.go('login');
        });
    }
});
