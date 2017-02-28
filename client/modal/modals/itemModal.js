Template.itemModal.viewmodel({
    share: 'modal',
    goToItem: function() {
        Router.go('item', {
            _id: this.CurrentMessage.value.attachment._id
        });
        this.dismissMessage();
    }
});
