Template.menu.viewmodel({
    share: 'menu'
})

ViewModel.share({
    menu: {
        menuItems: [],
        go: function(route) {
            Router.go(route);
        },
        processItem: function(item) {
            if (!!item.route) {
                Router.go(item.route);
            } else {
                item.action(item.arguments);
            }
        }
    }
});
