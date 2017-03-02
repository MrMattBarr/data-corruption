Stats = {
    classes: {
        PASSIVE: 'passive',
        COMBAT: 'combat',
        FRENCH: 'french'
    },
    index: [
        "augmentia",
        "paranoia",
        "systemShock"
    ],
    augments: {
        augmentia: {
            name: "Augmentia",
            tagline: "This would be a tagline for augmentia.",
            class: "passive",
            breakPoints: [
                { level: 4, description: "Some perk" },
                { level: 8, description: "Some other perk" }
            ],
            incrementalPower: {
                range: "5 feet per level",
                power: "1 per level for this or that reason"
            }
        },
        paranoia: {
            name: "Paranoia",
            tagline: "Know when people are watching you.",
            class: "passive",
            breakPoints: [
                { level: 1, description: "Detect audio surveillance devices" },
                { level: 5, description: "Detect video surveillance devices" },
                { level: 10, description: "Detect all electronic surveillance devices" }
            ],
            incrementalPower: {
                range: "5 feet per level",
                power: "1 per level for this or that reason"
            }
        },
        systemShock: {
            name: "System Shock",
            tagline: "zappy dappy.",
            class: "combat",
            breakPoints: [
                { level: 4, description: "Zap 'em even harder I guess" },
                { level: 8, description: "Free wifi while you zap" }
            ],
            incrementalPower: {
                range: "5 feet per level",
                power: "1 per level for this or that reason"
            }
        }
    }
}
