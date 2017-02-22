Template.master.viewmodel({
    share: ['header', 'menu', 'character'],
    onRendered: function() {
        var campaign = this.campaign();
        this.headerText(campaign.name);
        this.menuItems([]);
        this.printHeaderMessages(["Initializing godMode.exe"]);
    },
    inviteCode: function() {
        var campaign = this.campaign();
        if (!campaign) return null;
        console.log('campaign', campaign, !!campaign.inviteCode);
        return campaign.inviteCode;
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
