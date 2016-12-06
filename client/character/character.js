Template.character.viewmodel({
    share: ['messages', 'menu'],
    onRendered() {
        var msgs = [
            "STATS = loadModule 'Statistics'",
            "READOUT = STATS.analyze 'Matt Barr'",
            "print READOUT"
        ];
        this.printMessages(msgs);
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }]);
    }
})
