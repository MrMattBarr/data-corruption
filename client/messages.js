ViewModel.share({
    messages: {
        sendMessage: function(message) {
            if (!message.recipient || !message.text) return;
            if (!Characters.findOne({ _id: message.recipient })) return;
            Messages.insert({
                text: message.text,
                createdAt: new Date(),
                recipient: message.recipient,
                priority: "POP_UP",
                status: "NEW"
            });
        }
    }
});
