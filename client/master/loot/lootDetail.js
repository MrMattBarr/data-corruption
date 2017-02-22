Template.lootDetail.viewmodel({
    share: ['master', 'header', 'messages', 'character'],
    onRendered: function() {
        this.headerText("Loot Detail");
        this.printHeaderMessages(["boop a booo"]);
    },
    assignLoot: function(recipient) {
        message = {
            recipient: recipient._id,
            text: "Item received: " + this.name() + ".",
            attachment: this._id.value,
            attachmentType: 'ITEM',
            confirmation: "Check it out",
            route: 'item',
            argument: this._id.value
        };
        this.sendMessage(message);

        Items.update(this._id(), { $set: { character: recipient._id, loot: false } });
        Router.go('loot');
    }
});
