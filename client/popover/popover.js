Template.popover.viewmodel({
    share: 'header',
    currentMessage: null,
    shouldShowPopover: function() {
        if (!Meteor.user()) return false;
        if (this.currentMessage.value) return true;
        var account = Accounts.findOne({ user: Meteor.user()._id });
        this.currentMessage(Messages.findOne({ recipient: account.currentCharacter }));
        return !!this.currentMessage.value;
    },
    dismissMessage: function() {
        Messages.remove(this.currentMessage.value._id);
        this.currentMessage(null);
    }
});
