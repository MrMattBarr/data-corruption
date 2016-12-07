Template.login.viewmodel({
    share: ['messages', 'menu'],
    username: "",
    password: "",
    isLoggedIn: false,
    onRendered: function() {
        console.log('hi matt barr');
        this.headerText("DATA: Corruption");
        this.printMessages(["awaiting authentication"]);
        this.checkLogIn(this);
    },
    checkLogIn: function(vm) {
        if (!vm) vm = this;
        vm.isLoggedIn(!!Meteor.user());
        if (vm.isLoggedIn.value) {
            Router.go('home');
        } else {
            vm.menuItems([]);
        }
    },
    logIn: function(character) {
        var vm = this;
        Meteor.loginWithPassword(vm.username.value, vm.password.value, function(foo) {
            vm.printMessages(['account accessed: ' + Meteor.user().emails[0].address]);
            vm.checkLogIn();
        });
    }
});
