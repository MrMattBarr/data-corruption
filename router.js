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
    this.route('profile', {
        name: 'profile',
        template: 'profile',
        data: function() {
            if (!Meteor.user()) return null;
            var profile = Profiles.findOne({ user: Meteor.user()._id });
            return profile;
        }
    });
    this.route('master', {
        path: '/master'
    });
    this.route('loot', {
        path: '/master/loot'
    });
    this.route('statChecks', {
        path: '/master/statchecks'
    });
    this.route('/master/loot/:_id', {
        name: 'lootDetail',
        template: 'lootDetail',
        data: function() {
            var item = Items.findOne({ _id: this.params._id });
            return item;
        }
    });
    this.route('campaign', {
        name: 'campaign',
        template: 'campaign',
        data: function() {
            if (!Meteor.user()) return null;
            var profile = Profiles.findOne({ user: Meteor.userId() });
            if (!profile) return null;
            var dmCampaign = Campaigns.findOne({ master: profile._id });
            if (dmCampaign) return dmCampaign;
            var character = Characters.findOne({ _id: profile.character });
            if (!character) return null;
            var campaign = Campaigns.findOne({ _id: character.campaign });
            return campaign;
        }
    });
    this.route('campaigns', {
        path: '/campaigns'
    });
    this.route('campaignCreate', {
        path: '/campaigns/create'
    });
    this.route('campaignJoin', {
        path: '/campaigns/join'
    });
    this.route('augmentUpgrades', {
        path: '/upgrade/augments'
    });
    this.route('/items/:_id', {
        name: 'item',
        template: 'item',
        data: function() {
            var item = Items.findOne({ _id: this.params._id });
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
