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
        const msgs = [
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
        const profile = this.profile()._id;
        const name = this.campaignName.value;
        const campaign = Campaigns.insert({
            name,
            createdAt: new Date(),
            master: profile,
            startingExperience: this.experience.value
        });
        Profiles.update(profile, { $set: { campaign: campaign } });
        this.go('master');
    }
});
