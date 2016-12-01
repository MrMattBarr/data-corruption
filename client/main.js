import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Items = new Mongo.Collection("items");

ViewModel.share({
    messages: {
        printMessages: function(messages) {
            this.message("");
            this.typeNextLetter(messages, 70, this);
        },
        typeNextLetter: function(messages, maxTimer, vm) {
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
                    if (clear) {
                        vm.message('');
                    }
                    vm.message(vm.message.value + messages[0][0]);
                    messages[0] = messages[0].slice(1, messages[0].length);
                    vm.typeNextLetter(messages, maxTimer, vm);
                }, nextTimer);

        },
        message: "Level 1031 Director",
        headerText: "Matt Barr"
    }
})
