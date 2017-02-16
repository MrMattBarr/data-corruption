Template.home.viewmodel({
    share: ['character', 'header', 'menu'],
    onRendered: function() {
        if (Meteor.user()) {
            var character = this.character();
            if (character) {
                this.headerText(this.character().name);
            } else {
                this.headerText(Meteor.user().emails[0].address);
            }
            this.menuItems([]);
            this.printHeaderMessages(["HOME", "1,341 power Disruptor"]);
        } else {
            Router.go('profile');
        }
    }

});
