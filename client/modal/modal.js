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
            var message = this.CurrentMessage.value;
            Messages.remove(this.CurrentMessage.value._id);
            Modal.hide(this.CurrentModal.value);
            this.CurrentModal(null);
        }
    }
});

Template.modal.viewmodel({
    share: 'modal',
    messageToShow: function() {
        if (!!this.CurrentModal.value) {
            return false;
        }
        if (!Meteor.user()) return false;
        var profile = Profiles.findOne({ user: Meteor.user()._id });
        var message = Messages.findOne({ recipient: profile.character });
        if (!message) return false;
        if (message.attachment) {
            if (message.attachmentType == 'ITEM') {
                message.attachment = Items.findOne({ _id: message.attachment });
                this.OpenStaticModal('itemModal');
            }
        }
        this.CurrentMessage(message);
        return true;
    },
});
