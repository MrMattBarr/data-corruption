Template.header.viewmodel({
    share: 'header'
});ViewModel.share({
    header: {
        printHeaderMessages: function(messages) {
            this.message("");
            this.typeNextLetter(messages, new Date(), 70, this);
        },
        typeNextLetter: function(messages, messageReceived, maxTimer, vm) {
            if (messageReceived > vm.currentMessageReceived.value) {
                vm.currentMessageReceived(messageReceived);
            }
            var nextTimer = Math.floor(Math.random() * maxTimer);
            var clear = false;
            if (vm.message.value.length == 0) {
                nextTimer += 200;
            } else if (messages[0].length == 0) {
                nextTimer += 800;
                clear = true;
                messages.shift();
            }
            if (messages.length == 0) {
                return;
            }
            setTimeout(
                function() {
                    if (messageReceived < vm.currentMessageReceived.value) {
                        return;
                    }
                    if (clear) {
                        vm.message('');
                    }
                    vm.message(vm.message.value + messages[0][0]);
                    messages[0] = messages[0].slice(1, messages[0].length);
                    vm.typeNextLetter(messages, messageReceived, maxTimer, vm);
                }, nextTimer);

        },
        currentMessageReceived: new Date(),
        message: "",
        headerText: ""
    }
});

