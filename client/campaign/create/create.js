Template.campaignCreate.viewmodel({
    share: ['character', 'header', 'menu'],
    campaignName: '',
    onRendered: function() {
        this.menuItems(
            [{
                label: "Go Home",
                icon: "fa-bars",
                route: 'home'
            }]);
        this.headerText("Campaign Creation");
        var msgs = [
            "initializing world..."
        ];
        this.printHeaderMessages(msgs);
    },
    getExperienceOptions: function() {
        return this.experienceOptions.value.array();
    },
    experience: null,
    select: function(value, key) {
        this[key](value.value);
    },
    experienceOptions: [{
        label: "Average",
        display: "100",
        value: 100
    }, {
        label: "High",
        display: "250",
        value: 250
    }, {
        label: "Massive",
        display: "500",
        value: 500
    }],
    createCampaign: function() {
        var profile = this.profile()._id;
        var name = this.campaignName.value;
        var campaign = Campaigns.insert({
            name: name,
            createdAt: new Date(),
            master: profile,
            startingExperience: this.experience.value
        });
        Profiles.update(profile, { $set: { campaign: campaign } });
        this.go('master');
    }
});
