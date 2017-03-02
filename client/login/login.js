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
    logInOnEnter: function(e) {
        console.log('e is this %O', e);
    },
    logIn: function() {
        const vm = this;
        Meteor.loginWithPassword(vm.username.value, vm.password.value, function(foo) {
            const profile = Profiles.findOne({ user: Meteor.user()._id }) || Profiles.insert({
                createdAt: new Date(),
                user: Meteor.user()._id
            });
            vm.printHeaderMessages(['account accessed: ' + Meteor.user().emails[0].address]);
            vm.checkLogIn();
        });
    },
    createAccount: function() {
        const vm = this;
        Accounts.createUser({
            email: this.username.value,
            password: this.password.value
        });
        Modal.show('masterOrPlayerModal');
    }
});
