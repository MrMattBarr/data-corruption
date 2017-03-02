Weaponizer = {
    getCurrentField: function(item) {
        for (const field of Weaponizer.order) {
            if (!item[field]) return field;
        }
        return null;
    },
    getPrompt: function(field) {
        if (Weaponizer[field]) return Weaponizer[field].prompt;
        return null;
    },
    getOptions: function(field) {
        if (Weaponizer[field]) return Weaponizer[field].options;
        return null;

    },
    isWeaponized: function(item) {
        for (const field of Weaponizer.order) {
            if (!item[field] || !item[field].value) {
                return false;
            }
        }
        return true;
    },
    order: ['sharpness', 'weight', 'hardness', 'durability', 'danger'],
    sharpness: {
        prompt: "How sharp is it?",
        options: [{
            display: 'Basketball',
            value: 1
        }, {
            display: 'Butterknife',
            value: 2
        }, {
            display: 'Machete',
            value: 3
        }, {
            display: 'Katana',
            value: 4
        }, {
            display: 'Obsidian',
            value: 5
        }]
    },
    weight: {
        prompt: "How heavy is it?",
        options: [{
            display: 'iPhone',
            value: 1
        }, {
            display: 'Guitar',
            value: 2
        }, {
            display: 'Sledgehammer',
            value: 3
        }, {
            display: 'Piano',
            value: 4
        }, {
            display: 'Volvo',
            value: 5
        }]
    },
    hardness: {
        prompt: "How hard is it is it?",
        options: [{
            display: 'Teddy Bear',
            value: 1
        }, {
            display: 'Leather Jacket',
            value: 2
        }, {
            display: '2x4',
            value: 3
        }, {
            display: 'Crowbar',
            value: 4
        }, {
            display: 'Diamond',
            value: 5
        }]
    },
    durability: {
        prompt: "How durable is it is it?",
        options: [{
            display: 'Newspaper',
            value: 1
        }, {
            display: 'Coffee Mug',
            value: 2
        }, {
            display: 'Hatchet',
            value: 3
        }, {
            display: 'Bulletproof Vest',
            value: 4
        }, {
            display: 'Wolverine',
            value: 5
        }]
    },
    danger: {
        prompt: "How dangerous (other than its weight and sharpness) is it?",
        options: [{
            display: 'Mean Looks',
            value: 1
        }, {
            display: 'Cattle Prod',
            value: 2
        }, {
            display: 'Battery Acid',
            value: 3
        }, {
            display: 'Flamethrower',
            value: 4
        }, {
            display: 'Antimatter',
            value: 5
        }]
    }
}

Template.weaponize.viewmodel({
    share: ['header', 'menu'],
    onRendered: function() {
        const vm = this;
        if (!vm.name) {
            Router.go('items');
            return;
        }
        vm.menuItems(
            [{
                label: "Cancel",
                icon: "fa-ban",
                route: 'items'
            }]);
        vm.headerText(vm.name.value);
        const msgs = [
            "weaponizing item..."
        ];
        vm.printHeaderMessages(msgs);
    },
    setFieldValueForItem: function(field, value) {
        if (field == 'sharpness') Items.update(this._id(), { $set: { sharpness: value } });
        else if (field == 'hardness') Items.update(this._id(), { $set: { hardness: value } });
        else if (field == 'weight') Items.update(this._id(), { $set: { weight: value } });
        else if (field == 'durability') Items.update(this._id(), { $set: { durability: value } });
        else if (field == 'danger') {
            Items.update(this._id(), { $set: { danger: value } });
            Router.go('item', {
                _id: this._id.value
            });
        }
    },
    currentField: function() {
        return Weaponizer.getCurrentField(this);
    },
    prompt: function() {
        return Weaponizer.getPrompt(this.currentField());
    },
    options: function() {
        return Weaponizer.getOptions(this.currentField());
    }
});
