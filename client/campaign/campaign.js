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
                label: "Delete Item",
                icon: "fa-trash",
                action: this.deleteCampaign,
                arguments: this._id.value
            }]);
        this.headerText(this.name());
        this.printHeaderMessages(['Very exciting campaign']);
    },
    currentPlayer: function() {
        var account = Accounts.findOne({ user: Meteor.user()._id });
        return Characters.findOne({ _id: account.currentCharacter });
    },
    isCurrentPlayer: function(member) {
        var account = Accounts.findOne({ user: Meteor.user()._id });
        return account.currentCharacter == member._id;
    },
    deleteCampaign: function(campaignId) {
        Campaigns.remove(campaignId);
        Router.go('campaigns');
    },
    sendPlayerMessage: function(recipient) {
        var message = {
            recipient: recipient._id,
            text: "I sent you a message!"
        };
        this.sendMessage(message);
    },
    members: function() {
        if (!this._id) return;
        return Characters.find({ campaign: this._id.value });
    },
    dm: function() {
        var account = Accounts.findOne({ _id: this.master.value });
        return account;
    }
});
