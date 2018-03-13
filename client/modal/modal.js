ViewModel.share({
    modal: {
        CurrentModal: null,
        OpenModal: function(name, context, args) {
            this.CurrentModal(name);
            Modal.show(this.CurrentModal.value, context, args);
        },
        OpenStaticModal: function(name, context, args) {
            if (!args) args = {};
            args.backdrop = 'static';
            args.keyboard = false;
            this.CurrentModal(name);
            Modal.show(this.CurrentModal.value, context, args);
        },
        closeModalAndGo: function(route) {
            Router.go(route);
            Modal.hide(this.CurrentModal.value);
            this.CurrentModal(null);
        },
        CurrentMessage: null,
        dismissMessage: function() {
            const message = this.CurrentMessage.value;
            Messages.remove(this.CurrentMessage.value._id);
            Modal.hide(this.CurrentModal.value);
            this.CurrentModal(null);
        }
    }
});

Template.modal.viewmodel({
    share: 'modal',
    messageToShow: function() {
        if(!Meteor.user()) return false;
        const profile = Profiles.findOne({ user: Meteor.user()._id });
        message = Messages.findOne({recipient: profile.character});
        if(!message) return false;
        if(!!message.sender) message.sender = Characters.findOne({ _id: message.sender });
        console.log(message.sender);
        this.CurrentMessage(message);
        return true;
    }
});
