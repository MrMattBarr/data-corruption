Template.statChecks.viewmodel({
    share: ['header', 'master'],
    onRendered: function() {
        this.headerText('Stat Checks');
    },
    selectedStat: null,
    select: function(value, key) {
        this[key](value.value);
    },
    toggleMember: function(member) {
        const selected = this.selected.value.array();
        const index = selected.indexOf(member._id);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(member._id);
        }
        this.selected(selected);
    },
    rollCheck: function() {
        this.rolled(true);
    },
    rolled: false,
    selected: [],
    getSelected: function() {
        return this.selected.value.array();
    },
    statsList: function() {
        return [{
            label: "Brute Force",
            icon: "fa-hand-rock-o",
            value: "bruteForce"
        }, {
            label: "Vigilance",
            icon: "fa-eye",
            value: "vigilance"
        }, {
            label: "Presence",
            icon: "fa-magic",
            value: "presence"
        }, {
            label: "Savvy",
            icon: "fa-lightbulb-o",
            value: "savvy"
        }];
    },
    difficultyList: function() {
        return [{
            label: "Trivial",
            display: "5",
            value: 5
        }, {
            label: "Simple",
            display: "10",
            value: 10
        }, {
            label: "Tough",
            display: "20",
            value: 20
        }, {
            label: "Amazing",
            display: "40",
            value: 40
        }];

    }
});
