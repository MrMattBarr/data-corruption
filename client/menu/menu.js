Template.menu.viewmodel({
    share: 'menu'
})

ViewModel.share({
    menu: {
        menuItems: [],
        getMenuItems: function() {
            return this.menuItems.value.array();
        },
        go: function(route) {
            Router.go(route);
        },
        checkLogIn: function(vm) {
            if (!vm) vm = this;
            if (!!Meteor.user()) {
                let profile = Profiles.findOne({ user: Meteor.user()._id }) ||
                    Profiles.insert({
                        createdAt: new Date(),
                        user: Meteor.user()._id
                    });
                const campaignId = profile.campaign;
                if (campaignId) {
                    const campaign = Campaigns.findOne({ _id: campaignId });
                    if (campaign.master == profile._id) {
                        this.go('master');
                    } else {
                        this.go('home');
                    }
                } else {
                    this.OpenModal('masterOrPlayerModal');
                }
            } else {
                vm.menuItems([]);
            }
        },
        processItem: function(item) {
            if (!!item.route) {
                Router.go(item.route);
            } else {
                item.action(item.arguments);
            }
        },
        logOut: function() {
            Meteor.logout(function() {
                Router.go('login');
            });
        }
    }
});
