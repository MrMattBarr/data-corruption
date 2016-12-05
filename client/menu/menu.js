Template.menu.viewmodel({
    share: 'menu'
})

ViewModel.share({
    menu: {
        menuItems: [],
        processItem: function(item) {
            console.log(Meteor.user());
            if (!!item.route) {
                Router.go(item.route);
            } else {
                item.action(item.arguments);
            }
        }
    }
});
