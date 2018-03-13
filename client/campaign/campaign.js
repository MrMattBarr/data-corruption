Template.campaign.viewmodel({
    share: ['character', 'header', 'menu', 'messages'],
    onRendered: function() {
        if (!this._id) {
            Router.go('campaigns');
            console.warn('Had to leave page due to no this._id');
            return;
        }
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }, {
                label: "Other Campaigns",
                icon: "fa-users",
                route: 'campaigns'
            }, {
                label: "Leave Campaign",
                icon: "fa-sign-out",
                action: this.leaveCampaign,
                arguments: this
            }]);
        this.headerText(this.name());
        this.printHeaderMessages(['Very exciting campaign']);
    },
    currentPlayer: function() {
        if (!Meteor.user()) return null;
        const profile = Profiles.findOne({ user: Meteor.user()._id });
        return Characters.findOne({ _id: profile.character });
    },
    isCurrentPlayer: function(member) {
        const profile = Profiles.findOne({ user: Meteor.user()._id });
        return profile.character == member._id;
    },
    leaveCampaign: function(vm) {
        const character = vm.currentPlayer();
        Characters.update(character._id, { $set: { campaign: null } });
        Router.go('campaign');
    },
    deleteCampaign: function(campaignId) {
        Campaigns.remove(campaignId);
        Router.go('campaigns');
    },
    generateInvite: function() {
        let inviteCode = -1;
        let inviteCodeTaken = true;
        while (inviteCodeTaken) {
            inviteCode = Math.floor(Math.random() * 89999) + 10000;
            inviteCodeTaken = !!Campaigns.findOne({ inviteCode: inviteCode });
        }

        Campaigns.update(this._id.value, { $set: { inviteCode: inviteCode } });

    },
    sendPlayerMessage: function(recipient) {
        const profile = Profiles.findOne({ user: Meteor.user()._id });
        console.log('profile is %O', profile.character);
        const message = {
            sender: profile.character,
            recipient: recipient._id,
            text: "I sent you a message!"
        };
        this.sendMessage(message);
    },
    members: function() {
        if (!this._id) return;
        return Characters.find({ campaign: this._id.value });
    },
    isMaster: function() {
        const me = Profiles.findOne({ user: Meteor.user()._id });
        return this.master.value == me._id;
    },
    dm: function() {
        if (!this.master) return null;
        const profile = Profiles.findOne({ _id: this.master.value });
        return profile;
    }
});
