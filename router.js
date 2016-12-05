Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('items', {
        path: '/items'
    });
    this.route('character', {
        path: '/character'
    });
    this.route('upgrade', {
        path: '/upgrade'
    });
    this.route('account', {
        path: '/account'
    });
    this.route('augmentUpgrades', {
        path: '/upgrade/augments'
    });
    this.route('/items/:_id', {
        name: 'item',
        template: 'item',
        data: function() {
            var item = Items.findOne({
                _id: this.params._id
            });
            return item;
        }
    });
});
