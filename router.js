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
    this.route('augments', {
        path: '/augments'
    });
    this.route('login', {
        path: '/login'
    });
    this.route('account', {
        path: '/account'
    });
    this.route('campaign', {
        path: '/campaign'
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
    this.route('/items/:_id/weaponize', {
        name: 'weaponize',
        template: 'weaponize',
        data: function() {
            var item = Items.findOne({
                _id: this.params._id
            });
            return item;
        }
    });
});
