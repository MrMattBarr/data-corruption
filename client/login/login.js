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
            var profile = Profiles.findOne({ user: Meteor.user()._id });
            if (!profile) profile = Profiles.insert({
                createdAt: new Date(),
                user: Meteor.user()._id
            });
            var campaignId = profile.campaign;
            if (campaignId) {
                var campaign = Campaigns.findOne({ _id: campaignId });
                if (campaign.master == profile._id) {
                    this.go('master');
                } else {
                    this.go('home');
                }
            } else {
                Modal.show('masterOrPlayerModal');
            }
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
        Modal.show('masterOrPlayerModal');
    }
});
