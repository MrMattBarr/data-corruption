ViewModel.share({
    modal: {
        CurrentModal: null,
        OpenModal: function(name) {
            this.CurrentModal(name);
            Modal.show(this.CurrentModal);
        },
        closeModalAndGo: function(route) {
            Router.go(route);
            Modal.hide(this.CurrentModal.value);
        }
    }
});
