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
