'use strict'

class Role {
    static All = 'all'
    static Battler = 'battler'
    static Tradeskiller = 'tradeskiller'
    static Woodcutter = 'woodcutter'
    static Stonecutter = 'stonecutter'
    static Miner = 'miner'
    static Alchemist = 'alchemist'
    static RuneCrafter = 'runecrafter'
    static JewelCrafter = 'jewelcrafter'
    static Main = 'main'
    static Alt = 'alt'
    static Dungeoneer = 'dungeoneer'
}

class Resource {
    static Currency = {
        Gold: 'Gold',
        Credits: 'Credits',
        BoundCredits: 'Bound Credits',
        HonorTokens: 'Honor Tokens',
        BossTokens: 'Boss Tokens',
        DungeoneeringTokens: 'Dungeoneering Tokens',
        GatheringSkillShard: 'Gathering Skill Shard',
        ArtisanShard: 'Artisan Shard',
        HeroicShard: 'Heroic Shard',
    }
    static Resources = {
        Wood: 'Wood',
        Metal: 'Metal',
        Stone: 'Stone',
    }
    static CraftingComponents = {
        WeaponComponent: 'Weapon Component',
        ArmorComponent: 'Armor Component',
        ToolComponent: 'Tool Component',
        GemFragments: 'Gem Fragments',
        TrinketFragments: 'Trinket Fragments',
        RunicLeather: 'Runic Leather',
        // TrinketEssence: 'Trinket Essence',
    }
    static AlchemyIngredients = {
        TreeSap: 'Tree Sap',
        SpiderEgg: 'Spider Egg',
        BoneMeal: 'Bone Meal',
        AlchemicalDust: 'Alchemical Dust',
        VialOfOrcBlood: 'Vial of Orc Blood',
        UndeadHeart: 'Undead Heart',
        BirdsNest: "Bird's Nest",
        // AlchemicEssence: 'Alchemic Essence',
        GoldenEgg: 'Golden Egg',
        DemonicDust: 'Demonic Dust',
    }
    static Potions = {
        TrainingGatheringPotion: 'Training Gathering Potion',
        TrainingExpPotion: 'Training Exp Potion',
        MinorGatheringPotion: 'Minor Gathering Potion',
        MinorExpPotion: 'Minor Exp Potion',
        HastePotion: 'Haste Potion',
        //SuperiorHastePotion: 'Superior Haste Potion',
        MinorAutosPotion: 'Minor Autos Potion',
        AptitudePotion: 'Aptitude Potion',
        GreaterExpPotion: 'Greater Exp Potion',
        HeroicPotion: 'Heroic Potion',
        UltraExpPotion: 'Ultra Exp Potion',
    }
    static Gems = {
        Sapphire: 'Sapphire',
        Ruby: 'Ruby',
        Emerald: 'Emerald',
        Diamond: 'Diamond',
    }
    static Stones = {
        Sandstone: 'Sandstone',
        Marble: 'Marble',
        Malachite: 'Malachite',
    }
    static UpgradeStones = {
        HealthUpgradeStone: 'Health Upgrade Stone',
        DamageUpgradeStone: 'Damage Upgrade Stone',
    }
    static DungeonKeys = {
        GoblinCaveKey: 'Goblin Cave Key',
        MountainPassKey: 'Mountain Pass Key',
        DesolateTombsKey: 'Desolate Tombs Key',
        DragonkinLairKey: 'Dragonkin Lair Key',
        AbandonedTowerKey: 'Abandoned Tower Key',
        HauntedCellsKey: 'Haunted Cells Key',
        HallOfDragonsKey: 'Hall Of Dragons Key',
        TheVaultKey: 'The Vault Key',
        TheTreasuryKey: 'The Treasury Key',
    }
    static Runes = {
        TrainingRune1: 'Training Rune 1',
        TrainingRune2: 'Training Rune 2',
        TrainingRune3: 'Training Rune 3',
        TrainingRune4: 'Training Rune 4',
        RuneOfTheWarrior: 'Rune Of The Warrior',
        RuneOfTheGladiator: 'Rune Of The Gladiator',
        RuneOfTheWarlord: 'Rune Of The Warlord',
        RuneOfTheOverlord: 'Rune Of The Overlord',
        GreaterRuneOfTheWarlord: 'Greater Rune Of The Warlord',
    }
    static Misc = {
        ResourceCache: 'Resource Cache',
    }
}

class Rarity {
    static Common = 1
    static Uncommon = 2
    static Rare = 3
    static Epic = 4
    static Legendary = 5
    static Mythic = 6
    static Celestial = 7
    static None = 8
}

const charSettings = {
    // BATTLERS
    Arius: { 
        roles: [Role.All, Role.Battler, Role.Main, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: true,
        },
    },
    Battlarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: true,
        },
    },
    Killarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: true,
        },
    },
    Huntarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    Gladiarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    Mercenarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    Wararius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    Legionarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    Lancarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    Knightarius: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: false,
        },
    },
    ['OG Arius']: { 
        roles: [Role.All, Role.Battler, Role.Alt, Role.Dungeoneer], 
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        bosses: {
            enabled: true,
        },
    },
    // TSERS
    Wooarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Woodcutter, Role.Alchemist, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
    },
    Woodarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Woodcutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
    },
    Choparius: {
        roles: [Role.All, Role.Tradeskiller, Role.Woodcutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
    },
    Lumberarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Woodcutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
    },
    Logarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Woodcutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
    },
    Timberarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Woodcutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
    },
    Stonarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Stonecutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
    },
    Quararius: {
        roles: [Role.All, Role.Tradeskiller, Role.Stonecutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
    },
    Rockarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Stonecutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
    },
    Bouldarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Stonecutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
    },
    Brickarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Stonecutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
    },
    Masonarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Stonecutter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
    },
    Minarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Miner, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
    },
    Metalarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Miner, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
    },
    Gemarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Miner, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
    },
    Minerarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Miner, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
    },
    Dredgarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Miner, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
    },
    Prospectarius: {
        roles: [Role.All, Role.Tradeskiller, Role.Miner, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
    },
    // CRAFTERS
    Runarius: {
        roles: [Role.All, Role.RuneCrafter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Stone,
        labyrinth: {
            enabled: true,
            intervalSeconds: 3600,
        },
        abyss: {
            enabled: true,
            intervalSeconds: 3600
        },
        events: {
            enabled: true,
        },
        dungeons: {
            enabled: true,
            intervalSeconds: 7200,
        },
    },
    Jewelarius: {
        roles: [Role.All, Role.JewelCrafter, Role.Alt, Role.Dungeoneer],
        resource: Resource.Resources.Metal,
        labyrinth: {
            enabled: false,
            intervalSeconds: 3600,
        },
        abyss: {
            enabled: false,
            intervalSeconds: 3600
        },
        events: {
            enabled: false,
        },
        dungeons: {
            enabled: false,
            intervalSeconds: 7200,
        },
    },
    Dungarius: {
        roles: [Role.All, Role.Alt, Role.Tradeskiller, Role.Dungeoneer],
        resource: Resource.Resources.Wood,
        labyrinth: {
            enabled: true,
            intervalSeconds: 3600,
        },
    },
}

const findCharsByRole = role => {
    const res = []
    for (const [key, val] of Object.entries(charSettings)) {
        if (val.roles.includes(role)) res.push(key)
    }

    return res
}

if (module) {
    module.exports = { charSettings }
}
