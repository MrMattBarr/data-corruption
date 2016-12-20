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
        name: 'campaign',
        template: 'campaign',
        data: function() {
            if (!Meteor.user()) return null;
            var account = Accounts.findOne({ user: Meteor.userId() });
            if (!account) return null;
            var character = Characters.findOne({ _id: account.currentCharacter });
            if (!character) return null;
            var campaign = Campaigns.findOne({ _id: character.campaign });
            return campaign;
        }
    });
    this.route('campaigns', {
        path: '/campaigns'
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
