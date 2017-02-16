Template.login.viewmodel({
    share: ['header', 'menu'],
    username: "",
    password: "",
    isLoggedIn: false,
    onRendered: function() {
        this.headerText("DATA: Corruption");
        this.printHeaderMessages(["awaiting authentication"]);
        this.checkLogIn(this);
    },
    checkLogIn: function(vm) {
        if (!vm) vm = this;
        vm.isLoggedIn(!!Meteor.user());
        if (vm.isLoggedIn.value) {
            var Profile = Profiles.findOne({ user: Meteor.user()._id });
            if (!Profile) Profile = Profiles.insert({
                createdAt: new Date(),
                user: Meteor.user()._id
            });
            Router.go('home');
        } else {
            vm.menuItems([]);
        }
    },
    logIn: function() {
        var vm = this;
        Meteor.loginWithPassword(vm.username.value, vm.password.value, function(foo) {
            vm.printHeaderMessages(['account accessed: ' + Meteor.user().emails[0].address]);
            vm.checkLogIn();
        });
    },
    createAccount: function() {
        var vm = this;
        Accounts.createUser({
            email: this.username.value,
            password: this.password.value
        });
        this.checkLogIn();
    }
});
