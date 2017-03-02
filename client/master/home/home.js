Template.master.viewmodel({
    share: ['header', 'menu', 'character'],
    onRendered: function() {
        const campaign = this.campaign();
        this.headerText(campaign.name);
        this.menuItems([]);
        this.printHeaderMessages(["GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}"]);
    },
    inviteCode: function() {
        const campaign = this.campaign();
        if (!campaign) return null;
        return campaign.inviteCode;
    },
    hasInviteCode: function() {
        const campaign = this.campaign();
        if (!campaign) return false;
        return !!campaign.inviteCode;

    },
    generateInviteCode: function() {
        const campaign = this.campaign();
        if (!!campaign.inviteCode) return;
        let inviteCode;
        let inviteCodeTaken = true;
        while (inviteCodeTaken) {
            inviteCode = Math.floor(Math.random() * 89999) + 10000;
            inviteCodeTaken = !!Campaigns.findOne({ inviteCode: inviteCode });
        }
        Campaigns.update(campaign._id, { $set: { inviteCode: inviteCode } });
    }
});
