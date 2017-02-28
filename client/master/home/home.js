Template.master.viewmodel({
    share: ['header', 'menu', 'character'],
    onRendered: function() {
        var campaign = this.campaign();
        this.headerText(campaign.name);
        this.menuItems([]);
        this.printHeaderMessages(["GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"]);
    },
    inviteCode: function() {
        var campaign = this.campaign();
        if (!campaign) return null;
        return campaign.inviteCode;
    },
    hasInviteCode: function() {
        var campaign = this.campaign();
        if (!campaign) return false;
        return !!campaign.inviteCode;

    },
    generateInviteCode: function() {
        var campaign = this.campaign();
        if (!!campaign.inviteCode) return;
        var inviteCode = -1;
        var inviteCodeTaken = true;
        while (inviteCodeTaken) {
            inviteCode = Math.floor(Math.random() * 89999) + 10000;
            var inviteCodeTaken = !!Campaigns.findOne({ inviteCode: inviteCode });
        }
        Campaigns.update(campaign._id, { $set: { inviteCode: inviteCode } });
    }
});
