const { combineStats } = require('../../facilitators.js');
const { gunCalcNames } = require('../../constants.js');
const g = require('../../gunvals.js');
const { 
	addSniper, addAssassin, addRifle, addHunter, addHeavySniper, addRailgun, 
	addNormal, addSpam, addGunner, 
	addHeavy, addLauncher, addShotgun, addTwister, 
	addDrone, addMinion, addAutoDrone, addHoncho, addSwarm, 
	addTrap, addAutoTrap, addAuraTrap, 
	addTrinoughtAuraRing, addTrinoughtTurretRing, addPentanoughtAuraRing, addPentanoughtTurretRing,
} = require('./snowDreadsFacilitators.js');
const {
	enableSnowDreads,
	buildHexnoughts, useOldPhotosphere, hexnoughtScaleFactor,
	hpBuffBodyStats, speedBuffBodyStats, shieldBuffBodyStats,
	hexnoughtBody
} = require('./snowDreadsConstants.js');
require('./snowDreadsMisc.js');

// Navigate to [snowDreadsConstants.js] and the "enableSnowDreads" variable to enable/disable this addon.
if (!enableSnowDreads) {
	return console.log('--- Snowdreads addon [snowDreads.js] is disabled. ---');
}

// T0
Class.dreadSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Dreadnought",
	UPGRADE_LABEL: "Snowdreads",
	UPGRADE_TOOLTIP: "The explosions of gunfire pierce\nthrough the quiet drifting of snow.",
	UPGRADE_COLOR: "aqua",
	LEVEL: 90,
	EXTRA_SKILL: 18,
}
Class.dreadWeaponSnowdread = {
	LABEL: "",
	COLOR: 6,
	REROOT_UPGRADE_TREE: "dreadWeaponSnowdread",
}
Class.dreadBodySnowdread = {
	LABEL: "",
	COLOR: 6,
	REROOT_UPGRADE_TREE: "dreadBodySnowdread",
}

// T1 Weapons
Class.swordSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Sword",
	UPGRADE_TOOLTIP: "Snipers",
	GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.swordSnowdread.GUNS.push(
		...addSniper({length: 20, width: 7, angle: 180 * i}, 0, [g.basic, g.sniper, g.assassin, {reload: 0.85}])
	)
}
Class.sword2Snowdread = {
	PARENT: "swordSnowdread",
	BATCH_UPGRADES: true,
}
Class.pacifierSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Pacifier",
	UPGRADE_TOOLTIP: "Bullet Spam",
	GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.pacifierSnowdread.GUNS.push(
		...addNormal({length: 15, width: 7.5, angle: 180 * i}, 0, [g.basic, {reload: 0.8}])
	)
}
Class.pacifier2Snowdread = {
	PARENT: "pacifierSnowdread",
	BATCH_UPGRADES: true,
}
Class.peacekeeperSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Peacekeeper",
	UPGRADE_TOOLTIP: "Heavy Bullets",
	GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.peacekeeperSnowdread.GUNS.push(
		...addHeavy({length: 17, width: 9, angle: 180*i}, 0, [g.basic, {reload: 1.2, damage: 1.5}]),
	)
}
Class.peacekeeper2Snowdread = {
	PARENT: "peacekeeperSnowdread",
	BATCH_UPGRADES: true,
}
Class.invaderSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Invader",
	UPGRADE_TOOLTIP: "Drones",
	GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.invaderSnowdread.GUNS.push(
		...addDrone({length: 5, width: 9, angle: 180*i}, 0, [g.drone, g.overseer, {reload: 0.85}])
	)
}
Class.invader2Snowdread = {
	PARENT: "invaderSnowdread",
	BATCH_UPGRADES: true,
}
Class.centaurSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Centaur",
	UPGRADE_TOOLTIP: "Traps",
	GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.centaurSnowdread.GUNS.push(
		...addTrap({length: 13, length2: 3, width: 7, angle: 180*i}, 0, [g.trap, {reload: 2, health: 4, range: 0.75}])
	)
}
Class.centaur2Snowdread = {
	PARENT: "centaurSnowdread",
	BATCH_UPGRADES: true,
}

// T1 Bodies
Class.byteSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Byte",
	UPGRADE_TOOLTIP: "Auto Turret",
	TURRETS: [
		{
			POSITION: [9, 0, 0, 0, 360, 2],
			TYPE: 'byteTurretSnowdread',
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'egg',
		}, {
			POSITION: [20, 0, 0, 0, 1],
			TYPE: "eggBaseDeco",
		}, 
	]
}
Class.showerSnowdread = { // Drones
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Shower",
	UPGRADE_TOOLTIP: "Drone Turret",
	BODY: {
		SPEED: 0.93,
		FOV: 1.1,
	},
	TURRETS: [
		{
			POSITION: [10, 0, 0, 0, 360, 2],
			TYPE: "showerTurretSnowdread",
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'egg',
		}, {
			POSITION: [20, 0, 0, 0, 1],
			TYPE: "eggBaseDeco",
		}, 
	]
}
Class.atmosphereSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Atmosphere",
	UPGRADE_TOOLTIP: "Damage Aura",
	TURRETS: [
		{
			POSITION: [11, 0, 0, 0, 360, 2],
			TYPE: 'atmosphereAuraSnowdread',
		},
	],
	PROPS: [
		{
			POSITION: [14, 0, 0, 0, 1],
			TYPE: 'egg',
		}, {
			POSITION: [20, 0, 0, 0, 1],
			TYPE: "eggBaseDeco",
		}, 
	]
}
Class.juggernautSnowdread = {
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Juggernaut",
	UPGRADE_TOOLTIP: "Health Buff",
	BODY: hpBuffBodyStats[0],
	PROPS: [
		{
			POSITION: [20, 0, 0, 0, 1],
			TYPE: "eggBaseDeco",
		}, {
			POSITION: [13, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 5}, BORDERLESS: true}],
		}, {
			POSITION: [6.5, 0, 0, 0, 1],
			TYPE: ['hexagon', {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 15}, BORDERLESS: true, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [24, 0, 0, 0, 0],
			TYPE: ['egg', {COLOR: 9}]
		},
	]
}
Class.spotterSnowdread = { // FOV
	PARENT: "genericEggnoughtSnowdread",
	LABEL: "Spotter",
	UPGRADE_TOOLTIP: "FOV Boost",
	BODY: {
		FOV: 1.1,
	},
	TURRETS: [
		{
			POSITION: [13, 0, 0, 0, 360, 2],
			TYPE: 'spotterRadarSnowdread',
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'egg',
		}, {
			POSITION: [20, 0, 0, 0, 1],
			TYPE: "eggBaseDeco",
		}, {
			POSITION: [9, 0, 0, 0, 1],
			TYPE: 'egg',
		}
	]
}

// T2 Weapons
Class.sabreSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Sabre",
	UPGRADE_TOOLTIP: "Assassins",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.sabreSnowdread.GUNS.push(
		...addAssassin({length: 24, width: 7, x: 7, angle: 90*i}, 12.5, [g.basic, g.sniper, g.assassin, g.assassin, {reload: 0.85}])
	)
}
Class.gladiusSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Gladius",
	UPGRADE_TOOLTIP: "Rifles",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.gladiusSnowdread.GUNS.push(
		...addRifle({length: 19.5, width: 5, angle: 90*i}, -2.5, [g.basic, g.sniper, g.rifle, {health: 1.3}])
	)
}
Class.slingSnowdread = { // hunter
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Sling",
	UPGRADE_TOOLTIP: "Hunters",
	CONTROLLERS: [["zoom", { distance: 300 }]],
	TOOLTIP: "Hold right click to zoom.",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.slingSnowdread.GUNS.push(
		...addHunter({length: 17, width: 9, angle: 90*i}, -5, [g.basic, g.sniper, g.hunter, {health: 1.1, speed: 1.05}])
	)
}
Class.catapultSnowdread = { // mega-sniper
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Catapult",
	UPGRADE_TOOLTIP: "Mega-Snipers",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.catapultSnowdread.GUNS.push(
		...addHeavySniper({length: 22, width: 9, x: 7.5, angle: 90*i}, -2.5, [g.basic, g.sniper, g.predator, g.predator, g.predator, {speed: 0.93, maxSpeed: 0.93, reload: 1.333, size: 2}])
	)
}
Class.dartSnowdread = { // railgun
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Dart",
	UPGRADE_TOOLTIP: "Railguns",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.dartSnowdread.GUNS.push(
		...addRailgun({length: 25, width: 4, x: 7, angle: 90*i}, -2.5, [g.basic, g.sniper, g.sniper, g.sniper, g.pounder, {reload: 1.5}])
	)
}
Class.mediatorSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Mediator",
	UPGRADE_TOOLTIP: "Twins",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.mediatorSnowdread.GUNS.push(
		...addNormal({length: 15, width: 7, y: 4.25, angle: 90*i, delay: 0   }, 12.5, [g.basic, g.twin, {reload: 0.85}]),
		...addNormal({length: 15, width: 7, y: -4.25, angle: 90*i, delay: 0.5}, 12.5, [g.basic, g.twin, {reload: 0.85}]),
	)
}
Class.negotiatorSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Negotiator",
	UPGRADE_TOOLTIP: "Machine Guns",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.negotiatorSnowdread.GUNS.push(
		...addNormal({length: 9, width: 8, aspect: 1.4, x: 6, angle: 90*i}, 12.5, [g.basic, g.machineGun, {size: 0.8, health: 1.3}]),
	)
}
Class.melderSnowdread = { // all auto
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Melder",
	UPGRADE_TOOLTIP: "All Autos",
	TURRETS: [],
}
for(let i = 0; i < 4; i++) {
	Class.melderSnowdread.TURRETS.push(
		{
			POSITION: [10, 9, 0, 90*i, 195, 0],
			TYPE: 'melderAutoSnowdread',
		},
	)
}
Class.crackerSnowdread = { // ultra bullet spam
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Cracker",
	UPGRADE_TOOLTIP: "Miniguns",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.crackerSnowdread.GUNS.push(
		...addSpam({length: 19, width: 7, angle: 90*i, delay: 0  }, 0, [g.basic, g.minigun, {reload: 0.85}]),
		...addSpam({length: 17, width: 7, angle: 90*i, delay: 1/3}, 0, [g.basic, g.minigun, {reload: 0.85}]),
		...addSpam({length: 15, width: 7, angle: 90*i, delay: 2/3}, 0, [g.basic, g.minigun, {reload: 0.85}]),
	)
}
Class.grabberSnowdread = { // spread
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Grabber",
	UPGRADE_TOOLTIP: "Triple Shots",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.grabberSnowdread.GUNS.push(
		...addNormal({length: 17, width: 6.5, y: -1.25, angle: 90 * i - 15, delay: 0.5}, 12.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 17, width: 6.5, y: 1.25, angle: 90 * i + 15, delay: 0.5 }, 12.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 19, width: 6.5, y: 0, angle: 90 * i, delay: 0           }, 12.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
	)
}
Class.enforcerSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Enforcer",
	UPGRADE_TOOLTIP: "Heavy Bullets",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.enforcerSnowdread.GUNS.push(
		...addHeavy({length: 17, width: 9, angle: 90*i}, 2.5, [g.basic, g.pounder, {reload: 0.9}])
	)
}
Class.executorSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Executor",
	UPGRADE_TOOLTIP: "Launchers",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.executorSnowdread.GUNS.push(
		...addLauncher({length: 17, width: 9, angle: 90*i}, -5, [g.basic, g.pounder, g.artillery, {size: 0.9, speed: 0.5, maxSpeed: 0.4, reload: 0.8}])
	)
}
Class.doserSnowdread = { // shotgun
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Doser",
	UPGRADE_TOOLTIP: "Shotguns",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.doserSnowdread.GUNS.push(
		...addShotgun({length: 21, width: 10.5, x: 6, angle: 90*i}, 7.5, [
			{l: 15, w: 3, y: -3},
			{l: 14, w: 3, y: 3},
			{l: 17, w: 4, y: 0},
			{l: 13, w: 4, y: -1},
			{l: 12, w: 4, y: 1},
		], [g.basic, g.machineGun, g.shotgun, {health: 1.5, damage: 1.5}]),
	)
}
Class.swirlSnowdread = { // twister
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Swirl",
	UPGRADE_TOOLTIP: "Twisters",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.swirlSnowdread.GUNS.push(
		...addTwister({length: 16, width: 8.5, angle: 90*i}, 2.5, [g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, {speed: 1.3, maxSpeed: 1.3, reload: 1.333}], "swirlMissileSnowdread")
	)
}
Class.pelterSnowdread = { // artillery
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Pelter",
	UPGRADE_TOOLTIP: "Artillery",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.pelterSnowdread.GUNS.push(
		...addGunner({length: 15, width: 3, y: -3.5, angle: 90*i-7, delay: 0.25}, 0, [g.basic, g.pelleter, g.artillery, {health: 1.1}]),
		...addGunner({length: 15, width: 3, y: 3.5, angle: 90*i+7, delay: 0.75 }, 0, [g.basic, g.pelleter, g.artillery, {health: 1.1}]),
		...addHeavy({length: 17, width: 8, angle: 90*i}, 7.5, [g.basic, g.pounder, g.artillery, {health: 1.1}]),
	)
}
Class.inquisitorSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Inquisitor",
	UPGRADE_TOOLTIP: "Drones",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.inquisitorSnowdread.GUNS.push(
		...addDrone({length: 5, width: 10, aspect: 1.1, x: 8, angle: 90*i}, -2.5, [g.drone, g.overseer, g.overseer, {size: 1.5, reload: 0.6}], 3)
	)
}
Class.assailantMinionTopSnowdread = {
	SHAPE: "M 0.5 0 L 1 1 L 0 0.5 L -1 1 L -0.5 0 L -1 -1 L 0 -0.5 L 1 -1 L 0.5 0",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -5, SATURATION_SHIFT: 0.75},
	MIRROR_MASTER_ANGLE: true,
}
Class.assailantSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Assailant",
	UPGRADE_TOOLTIP: "Minions",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.assailantSnowdread.GUNS.push(
		...addMinion({length: 12, gap: 3, width: 11, angle: 90*i}, 2.5, [g.factory, {size: 0.9, reload: 0.5}])
	)
}
Class.radiationSnowdread = { // auto-drones
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Radiation",
	UPGRADE_TOOLTIP: "Auto-Drones",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.radiationSnowdread.GUNS.push(
		...addAutoDrone({length: 6, width: 10, angle: 90*i}, 0, [g.drone, g.overseer, {reload: 0.8}], 3)
	)
};
Class.boxerSnowdread = { // honcho
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Boxer",
	UPGRADE_TOOLTIP: "Heavy Drones",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.boxerSnowdread.GUNS.push(
		...addHoncho({length: 5, width: 9, aspect: 1.5, x: 8, angle: 90*i}, 0, [g.drone, g.overseer, g.overseer, g.honcho], i % 2 + 1)
	)
};
Class.disablerSnowdread = { // swarms
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Disabler",
	UPGRADE_TOOLTIP: "Swarms",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.disablerSnowdread.GUNS.push(
		...addSwarm({length: 7, width: 7, x: 6, y: 3.5, angle: 90*i, delay: 0   }, 2.5, [g.swarm, g.overseer, g.overseer, {reload: 1.5}]),
		...addSwarm({length: 7, width: 7, x: 6, y: -3.5, angle: 90*i, delay: 0.5}, 2.5, [g.swarm, g.overseer, g.overseer, {reload: 1.5}]),
	)
};
Class.daemonSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Daemon",
	UPGRADE_TOOLTIP: "Trap Spam",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.daemonSnowdread.GUNS.push(
		...addTrap({length: 11.5, length2: 2, width: 4.5, aspect: 1.7, y: 4.5, angle: 90*i }, 10, [g.trap, g.twin, {reload: 2, health: 3.5}]),
		...addTrap({length: 11.5, length2: 2, width: 4.5, aspect: 1.7, y: -4.5, angle: 90*i}, 10, [g.trap, g.twin, {reload: 2, health: 3.5}]),
	)
}
Class.minotaurSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Minotaur",
	UPGRADE_TOOLTIP: "Blocks",
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.minotaurSnowdread.GUNS.push(
		...addTrap({length: 13, length2: 3.75, width: 7, aspect: 1.75, angle: 90*i}, 5, [g.trap, g.setTrap, {reload: 2, health: 2}], true),
	)
}
Class.cleanerSnowdread = { // auto-traps
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Cleaner",
	UPGRADE_TOOLTIP: "Auto-Traps",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.cleanerSnowdread.GUNS.push(
		...addAutoTrap({length: 15, width: 6, aspect: 1.7, angle: 90*i}, 5, [g.trap, {health: 1.2, reload: 1.15, speed: 0.8}], 7)
	)
}
Class.shadeSnowdread = { // aura-traps
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Shade",
	UPGRADE_TOOLTIP: "Aura-Traps",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.shadeSnowdread.GUNS.push(
		...addAuraTrap({length: 14, length2: 3, width: 7, aspect: 1.6, x: 8, angle: 90*i}, 5, [g.trap, g.hexaTrapper, {shudder: 0.6, health: 1.25}], 100)
	)
}
Class.screwdriverSnowdread = { // trap + gun
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Screwdriver",
	UPGRADE_TOOLTIP: "Traps + Bullets",
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.screwdriverSnowdread.GUNS.push(
		...addNormal({length: 19, width: 7, angle: 90*i}, 10, [g.basic, g.flankGuard]),
		...addTrap({length: 13, length2: 3.75, width: 7, aspect: 1.75, angle: 90*i}, 10, [g.trap, g.hexaTrapper]),
	)
}

// T2 Bodies
Class.automationSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Automation",
	UPGRADE_TOOLTIP: "Small Auto Turrets",
	TURRETS: [
		{
			POSITION: [11, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [8, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, BORDERLESS: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 15}}],
		},
	],
}
for (let i = 0; i < 4; i++) {
	Class.automationSnowdread.TURRETS.push(
		{
			POSITION: [4, 9, 0, 90*i+45, 200, 1],
			TYPE: "spamAutoTurretSnowdread",
		},
	)
}
Class.kilobyteSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Kilobyte",
	UPGRADE_TOOLTIP: "Heavy Auto Turret",
	TURRETS: [
		{
			POSITION: [12, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.lighterSnowdread = { // Flamethrower
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Lighter",
	UPGRADE_TOOLTIP: "Flamethrower",
	TURRETS: [
		{
			POSITION: [13, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [9, 0, 0, 0, 360, 1],
			TYPE: 'lighterTurretSnowdread',
		}
	],
}
Class.stormSnowdread = { // Drones
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Storm",
	UPGRADE_TOOLTIP: "Drone Turret",
	BODY: {
		SPEED: 0.93,
		FOV: 1.1,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: 'stormTurretSnowdread',
		}
	],
}
Class.coronaSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Corona",
	UPGRADE_TOOLTIP: "Damage Aura",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [11, 0, 0, 0, 360, 1],
			TYPE: "coronaAuraSnowdread",
		},
	],
}
Class.thermosphereSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Thermosphere",
	UPGRADE_TOOLTIP: "Healing Aura",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 0, 1],
			TYPE: ["square", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [11, 0, 0, 0, 360, 1],
			TYPE: "thermosphereAuraSnowdread",
		},
	],
}
Class.jumboSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Jumbo",
	UPGRADE_TOOLTIP: "Health Buff",
	BODY: hpBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [13, 0, 0, 0, 0, 1],
			TYPE: ['square', {MIRROR_MASTER_ANGLE: true, COLOR: 9}]
		}, {
			POSITION: [7, 0, 0, 0, 0, 1],
			TYPE: ['octogon', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, BORDERLESS: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [24, 0, 0, 0, 0, -1],
			TYPE: ['square', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.colossusSnowdread = {
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Colossus",
	UPGRADE_TOOLTIP: "Speed Buff",
	BODY: speedBuffBodyStats[0],
	GUNS: [],
	TURRETS: [
		{
			POSITION: [13, 0, 0, 0, 0, 1],
			TYPE: ['colossusTopSnowdread', {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ['colossusBottomSnowdread', {MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.brassSnowdread = { // Shield buff
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Brass",
	UPGRADE_TOOLTIP: "Shield Buff",
	BODY: shieldBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [6, 0, 0, 0, 0, 1],
			TYPE: ['square', {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -15}, MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.spySnowdread = { // FOV
	PARENT: "genericSquarenoughtSnowdread",
	LABEL: "Spy",
	UPGRADE_TOOLTIP: "FOV Boost",
	BODY: {
		FOV: 1.2,
		SPEED: 0.95,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 0, 1],
			TYPE: ['square', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["squareBaseDeco"],
		}, {
			POSITION: [10.5, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 15}, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [7.5, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: 13, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [15, 0, 0, 0, 360, 1],
			TYPE: 'spyRadarSnowdread',
		}
	],
}

// T3 Weapons
Class.bayonetSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Bayonet",
	UPGRADE_TOOLTIP: "Assassins",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.bayonetSnowdread.GUNS.push(
		...addAssassin({length: 28, width: 7, x: 7, angle: 120*i}, 0, [g.basic, g.sniper, g.assassin, g.assassin, g.assassin, {reload: 0.8, density: 0.4}])
	)
}
Class.bladeSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Blade",
	UPGRADE_TOOLTIP: "Muskets",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.bladeSnowdread.GUNS.push(
		...addRifle({length: 18, width: 5, angle: 120*i}, -2.5, [g.basic, g.sniper, g.rifle, g.twin, {speed: 0.8, health: 1.5}], true)
	)
}
Class.atlatlSnowdread = { // hunter
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Atlatl",
	UPGRADE_TOOLTIP: "X-Hunters",
	CONTROLLERS: [["zoom", { distance: 500 }]],
	TOOLTIP: "Hold right click to zoom.",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.atlatlSnowdread.GUNS.push(
		...addHunter({length: 18, width: 9, dimensionDifference: 3, angle: 120*i}, -5, [g.basic, g.sniper, g.assassin, g.hunter, {health: 1.1}]),
		{
			POSITION: [5, 9, -1.6, 6, 0, 120*i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -20, SATURATION_SHIFT: 0.5 } },
		}, {
			POSITION: [5, 7.5, -1.6, 4.5, 0, 120*i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 10 } },
		},
	)
}
Class.ballistaSnowdread = { // mega-sniper
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Ballista",
	UPGRADE_TOOLTIP: "Mega-Snipers",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.ballistaSnowdread.GUNS.push(
		...addHeavySniper({length: 23.5, width: 9.5, x: 6.5, angle: 120*i}, -2.5, [g.basic, g.sniper, g.predator, g.predator, g.predator, {speed: 0.93, maxSpeed: 0.93, reload: 1.7, health: 1.2, size: 2}])
	)
}
Class.barbSnowdread = { // railgun
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Barb",
	UPGRADE_TOOLTIP: "Railguns",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.barbSnowdread.GUNS.push(
		...addRailgun({length: 26.5, width: 4, x: 7, angle: 120*i}, 0, [g.basic, g.sniper, g.sniper, g.sniper, g.pounder, {reload: 1.5, damage: 1.2}])
	)
}
Class.mitigatorSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Mitigator",
	UPGRADE_TOOLTIP: "Twins",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.mitigatorSnowdread.GUNS.push(
		...addNormal({length: 10, width: 7, x: 3, y: 4.5, angle: 120*i, delay: 0   }, 5, [g.basic, {reload: 0.85}]),
		...addNormal({length: 10, width: 7, x: 3, y: -4.5, angle: 120*i, delay: 0.5}, 5, [g.basic, {reload: 0.85}]),
	)
}
Class.appeaserSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Appeaser",
	UPGRADE_TOOLTIP: "Machine Guns",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.appeaserSnowdread.GUNS.push(
		...addNormal({length: 7, width: 10, aspect: 1.35, x: 6, angle: 120*i}, 7.5, [g.basic, g.machineGun, {size: 0.8}], false),
		...addNormal({length: 7, width: 9, aspect: 1.3, x: 8, angle: 120*i  }, 7.5, [g.basic, g.machineGun, {size: 0.8, reload: 0.9}]),
	)
}
Class.amalgamSnowdread = { // all auto
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Amalgam",
	UPGRADE_TOOLTIP: "All Autos",
	TOOLTIP: "Reverse tank to focus more fire.",
	TURRETS: [],
}
for(let i = 0; i < 3; i++) {
	Class.amalgamSnowdread.TURRETS.push(
		{
			POSITION: [11, 7, 0, 120*i, 190, 0],
			TYPE: 'amalgamAutoSnowdread',
		},
	)
}
Class.breakerSnowdread = { // ultra bullet spam
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Breaker",
	UPGRADE_TOOLTIP: "Nailguns",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.breakerSnowdread.GUNS.push(
		...addGunner({length: 18.5, width: 2.75, y: -3, angle: 120*i, delay: 1/3}, -5, [g.basic, g.pelleter, g.power, g.nailgun, {speed: 1.05, maxSpeed: 1.05}]),
		...addGunner({length: 18.5, width: 2.75, y: 3, angle: 120*i, delay: 2/3 }, -5, [g.basic, g.pelleter, g.power, g.nailgun, {speed: 1.05, maxSpeed: 1.05}]),
		...addGunner({length: 21, width: 3.25, y: 0, angle: 120*i, delay: 0     }, -5, [g.basic, g.pelleter, g.power, g.nailgun, {speed: 1.05, maxSpeed: 1.05, size: 2.75/3.25}]),
		{
			POSITION: [10, 8.5, 0.6, 5, 0, 120*i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 10 } },
		}, {
			POSITION: [5.5, 9, -1.8, 6.5, 0, 120*i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -20, SATURATION_SHIFT: 0.5 }, },
		}, {
			POSITION: [5.5, 7.5, -1.8, 5, 0, 120*i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 10 } },
		},
	)
}
Class.clasperSnowdread = { // spread
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Clasper",
	UPGRADE_TOOLTIP: "Penta Shots",
	GUNS: [],
	TURRETS: [],
}
for(let i = 0; i < 3; i++) {
	Class.clasperSnowdread.GUNS.push(
		...addNormal({length: 15, width: 7, y: -2.5, angle: 120 * i - 22, delay: 2/3 }, 7.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 15, width: 7, y: 2.5, angle: 120 * i + 22, delay: 2/3  }, 7.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 17, width: 7, y: -1.25, angle: 120 * i - 11, delay: 1/3}, 7.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 17, width: 7, y: 1.25, angle: 120 * i + 11, delay: 1/3 }, 7.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 19, width: 7, y: 0, angle: 120 * i, delay: 0           }, 7.5, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
	)
}
Class.suppressorSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Suppressor",
	UPGRADE_TOOLTIP: "Destroyers",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.suppressorSnowdread.GUNS.push(
		...addHeavy({length: 16.5, width: 10.5, angle: 120*i}, 0, [g.basic, g.pounder, g.destroyer, {reload: 0.85}])
	)
}
Class.inhibitorSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Inhibitor",
	UPGRADE_TOOLTIP: "Skimmers",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.inhibitorSnowdread.GUNS.push(
		...addLauncher({length: 15, width: 11.5, angle: 120*i}, -5, [g.basic, g.pounder, g.artillery, g.skimmer, {size: 0.9, reload: 1.5}], true, "superMissileSnowdread")
	)
}
Class.tranquilizerSnowdread = { // shotgun
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Tranquilizer",
	UPGRADE_TOOLTIP: "Shotguns",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.tranquilizerSnowdread.GUNS.push(
		...addShotgun({length: 20, width: 11.5, x: 5, angle: 120*i}, 0, [
			{l: 15, w: 3, y: -3},
			{l: 15, w: 3, y: 3},
			{l: 17, w: 4, y: 0},
			{l: 13, w: 4, y: -1},
			{l: 12, w: 5, y: 1},
			{l: 12, w: 5, y: 0},
		], [g.basic, g.machineGun, g.shotgun, {health: 1.5, damage: 1.5}]),
	)
}
Class.spiralSnowdread = { // twister
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Spiral",
	UPGRADE_TOOLTIP: "Twisters",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.spiralSnowdread.GUNS.push(
		...addTwister({length: 14, width: 9, x: 2, aspect: -1.4, angle: 120*i}, -5, [g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, {speed: 1.55, maxSpeed: 1.3, reload: 1.333}], "spiralMissileSnowdread")
	)
}
Class.shellerSnowdread = { // artillery
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Sheller",
	UPGRADE_TOOLTIP: "Mortars",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.shellerSnowdread.GUNS.push(
		...addGunner({length: 12.5, width: 3, y: -6, angle: 120*i-7, delay: 0.6}, -5, [g.basic, g.pelleter, g.artillery]),
		...addGunner({length: 12.5, width: 3, y: 6, angle: 120*i+7, delay: 0.8 }, -5, [g.basic, g.pelleter, g.artillery]),
		...addGunner({length: 15.5, width: 3, y: -4, angle: 120*i-7, delay: 0.2}, -5, [g.basic, g.pelleter, g.artillery]),
		...addGunner({length: 15.5, width: 3, y: 4, angle: 120*i+7, delay: 0.4 }, -5, [g.basic, g.pelleter, g.artillery]),
		...addHeavy({length: 17.5, width: 9, angle: 120*i}, 0, [g.basic, g.destroyer, g.artillery])
	)
}
Class.infiltratorSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Infiltrator",
	UPGRADE_TOOLTIP: "Drones",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.infiltratorSnowdread.GUNS.push(
		...addDrone({length: 5, width: 6, aspect: 1.4, x: 6, y: 5.5, angle: 120*i }, -5, [g.drone, g.overseer, g.overseer, {size: 1.5, reload: 0.6}], 2),
		...addDrone({length: 5, width: 6, aspect: 1.4, x: 6, y: -5.5, angle: 120*i}, -5, [g.drone, g.overseer, g.overseer, {size: 1.5, reload: 0.6}], 2),
		...addDrone({length: 5, width: 6, aspect: 1.4, x: 8, y: 0, angle: 120*i   }, -5, [g.drone, g.overseer, g.overseer, g.pounder, {size: 2, reload: 0.4}], 2, "betadrone"),
	)
}
Class.aggressorSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Aggressor",
	UPGRADE_TOOLTIP: "Minions",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.aggressorSnowdread.GUNS.push(
		...addMinion({length: 12, gap: 3, width: 12, angle: 120*i}, 0, [g.factory, {size: 0.9, reload: 0.5}], "aggressorMinionSnowdread", 2)
	)
}
Class.haloSnowdread = { // auto-drones
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Halo",
	UPGRADE_TOOLTIP: "Auto-Drones",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.haloSnowdread.GUNS.push(
		...addAutoDrone({length: 5, width: 12.5, aspect: 1.2, x: 8, angle: 120*i}, -7.5, [g.drone, g.overseer, {reload: 1.2, size: 0.8, speed: 1.15, maxSpeed: 1.15}], 4)
	)
}
Class.sluggerSnowdread = { // honcho
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Slugger",
	UPGRADE_TOOLTIP: "Heavy Drones",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.sluggerSnowdread.GUNS.push(
		...addHoncho({length: 5, width: 10.5, aspect: 1.5, x: 8, angle: 120*i}, -7.5, [g.drone, g.overseer, g.honcho, {maxSpeed: 0.9, size: 0.75}], 2)
	)
};
Class.debilitatorSnowdread = { // swarms
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Debilitator",
	UPGRADE_TOOLTIP: "Swarms",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.debilitatorSnowdread.GUNS.push(
		...addSwarm({length: 7, width: 8, aspect: 0.6, x: 6, y: 4, angle: 120*i, delay: 0   }, 0, [g.swarm, g.flankGuard, {reload: 1.3}]),
		...addSwarm({length: 7, width: 8, aspect: 0.6, x: 6, y: -4, angle: 120*i, delay: 0.5}, 0, [g.swarm, g.flankGuard, {reload: 1.3}]),
		{
			POSITION: [2.5, 12, 0.85, 8, 0, 120*i, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 7.5}},
		},
	)
};
Class.hydraSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Hydra",
	UPGRADE_TOOLTIP: "Trap Spam",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.hydraSnowdread.GUNS.push(
		...addTrap({length: 6, length2: 2, width: 3.5, aspect: 1.8, x: 4, y: 7.5, angle: 120*i, delay: 2/3 }, 0, [g.trap, g.twin, g.pounder, {speed: 1.2}]),
		...addTrap({length: 6, length2: 2, width: 3.5, aspect: 1.8, x: 4, y: -7.5, angle: 120*i, delay: 1/3}, 0, [g.trap, g.twin, g.pounder, {speed: 1.2}]),
		...addTrap({length: 12, length2: 2.5, width: 5, aspect: 1.7, x: 0, y: 0, angle: 120*i, delay: 0    }, 0, [g.trap, g.setTrap, g.twin, g.pounder, {speed: 1.2, reload: 1/1.1}], true),
	)
}
Class.beelzebubSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Beelzebub",
	UPGRADE_TOOLTIP: "Blocks",
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.beelzebubSnowdread.GUNS.push(
		...addTrap({length: 13.5, length2: 3.5, width: 9, aspect: 1.6, angle: 120*i}, 0, [g.trap, g.setTrap, g.pounder, {speed: 1.3, maxSpeed: 1.3, size: 1.2, health: 2}], true)
	)
}
Class.sweeperSnowdread = { // auto-traps
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Sweeper",
	UPGRADE_TOOLTIP: "Auto-Boxes",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.sweeperSnowdread.GUNS.push(
		...addAutoTrap({length: 15.5, length2: 2, width: 9.5, aspect: 1.3, angle: 120*i}, -2.5, [g.trap, g.setTrap, {reload: 2.25}], 4, true)
	)
}
Class.aegisSnowdread = { // aura-traps
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Aegis",
	UPGRADE_TOOLTIP: "Aura-Boxes",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.aegisSnowdread.GUNS.push(
		...addAuraTrap({length: 14, length2: 3, width: 9.5, aspect: 1.45, x: 7, angle: 120*i}, 0, [g.trap, g.setTrap, g.hexaTrapper, {reload: 1.85, range: 1.4, health: 2.4}], 6, true)
	)
}
Class.drillSnowdread = { // trap + gun
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Drill",
	UPGRADE_TOOLTIP: "Blocks + Bullets",
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.drillSnowdread.GUNS.push(
		...addNormal({length: 18, width: 7, angle: 120*i}, 2.5, [g.basic, g.flankGuard]),
		...addTrap({length: 12, length2: 3, width: 8.5, aspect: 1.4, angle: 120*i}, 2.5, [g.trap, g.setTrap, g.hexaTrapper, {size: 0.85}], true)
	)
}

// T3 Bodies
Class.mechanismSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Mechanism",
	UPGRADE_TOOLTIP: "Small Auto Spam",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
	],
}
for (let i = 0; i < 3; i++) {
	Class.mechanismSnowdread.TURRETS.push(
		{
			POSITION: [3.5, 6, 0, 120*i, 200, 1],
			TYPE: "spamAutoTurretSnowdread",
		}, {
			POSITION: [3.5, 10, 0, 120*i+60, 200, 1],
			TYPE: "spamAutoTurretSnowdread",
		},
	)
}
Class.fusionSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Fusion",
	UPGRADE_TOOLTIP: "Damage Aura + Small Autos",
	TURRETS: [
		{
			POSITION: [15, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtTurretRing(),
		{
			POSITION: [9.5, 0, 0, 0, 360, 1],
			TYPE: "trinoughtBigAuraSnowdread",
		},
	],
}
Class.binarySnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Binary",
	UPGRADE_TOOLTIP: "Heavy Auto + Small Autos",
	TURRETS: [
		{
			POSITION: [15, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtTurretRing(),
		{
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.exosphereSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Exosphere",
	UPGRADE_TOOLTIP: "Healing Aura + Small Autos",
	TURRETS: [
		{
			POSITION: [15, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtTurretRing(),
		{
			POSITION: [9.5, 0, 0, 0, 360, 1],
			TYPE: "trinoughtBigHealAuraSnowdread",
		},
	],
}
Class.megabyteSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Megabyte",
	UPGRADE_TOOLTIP: "Heavy Auto Turret",
	TURRETS: [
		{
			POSITION: [15.5, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [12, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.trojanSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Trojan",
	UPGRADE_TOOLTIP: "Heavy Auto + Damage Auras",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(),
		{
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.hardwareSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Hardware",
	UPGRADE_TOOLTIP: "Heavy Auto + Healing Auras",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(true),
		{
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.burnerSnowdread = { // Flamethrower
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Burner",
	UPGRADE_TOOLTIP: "Flamethrower",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [9, 0, 0, 0, 360, 1],
			TYPE: 'burnerTurretSnowdread',
		}
	],
}
Class.tempestSnowdread = { // Drones
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Tempest",
	UPGRADE_TOOLTIP: "Drone Turret",
	BODY: {
		SPEED: 0.93,
		FOV: 1.1,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: 'tempestTurretSnowdread',
		},
	]
}
Class.chromosphereSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Chromosphere",
	UPGRADE_TOOLTIP: "Damage Auras",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(),
		{
			POSITION: [9.5, 0, 0, 0, 360, 1],
			TYPE: "trinoughtBigAuraSnowdread",
		},
	],
}
Class.mesosphereSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Mesosphere",
	UPGRADE_TOOLTIP: "Healing Auras",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(true),
		{
			POSITION: [9.5, 0, 0, 0, 360, 1],
			TYPE: "trinoughtBigHealAuraSnowdread",
		},
	],
}
Class.goliathSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Goliath",
	UPGRADE_TOOLTIP: "Health Buff",
	BODY: hpBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
	],
}
Class.planetSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Planet",
	UPGRADE_TOOLTIP: "Health Buff + Damage Auras",
	BODY: hpBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(),
	],
}
Class.moonSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Moon",
	UPGRADE_TOOLTIP: "Health Buff + Healing Auras",
	BODY: hpBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(true),
	],
}
Class.burgSnowdread = { // HP + auto spam
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Burg",
	UPGRADE_TOOLTIP: "Health Buff + Small Autos",
	BODY: hpBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtTurretRing(),
	],
}
Class.siloSnowdread = { // HP + big auto
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Silo",
	UPGRADE_TOOLTIP: "Health Buff + Heavy Auto",
	BODY: hpBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		},
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.titanSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Titan",
	UPGRADE_TOOLTIP: "Speed Buff",
	BODY: speedBuffBodyStats[1],
	GUNS: [],
	TURRETS: [
		{
			POSITION: [11, 0, 0, 0, 0, 1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.sirenSnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Siren",
	UPGRADE_TOOLTIP: "Speed Buff + Damage Auras",
	BODY: speedBuffBodyStats[0],
	GUNS: [],
	TURRETS: [
		{
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
		...addTrinoughtAuraRing(),
	],
}
Class.harpySnowdread = {
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Harpy",
	UPGRADE_TOOLTIP: "Speed Buff + Healing Auras",
	BODY: speedBuffBodyStats[0],
	GUNS: [],
	TURRETS: [
		{
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
		...addTrinoughtAuraRing(true),
	],
}
Class.batonSnowdread = { // Speed + auto spam
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Baton",
	UPGRADE_TOOLTIP: "Speed Buff + Small Autos",
	BODY: speedBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
		...addTrinoughtTurretRing(),
	],
}
Class.fireworkSnowdread = { // Speed + big auto
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Firework",
	UPGRADE_TOOLTIP: "Speed Buff + Heavy Auto",
	BODY: speedBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["triangle", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.armadaSnowdread = { // Speed + HP
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Armada",
	UPGRADE_TOOLTIP: "Speed Buff + Health Buff",
	BODY: {
		HEALTH: 1.8, 
		SHIELD: 1.8, 
		REGEN: 1.4, 
		SPEED: 1.75,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["titanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.steelSnowdread = { // Shield buff
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Steel",
	UPGRADE_TOOLTIP: "Shield Buff",
	BODY: shieldBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}
	],
}
Class.flintSnowdread = { // Shield buff + auras
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Flint",
	UPGRADE_TOOLTIP: "Shielf Buff + Damage Auras",
	BODY: shieldBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(),
	],
}
Class.martensiteSnowdread = { // Shield buff + heal auras
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Martensite",
	UPGRADE_TOOLTIP: "Shield Buff + Healing Auras",
	BODY: shieldBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtAuraRing(true),
	],
}
Class.ceramicSnowdread = { // Shield buff + auto spam
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Ceramic",
	UPGRADE_TOOLTIP: "Shielf Buff + Small Autos",
	BODY: shieldBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
		...addTrinoughtTurretRing(),
	],
}
Class.tungstenSnowdread = { // Shield buff + big auto
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Tungsten",
	UPGRADE_TOOLTIP: "Shield Buff + Heavy Auto",
	BODY: shieldBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "kilobyteTurretSnowdread",
		},
	],
}
Class.diamondSnowdread = { // Shield buff + HP buff
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Diamond",
	UPGRADE_TOOLTIP: "HP Buff + Shield Buff",
	BODY: shieldBuffBodyStats[0],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		},
	],
}
Class.monitorSnowdread = { // FOV
	PARENT: "genericTrinoughtSnowdread",
	LABEL: "Monitor",
	UPGRADE_TOOLTIP: "FOV Boost",
	BODY: {
		FOV: 1.3,
		SPEED: 0.9,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ['triangle', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["triangleBaseDeco"],
		}, {
			POSITION: [9, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 10}}]
		}, {
			POSITION: [6, 0, 0, 0, 0, 1],
			TYPE:['egg', {COLOR: 2}]
		}, {
			POSITION: [16, 0, 0, 0, 360, 1],
			TYPE: 'monitorRadarSnowdread'
		}
	]
}

// T4 Weapons
Class.javelinSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Javelin",
	UPGRADE_TOOLTIP: "Assassins",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.javelinSnowdread.GUNS.push(
		...addAssassin({length: 28, width: 7, x: 7, angle: 72*i}, 7.5, [g.basic, g.sniper, g.assassin, g.assassin, g.assassin, g.assassin, {reload: 0.8, density: 2/9, speed: 0.8, maxSpeed: 0.8, health: 1.25}])
	)
}
Class.rapierSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Rapier",
	UPGRADE_TOOLTIP: "Muskets",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.rapierSnowdread.GUNS.push(
		...addRifle({length: 18, width: 4.5, angle: 72*i}, 0, [g.basic, g.sniper, g.rifle, {speed: 0.8, health: 1.5}], true)
	)
}
Class.woomeraSnowdread = { // hunter
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Woomera",
	UPGRADE_TOOLTIP: "X-Predators",
	CONTROLLERS: [["zoom", { distance: 450 }]],
	TOOLTIP: "Hold right click to zoom.",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.woomeraSnowdread.GUNS.push(
		...addHunter({length: 20, width: 9.5, dimensionDifference: 2.5, angle: 72*i, barrelCount: 3}, -5, [g.basic, g.sniper, g.assassin, g.hunter, g.predator, {health: 1.1}]),
		{
			POSITION: [5, 9.5, -1.6, 7.5, 0, 72*i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -15, SATURATION_SHIFT: 0.5 }, },
		}, {
			POSITION: [5, 8, -1.6, 6, 0, 72*i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 15 } },
		},
	)
}
Class.trebuchetSnowdread = { // mega-sniper
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Trebuchet",
	UPGRADE_TOOLTIP: "Mega-Snipers",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.trebuchetSnowdread.GUNS.push(
		...addHeavySniper({length: 24, width: 9, x: 8.5, angle: 72*i}, -2.5, [g.basic, g.sniper, g.predator, g.predator, g.predator, g.predator, {speed: 0.93, maxSpeed: 0.93, reload: 1.7, health: 1.4, size: 2}])
	)
}
Class.boltSnowdread = { // railgun
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Bolt",
	UPGRADE_TOOLTIP: "Railguns",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.boltSnowdread.GUNS.push(
		...addRailgun({length: 28.5, width: 4, x: 8, angle: 72*i}, -2.5, [g.basic, g.sniper, g.sniper, g.sniper, g.pounder, {reload: 1.5, damage: 1.2, speed: 1.2, maxSpeed: 1.2}])
	)
}
Class.diplomatSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Diplomat",
	UPGRADE_TOOLTIP: "Triplets",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.diplomatSnowdread.GUNS.push(
		...addNormal({length: 14, width: 7, y: 3.15, angle: 72*i, delay: 0.5 }, 10, [g.basic, g.spam, g.spam, {size: 0.85}]),
		...addNormal({length: 14, width: 7, y: -3.15, angle: 72*i, delay: 0.5}, 10, [g.basic, g.spam, g.spam, {size: 0.85}]),
		...addNormal({length: 16, width: 7, y: 0, angle: 72*i, delay: 0      }, 10, [g.basic, g.spam, g.spam, {size: 0.85}]),
	)
}
Class.arbitratorSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Arbitrator",
	UPGRADE_TOOLTIP: "Machine Guns",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.arbitratorSnowdread.GUNS.push(
		...addNormal({length: 8, width: 10.75, aspect: 1.33, x: 5.5, angle: 72*i}, 10, [g.basic, g.machineGun, g.spam, g.spam, {size: 0.7, reload: 1.2}], false),
		...addNormal({length: 8, width: 9.5, aspect: 1.33, x: 7.5, angle: 72*i  }, 10, [g.basic, g.machineGun, g.spam, g.spam, {size: 0.65, reload: 1.1}]),
		...addNormal({length: 8, width: 7.25, aspect: 1.25, x: 9.5, angle: 72*i }, 10, [g.basic, g.machineGun, g.spam, g.spam, {size: 0.6, reload: 1}]),
	)
}
Class.dissolverSnowdread = { // all auto
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Dissolver",
	UPGRADE_TOOLTIP: "All Autos",
	TURRETS: [],
}
for(let i = 0; i < 5; i++) {
	Class.dissolverSnowdread.TURRETS.push(
		{
			POSITION: [9, 10, 0, 72*i, 200, 0],
			TYPE: 'dissolverAutoSnowdread',
		},
	)
}
Class.eroderSnowdread = { // ultra bullet spam
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Eroder",
	UPGRADE_TOOLTIP: "Rimflaks",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.eroderSnowdread.GUNS.push(
		...addSpam({length: 14.5, width: 4, y: 4.5, angle: 72*i, delay: 0    }, 0, [g.basic, g.minigun, {health: 1.1}]),
		...addSpam({length: 12.5, width: 4, y: 4.5, angle: 72*i, delay: 0.5  }, 0, [g.basic, g.minigun, {health: 1.1}]),
		...addSpam({length: 14.5, width: 4, y: -4.5, angle: 72*i, delay: 0.25}, 0, [g.basic, g.minigun, {health: 1.1}]),
		...addSpam({length: 12.5, width: 4, y: -4.5, angle: 72*i, delay: 0.75}, 0, [g.basic, g.minigun, {health: 1.1}]),
		...addGunner({length: 19, width: 1.6, y: -2, angle: 72*i, delay: 0 }, 0, [g.basic, g.pelleter, g.twin, g.power, {speed: 0.7, maxSpeed: 0.7}]),
		...addGunner({length: 19, width: 1.6, y: 2, angle: 72*i, delay: 0.5}, 0, [g.basic, g.pelleter, g.twin, g.power, {speed: 0.7, maxSpeed: 0.7}]),
		{
			POSITION: [14, 7.5, 1, 0, 0, 72*i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -15, SATURATION_SHIFT: 0.5 }, },
		}, {
			POSITION: [13, 6, 1, 0, 0, 72*i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 5 } },
		},
	)
}
Class.gripperSnowdread = { // spread
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Gripper",
	UPGRADE_TOOLTIP: "Crowbars",
	GUNS: [],
	TURRETS: [],
}
for(let i = 0; i < 5; i++) {
	Class.gripperSnowdread.GUNS.push(
		...addNormal({length: 15.5, width: 5.5, y: 1, angle: 72 * i - 22, delay: 2/3 }, 10, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 15.5, width: 5.5, y: -1, angle: 72 * i + 22, delay: 2/3}, 10, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 17, width: 5.5, y: 0, angle: 72 * i - 11, delay: 1/3   }, 10, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 17, width: 5.5, y: 0, angle: 72 * i + 11, delay: 1/3   }, 10, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
		...addNormal({length: 18.5, width: 5.5, y: 0, angle: 72 * i, delay: 0        }, 10, [g.basic, g.twin, g.tripleShot, {size: 0.95, reload: 0.95, health: 1.15}]),
	)
}
Class.retardantSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Retardant",
	UPGRADE_TOOLTIP: "Destroyers",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.retardantSnowdread.GUNS.push(
		...addHeavy({length: 17, width: 10, angle: 72*i}, 2.5, [g.basic, g.pounder, g.destroyer, g.annihilator, {reload: 0.9, health: 1.5}])
	)
}
Class.tyrantSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Tyrant",
	UPGRADE_TOOLTIP: "Skimmers",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.tyrantSnowdread.GUNS.push(
		...addLauncher({length: 15, width: 11, angle: 72*i}, 0, [g.basic, g.pounder, g.artillery, g.skimmer, {size: 0.9, damage: 1.2, reload: 1.5}], true, "superMissileSnowdread")
	)
}
Class.anesthesiologistSnowdread = { // shotgun
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Anesthesiologist",
	UPGRADE_TOOLTIP: "Shotguns",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.anesthesiologistSnowdread.GUNS.push(
		...addShotgun({length: 20.5, width: 11, x: 7.5, angle: 72*i}, 5, [
			{l: 15, w: 4, y: -3},
			{l: 15, w: 4, y: 3},
			{l: 17, w: 5, y: 0},
			{l: 13, w: 5, y: -2},
			{l: 12, w: 1.5, y: -1, small: true},
			{l: 12, w: 2, y: 1, small: true},
			{l: 12, w: 2, y: 2, small: true},
		], [g.basic, g.machineGun, g.shotgun, {reload: 1.2, health: 1.8, damage: 1.1, speed: 0.85, maxSpeed: 0.85}], [g.basic, g.machineGun, g.shotgun, {speed: 1.55, maxSpeed: 1.3, reload: 1.2, damage: 0.9}])
	)
}
Class.helixSnowdread = { // twister
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Helix",
	UPGRADE_TOOLTIP: "Twisters",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.helixSnowdread.GUNS.push(
		...addTwister({length: 17, width: 8.5, angle: 72*i}, 0, [g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, {speed: 1.9, maxSpeed: 1.3, reload: 1.333}], "spiralMissileSnowdread")
	)
}
Class.bombardmentSnowdread = { // artillery
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Bombardment",
	UPGRADE_TOOLTIP: "Mortars",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.bombardmentSnowdread.GUNS.push(
		...addGunner({length: 14, width: 2, y: -4.25, angle: 72*i-7, delay: 0.6 }, 0, [g.basic, g.pelleter, g.artillery]),
		...addGunner({length: 14, width: 2, y: 4.25, angle: 72*i+7, delay: 0.8  }, 0, [g.basic, g.pelleter, g.artillery]),
		...addGunner({length: 15.5, width: 2, y: -2.5, angle: 72*i-7, delay: 0.2}, 0, [g.basic, g.pelleter, g.artillery]),
		...addGunner({length: 15.5, width: 2, y: 2.5, angle: 72*i+7, delay: 0.4 }, 0, [g.basic, g.pelleter, g.artillery]),
		...addHeavy({length: 17.5, width: 8, angle: 72*i}, 2.5, [g.basic, g.destroyer, g.artillery, {speed: 1.1, maxSpeed: 1.1}])
	)
}
Class.raiderSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Raider",
	UPGRADE_TOOLTIP: "Drones",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.raiderSnowdread.GUNS.push(
		...addDrone({length: 4, width: 5, aspect: 2.1, x: 9, y: 3.25, angle: 72*i }, 0, [g.drone, g.overseer, g.overseer, g.overseer, {size: 1.5, reload: 0.6}], 2, "drone"),
		...addDrone({length: 4, width: 5, aspect: 2.1, x: 9, y: -3.25, angle: 72*i}, 0, [g.drone, g.overseer, g.overseer, g.overseer, {size: 1.5, reload: 0.6}], 2, "drone"),
		...addDrone({length: 6, width: 6.5, aspect: 1.4, x: 9, y: 0, angle: 72*i  }, 0, [g.drone, g.overseer, g.overseer, g.overseer, g.pounder, {size: 2, reload: 0.4}], 2, "betadrone"),
	)
}
Class.gladiatorSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Gladiator",
	UPGRADE_TOOLTIP: "Minions",
	GUNS: [
		...addMinion({length: 13, width: 11, gap: 2.75, angle: 0   }, 0, [g.factory, {size: 0.9, reload: 0.5}], "gladiatorTritankMinionSnowdread",  2),
		...addMinion({length: 13, width: 11, gap: 2.75, angle: 72  }, 0, [g.factory, {size: 0.9, reload: 0.5}], "gladiatorTritrapMinionSnowdread",  2),
		...addMinion({length: 13, width: 11, gap: 2.75, angle: 144 }, 0, [g.factory, {size: 0.9, reload: 0.5}], "gladiatorTriswarmMinionSnowdread", 2),
		...addMinion({length: 13, width: 11, gap: 2.75, angle: -144}, 0, [g.factory, {size: 0.9, reload: 0.5}], "gladiatorAutoMinionSnowdread",     2),
		...addMinion({length: 13, width: 11, gap: 2.75, angle: -72 }, 0, [g.factory, {size: 0.9, reload: 0.5}], "gladiatorAuraMinionSnowdread",     2),
	],
}
Class.starlightSnowdread = { // auto-drones
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Starlight",
	UPGRADE_TOOLTIP: "Auto-Drones",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.starlightSnowdread.GUNS.push(
		...addAutoDrone({length: 5, width: 9.5, aspect: 1.2, x: 9, angle: 72*i}, 0, [g.drone, g.overseer, {reload: 1.5, speed: 1.15, maxSpeed: 1.15}], 3)
	)
}
Class.bruiserSnowdread = { // honcho
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Bruiser",
	UPGRADE_TOOLTIP: "Heavy Drones",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.bruiserSnowdread.GUNS.push(
		...addHoncho({length: 5, width: 8, aspect: 1.5, x: 9, angle: 72*i}, -2.5, [g.drone, g.overseer, g.overseer, g.honcho, {maxSpeed: 0.85}], 2)
	)
};
Class.incapacitatorSnowdread = { // swarms
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Incapacitator",
	UPGRADE_TOOLTIP: "Swarms",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.incapacitatorSnowdread.GUNS.push(
		...addSwarm({length: 6, width: 6, x: 8, y: 3.25, angle: 72*i, delay: 0}, 0, [g.swarm, g.flankGuard, g.flankGuard, {maxSpeed: 1.2}]),
		...addSwarm({length: 6, width: 6, x: 8, y: -3.25, angle: 72*i, delay: 0.5}, 0, [g.swarm, g.flankGuard, g.flankGuard, {maxSpeed: 1.2}]),
		{
			POSITION: [3, 9, 0.85, 9, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 7.5}},
		},
	)
};
Class.cerberusSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Cerberus",
	UPGRADE_TOOLTIP: "Trap Spam",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.cerberusSnowdread.GUNS.push(
		...addTrap({length: 13, length2: 1.5, width: 4, y: 2, angle: 72*i+10, delay: 0.5}, 0, [g.trap, g.pounder, {speed: 1.2, reload: 1.09}]),
		...addTrap({length: 13, length2: 1.5, width: 4, y: -2, angle: 72*i-10, delay: 0.5}, 0, [g.trap, g.pounder, {speed: 1.2, reload: 1.09}]),
		...addTrap({length: 15, length2: 2, width: 5.5, aspect: 1.7, angle: 72*i}, 0, [g.trap, g.setTrap, g.pounder, {speed: 1.2, reload: 1.09}], true),
	)
}
Class.luciferSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Lucifer",
	UPGRADE_TOOLTIP: "Blocks",
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.luciferSnowdread.GUNS.push(
		...addTrap({length: 13.5, length2: 3.5, width: 8, angle: 72*i}, 0, [g.trap, g.setTrap, g.pounder, {speed: 1.3, maxSpeed: 1.3, size: 1.3, health: 2}], true),
	)
}
Class.sterilizerSnowdread = { // auto-traps
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Sterilizer",
	UPGRADE_TOOLTIP: "Auto-Blocks",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.sterilizerSnowdread.GUNS.push(
		...addAutoTrap({length: 16.5, length2: 2, width: 9, aspect: 1.3, angle: 72*i}, 0, [g.trap, g.setTrap, {reload: 2.667}], 4, true)
	)
}
Class.hielamanSnowdread = { // aura-traps
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Hielaman",
	UPGRADE_TOOLTIP: "Aura-Traps",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.hielamanSnowdread.GUNS.push(
		...addAuraTrap({length: 15, length2: 3, width: 9, aspect: 1.5, x: 8, angle: 72*i}, 0, [g.trap, g.setTrap, g.hexaTrapper, {reload: 2.4, range: 1.6, health: 2.4}], 5, true)
	)
}
Class.jackhammerSnowdread = { // trap + gun
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Jackhammer",
	UPGRADE_TOOLTIP: "Blocks + Bullets",
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.jackhammerSnowdread.GUNS.push(
		...addNormal({length: 19, width: 6.75, angle: 72*i}, 10),
		...addTrap({length: 13, length2: 3, width: 8.25, aspect: 1.4, angle: 72*i}, 2.5, [g.trap, g.setTrap, g.hexaTrapper], true)
	)
}

// T4 Bodies
Class.skynetSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Skynet",
	UPGRADE_TOOLTIP: "Small Auto Spam",
	TURRETS: [
		{
			POSITION: [11, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
	],
}
for (let i = 0; i < 5; i++) {
	Class.skynetSnowdread.TURRETS.push(
		{
			POSITION: [3.25, 4.5, 0, 72*i, 200, 1],
			TYPE: "spamAutoTurretSnowdread",
		},
	)
}
for (let i = 0; i < 5; i++) {
	Class.skynetSnowdread.TURRETS.push(
		{
			POSITION: [3.25, 8, 0, 72*i+36, 200, 1],
			TYPE: "spamAutoTurretSnowdread",
		},
	)
}
Class.supernovaSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Supernova",
	UPGRADE_TOOLTIP: "Damage Aura + Small Autos",
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtTurretRing(),
		{
			POSITION: [9, 0, 0, 0, 360, 1],
			TYPE: "pentanoughtBigAuraSnowdread",
		},
	],
}
Class.cipherSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Cipher",
	UPGRADE_TOOLTIP: "Heavy Auto + Small Autos",
	TURRETS: [
		{
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtTurretRing(),
		{
			POSITION: [11.5, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.interstellarSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Interstellar",
	UPGRADE_TOOLTIP: "Healing Aura + Small Autos",
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [9.5, 0, 0, 0, 360, 1],
			TYPE: "pentanoughtBigHealAuraSnowdread",
		},
		...addPentanoughtTurretRing(),
	],
}
Class.gigabyteSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Gigabyte",
	UPGRADE_TOOLTIP: "Heavy Auto Turret",
	TURRETS: [
		{
			POSITION: [14.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [12.5, 0, 0, 0, 360, 1],
			TYPE: "gigabyteTurretSnowdread",
		},
	],
}
Class.malwareSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Malware",
	UPGRADE_TOOLTIP: "Heavy Auto + Damage Auras",
	TURRETS: [
		{
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtAuraRing(),
		{
			POSITION: [11.5, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.softwareSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Software",
	UPGRADE_TOOLTIP: "Heavy Auto + Healing Auras",
	TURRETS: [
		{
			POSITION: [13, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtAuraRing(true),
		{
			POSITION: [11.5, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.roasterSnowdread = { // Flamethrower
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Roaster",
	UPGRADE_TOOLTIP: "Flamethrower",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ['pentagon', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [10.5, 0, 0, 0, 360, 1],
			TYPE: 'roasterTurretSnowdread'
		},
	],
}
Class.monsoonSnowdread = { // Drones
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Monsoon",
	UPGRADE_TOOLTIP: "Drone Turret",
	BODY: {
		SPEED: 0.93,
		FOV: 1.1,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ['pentagon', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [10.5, 0, 0, 0, 360, 1],
			TYPE: 'monsoonTurretSnowdread'
		},
	],
}
Class.photosphereSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Photosphere",
	UPGRADE_TOOLTIP: "Damage Auras",
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
	],
}
if (useOldPhotosphere) {
	for (let i = 0; i < 5; i++) {
		let theta = (72 * i + 36) * Math.PI / 180;
		Class.photosphereSnowdread.TURRETS.push(
			{
				POSITION: [3.5, 8.75 * Math.cos(theta), 8.75 * Math.sin(theta), 0, 360, 1],
				TYPE: "photosphereSmallAuraSnowdread",
			},
		)
	}
	for (let i = 0; i < 5; i++) {
		let theta = (72 * i) * Math.PI / 180;
		Class.photosphereSnowdread.TURRETS.push(
			{
				POSITION: [3, 4 * Math.cos(theta), 4 * Math.sin(theta), 0, 360, 1],
				TYPE: "photosphereBigAuraSnowdread",
			},
		)
	}
} else {
	Class.photosphereSnowdread.TURRETS.push(
		...addPentanoughtAuraRing(),
		{
			POSITION: [9, 0, 0, 0, 360, 1],
			TYPE: "pentanoughtBigAuraSnowdread",
		},
	)
}
Class.stratosphereSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Stratosphere",
	UPGRADE_TOOLTIP: "Healing Auras",
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtAuraRing(true),
		{
			POSITION: [9.5, 0, 0, 0, 360, 1],
			TYPE: "pentanoughtBigHealAuraSnowdread",
		},
	],
}
Class.behemothSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Behemoth",
	UPGRADE_TOOLTIP: "Health Buff",
	BODY: hpBuffBodyStats[3],
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [7.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, BORDERLESS: true}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		},
	],
}
Class.astronomicSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Astronomic",
	UPGRADE_TOOLTIP: "Health Buff + Damage Auras",
	BODY: hpBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [7.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}}],
		}, {
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtAuraRing(),
	],
}
Class.grandioseSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Grandiose",
	UPGRADE_TOOLTIP: "Health Buff + Healing Auras",
	BODY: hpBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [7.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		},
		...addPentanoughtAuraRing(true),
	],
}
Class.bunkerSnowdread = { // HP + auto spam
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Bunker",
	UPGRADE_TOOLTIP: "Health Buff + Small Autos",
	BODY: hpBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [7.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		},
		...addPentanoughtTurretRing(),
	],
}
Class.arsenalSnowdread = { // HP + big auto
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Arsenal",
	UPGRADE_TOOLTIP: "Health Buff + Heavy Auto",
	BODY: hpBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [15.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}}],
		}, {
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [24, 0, 0, 180, 0, -1],
			TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [11.5, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.leviathanSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Leviathan",
	UPGRADE_TOOLTIP: "Speed Buff",
	BODY: speedBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 0, 0, 1],
			TYPE: ["pentagonLeviathanTopSnowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["pentagonLeviathanBottomSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.valrayvnSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Valrayvn",
	UPGRADE_TOOLTIP: "Speed Buff + Damage Auras",
	BODY: speedBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 0, 0, 1],
			TYPE: ["pentagonLeviathanTop2Snowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["pentagonLeviathanBottomSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
		...addPentanoughtAuraRing(),
	],
}
Class.pegasusSnowdread = {
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Pegasus",
	UPGRADE_TOOLTIP: "Speed Buff + Healing Auras",
	BODY: speedBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 0, 0, 1],
			TYPE: ["pentagonLeviathanTop2Snowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["pentagonLeviathanBottomSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
		...addPentanoughtAuraRing(true),
	],
}
Class.maceSnowdread = { // Speed + auto spam
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Mace",
	UPGRADE_TOOLTIP: "Speed Buff + Small Autos",
	BODY: speedBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 0, 0, 1],
			TYPE: ["pentagonLeviathanTop2Snowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["pentagonLeviathanBottomSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
		...addPentanoughtTurretRing(),
	],
}
Class.missileSnowdread = { // Speed + big auto
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Missile",
	UPGRADE_TOOLTIP: "Speed Buff + Heavy Auto",
	BODY: speedBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [12, 0, 0, 0, 0, 1],
			TYPE: ["pentagonLeviathanTop2Snowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["pentagonLeviathanBottomSnowdread", {MIRROR_MASTER_ANGLE: true}]
		}, {
			POSITION: [11.5, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.battalionSnowdread = { // Speed + HP
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Battalion",
	UPGRADE_TOOLTIP: "Speed Buff + Health Buff",
	BODY: {
		HEALTH: 2.8, 
		SHIELD: 2.8, 
		REGEN: 1.8, 
		SPEED: 2.15,
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 0, 1],
			TYPE: ["pentagonLeviathanTop3Snowdread", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [7.5, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, BORDERLESS: true}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [20, 0, 0, 0, 0, -1],
			TYPE: ["pentagonLeviathanBottomSnowdread", {MIRROR_MASTER_ANGLE: true}]
		},
	],
}
Class.titaniumSnowdread = { // Shield buff
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Titanium",
	UPGRADE_TOOLTIP: "Shield Buff",
	BODY: shieldBuffBodyStats[2],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
	],
}
Class.obsidianSnowdread = { // Shield buff + auras
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Obsidian",
	UPGRADE_TOOLTIP: "Shield buff + Damage Auras",
	BODY: shieldBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtAuraRing(),
	],
}
Class.austeniteSnowdread = { // Shield buff + heal auras
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Austenite",
	UPGRADE_TOOLTIP: "Shield buff + Healing Auras",
	BODY: shieldBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtAuraRing(true),
	],
}
Class.carbideSnowdread = { // Shield buff + auto spam
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Carbide",
	UPGRADE_TOOLTIP: "Shield buff + Small Autos",
	BODY: shieldBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
		...addPentanoughtTurretRing(),
	],
}
Class.osmiumSnowdread = { // Shield buff + big auto
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Osmium",
	UPGRADE_TOOLTIP: "Shield buff + Heavy Auto",
	BODY: shieldBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [11.5, 0, 0, 0, 360, 1],
			TYPE: "megabyteTurretSnowdread",
		},
	],
}
Class.grapheneSnowdread = { // Shield buff + HP buff
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Graphene",
	UPGRADE_TOOLTIP: "HP Buff + Shield Buff",
	BODY: shieldBuffBodyStats[1],
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		},
	],
}
Class.trackerSnowdread = { // FOV
	PARENT: "genericPentanoughtSnowdread",
	LABEL: "Tracker",
	UPGRADE_TOOLTIP: "FOV Boost",
	BODY: {
		FOV: 1.4,
		SPEED: 0.85
	},
	TURRETS: [
		{
			POSITION: [14, 0, 0, 180, 0, 1],
			TYPE: ["pentagon", {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}],
		}, {
			POSITION: [20, 0, 0, 0, 0, 1],
			TYPE: ["pentagonBaseDeco"],
		}, {
			POSITION: [11, 0, 0, 180, 0, 1],
			TYPE: ["egg", {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 5}, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [7.5, 0, 0, 180, 0, 1],
			TYPE: ["egg", {COLOR: -1, MIRROR_MASTER_ANGLE: true}],
		}, {
			POSITION: [15.5, 0, 0, 0, 360, 1],
			TYPE: 'trackerRadarSnowdread'
		},
	],
}

Class.addons.UPGRADES_TIER_0.push("dreadSnowdread");
	Class.dreadSnowdread.UPGRADES_TIER_0 = [
		["sword2Snowdread", "dreadBodySnowdread",],
		["pacifier2Snowdread", "dreadBodySnowdread"],
		["peacekeeper2Snowdread", "dreadBodySnowdread"],
		["invader2Snowdread", "dreadBodySnowdread"],
		["centaur2Snowdread", "dreadBodySnowdread"],
	];

	Class.sword2Snowdread.UPGRADES_TIER_0 = ["swordSnowdread"];
	Class.pacifier2Snowdread.UPGRADES_TIER_0 = ["pacifierSnowdread"];
	Class.peacekeeper2Snowdread.UPGRADES_TIER_0 = ["peacekeeperSnowdread"];
	Class.invader2Snowdread.UPGRADES_TIER_0 = ["invaderSnowdread"];
	Class.centaur2Snowdread.UPGRADES_TIER_0 = ["centaurSnowdread"];

	Class.dreadWeaponSnowdread.UPGRADES_TIER_0 = ["swordSnowdread", "pacifierSnowdread", "peacekeeperSnowdread", "invaderSnowdread", "centaurSnowdread"];

		Class.swordSnowdread.UPGRADES_TIER_0 = ["gladiusSnowdread", "sabreSnowdread", "slingSnowdread", "catapultSnowdread", "dartSnowdread"];
			Class.gladiusSnowdread.UPGRADES_TIER_0 = ["bladeSnowdread"];
				Class.bladeSnowdread.UPGRADES_TIER_0 = ["rapierSnowdread"];
			Class.sabreSnowdread.UPGRADES_TIER_0 = ["bayonetSnowdread"];
				Class.bayonetSnowdread.UPGRADES_TIER_0 = ["javelinSnowdread"];
			Class.slingSnowdread.UPGRADES_TIER_0 = ["atlatlSnowdread"];
				Class.atlatlSnowdread.UPGRADES_TIER_0 = ["woomeraSnowdread"];
			Class.catapultSnowdread.UPGRADES_TIER_0 = ["ballistaSnowdread"];
				Class.ballistaSnowdread.UPGRADES_TIER_0 = ["trebuchetSnowdread"];
			Class.dartSnowdread.UPGRADES_TIER_0 = ["barbSnowdread"];
				Class.barbSnowdread.UPGRADES_TIER_0 = ["boltSnowdread"];

		Class.pacifierSnowdread.UPGRADES_TIER_0 = ["mediatorSnowdread", "negotiatorSnowdread", "melderSnowdread", "crackerSnowdread", "grabberSnowdread"];
			Class.mediatorSnowdread.UPGRADES_TIER_0 = ["mitigatorSnowdread"];
				Class.mitigatorSnowdread.UPGRADES_TIER_0 = ["diplomatSnowdread"];
			Class.negotiatorSnowdread.UPGRADES_TIER_0 = ["appeaserSnowdread"];
				Class.appeaserSnowdread.UPGRADES_TIER_0 = ["arbitratorSnowdread"];
			Class.melderSnowdread.UPGRADES_TIER_0 = ["amalgamSnowdread"];
				Class.amalgamSnowdread.UPGRADES_TIER_0 = ["dissolverSnowdread"];
			Class.crackerSnowdread.UPGRADES_TIER_0 = ["breakerSnowdread"];
				Class.breakerSnowdread.UPGRADES_TIER_0 = ["eroderSnowdread"];
			Class.grabberSnowdread.UPGRADES_TIER_0 = ["clasperSnowdread"];
				Class.clasperSnowdread.UPGRADES_TIER_0 = ["gripperSnowdread"];

		Class.peacekeeperSnowdread.UPGRADES_TIER_0 = ["enforcerSnowdread", "executorSnowdread", "doserSnowdread", "swirlSnowdread", "pelterSnowdread"];
			Class.enforcerSnowdread.UPGRADES_TIER_0 = ["suppressorSnowdread"];
				Class.suppressorSnowdread.UPGRADES_TIER_0 = ["retardantSnowdread"];
			Class.executorSnowdread.UPGRADES_TIER_0 = ["inhibitorSnowdread"];
				Class.inhibitorSnowdread.UPGRADES_TIER_0 = ["tyrantSnowdread"];
			Class.doserSnowdread.UPGRADES_TIER_0 = ["tranquilizerSnowdread"];
				Class.tranquilizerSnowdread.UPGRADES_TIER_0 = ["anesthesiologistSnowdread"];
			Class.swirlSnowdread.UPGRADES_TIER_0 = ["spiralSnowdread"];
				Class.spiralSnowdread.UPGRADES_TIER_0 = ["helixSnowdread"];
			Class.pelterSnowdread.UPGRADES_TIER_0 = ["shellerSnowdread"];
				Class.shellerSnowdread.UPGRADES_TIER_0 = ["bombardmentSnowdread"];

		Class.invaderSnowdread.UPGRADES_TIER_0 = ["inquisitorSnowdread", "assailantSnowdread", "radiationSnowdread", "boxerSnowdread", "disablerSnowdread"];
			Class.inquisitorSnowdread.UPGRADES_TIER_0 = ["infiltratorSnowdread"];
				Class.infiltratorSnowdread.UPGRADES_TIER_0 = ["raiderSnowdread"];
			Class.assailantSnowdread.UPGRADES_TIER_0 = ["aggressorSnowdread"];
				Class.aggressorSnowdread.UPGRADES_TIER_0 = ["gladiatorSnowdread"];
			Class.radiationSnowdread.UPGRADES_TIER_0 = ["haloSnowdread"];
				Class.haloSnowdread.UPGRADES_TIER_0 = ["starlightSnowdread"];
			Class.boxerSnowdread.UPGRADES_TIER_0 = ["sluggerSnowdread"];
				Class.sluggerSnowdread.UPGRADES_TIER_0 = ["bruiserSnowdread"];
			Class.disablerSnowdread.UPGRADES_TIER_0 = ["debilitatorSnowdread"];
				Class.debilitatorSnowdread.UPGRADES_TIER_0 = ["incapacitatorSnowdread"];

		Class.centaurSnowdread.UPGRADES_TIER_0 = ["daemonSnowdread", "minotaurSnowdread", "cleanerSnowdread", "shadeSnowdread", "screwdriverSnowdread"];
			Class.daemonSnowdread.UPGRADES_TIER_0 = ["hydraSnowdread"];
				Class.hydraSnowdread.UPGRADES_TIER_0 = ["cerberusSnowdread"];
			Class.minotaurSnowdread.UPGRADES_TIER_0 = ["beelzebubSnowdread"];
				Class.beelzebubSnowdread.UPGRADES_TIER_0 = ["luciferSnowdread"];
			Class.cleanerSnowdread.UPGRADES_TIER_0 = ["sweeperSnowdread"];
				Class.sweeperSnowdread.UPGRADES_TIER_0 = ["sterilizerSnowdread"];
			Class.shadeSnowdread.UPGRADES_TIER_0 = ["aegisSnowdread"];
				Class.aegisSnowdread.UPGRADES_TIER_0 = ["hielamanSnowdread"];
			Class.screwdriverSnowdread.UPGRADES_TIER_0 = ["drillSnowdread"];
				Class.drillSnowdread.UPGRADES_TIER_0 = ["jackhammerSnowdread"];

	Class.dreadBodySnowdread.UPGRADES_TIER_0 = ["byteSnowdread", "showerSnowdread", "atmosphereSnowdread", "juggernautSnowdread", "spotterSnowdread"];

		Class.byteSnowdread.UPGRADES_TIER_0 = ["automationSnowdread", "kilobyteSnowdread", "lighterSnowdread"];

			Class.automationSnowdread.UPGRADES_TIER_0 = ["mechanismSnowdread", "fusionSnowdread", "binarySnowdread", "exosphereSnowdread", "burgSnowdread", "batonSnowdread"];
				Class.mechanismSnowdread.UPGRADES_TIER_0 = ["skynetSnowdread"];
					Class.skynetSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("skynetSnowdread");
				Class.fusionSnowdread.UPGRADES_TIER_0 = ["supernovaSnowdread"];
					Class.supernovaSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("supernovaSnowdread");
				Class.binarySnowdread.UPGRADES_TIER_0 = ["cipherSnowdread"];
					Class.cipherSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("cipherSnowdread");
				Class.exosphereSnowdread.UPGRADES_TIER_0 = ["interstellarSnowdread"];
					Class.interstellarSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("interstellarSnowdread");
				Class.burgSnowdread.UPGRADES_TIER_0 = ["bunkerSnowdread"];
					Class.bunkerSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("bunkerSnowdread");
				Class.batonSnowdread.UPGRADES_TIER_0 = ["maceSnowdread"];
					Class.maceSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("maceSnowdread");

			Class.kilobyteSnowdread.UPGRADES_TIER_0 = ["megabyteSnowdread", "binarySnowdread", "trojanSnowdread", "hardwareSnowdread", "siloSnowdread", "fireworkSnowdread"];
				Class.megabyteSnowdread.UPGRADES_TIER_0 = ["gigabyteSnowdread"];
					Class.gigabyteSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("gigabyteSnowdread");
				// Class.binarySnowdread.UPGRADES_TIER_0 = ["cipherSnowdread"];
				Class.trojanSnowdread.UPGRADES_TIER_0 = ["malwareSnowdread"];
					Class.malwareSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("malwareSnowdread");
				Class.hardwareSnowdread.UPGRADES_TIER_0 = ["softwareSnowdread"];
					Class.softwareSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("softwareSnowdread");
				Class.siloSnowdread.UPGRADES_TIER_0 = ["arsenalSnowdread"];
					Class.arsenalSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("arsenalSnowdread");
				Class.fireworkSnowdread.UPGRADES_TIER_0 = ["missileSnowdread"];
					Class.missileSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("missileSnowdread");
				
			Class.lighterSnowdread.UPGRADES_TIER_0 = ["burnerSnowdread"];
				Class.burnerSnowdread.UPGRADES_TIER_0 = ["roasterSnowdread"];
					Class.roasterSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("roasterSnowdread");

		Class.showerSnowdread.UPGRADES_TIER_0 = ["stormSnowdread"];
			Class.stormSnowdread.UPGRADES_TIER_0 = ["tempestSnowdread"];
				Class.tempestSnowdread.UPGRADES_TIER_0 = ["monsoonSnowdread"];
					Class.monsoonSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("monsoonSnowdread");

		Class.atmosphereSnowdread.UPGRADES_TIER_0 = ["coronaSnowdread", "thermosphereSnowdread"];

			Class.coronaSnowdread.UPGRADES_TIER_0 = ["chromosphereSnowdread", "fusionSnowdread", "trojanSnowdread", "planetSnowdread", "sirenSnowdread", "flintSnowdread"];
				Class.chromosphereSnowdread.UPGRADES_TIER_0 = ["photosphereSnowdread"];
					Class.photosphereSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("photosphereSnowdread");
				// Class.fusionSnowdread.UPGRADES_TIER_0 = ["supernovaSnowdread"];
				// Class.trojanSnowdread.UPGRADES_TIER_0 = ["malwareSnowdread"];
				Class.planetSnowdread.UPGRADES_TIER_0 = ["astronomicSnowdread"];
					Class.astronomicSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("astronomicSnowdread");
				Class.sirenSnowdread.UPGRADES_TIER_0 = ["valrayvnSnowdread"];
					Class.valrayvnSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("valrayvnSnowdread");
				Class.flintSnowdread.UPGRADES_TIER_0 = ["obsidianSnowdread"];
					Class.obsidianSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("obsidianSnowdread");

			Class.thermosphereSnowdread.UPGRADES_TIER_0 = ["mesosphereSnowdread", "exosphereSnowdread", "hardwareSnowdread", "moonSnowdread", "harpySnowdread", "martensiteSnowdread"];
				Class.mesosphereSnowdread.UPGRADES_TIER_0 = ["stratosphereSnowdread"];
					Class.stratosphereSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("stratosphereSnowdread");
				// Class.exosphereSnowdread.UPGRADES_TIER_0 = ["interstellarSnowdread"];
				// Class.hardwareSnowdread.UPGRADES_TIER_0 = ["softwareSnowdread"];
				Class.moonSnowdread.UPGRADES_TIER_0 = ["grandioseSnowdread"];
					Class.grandioseSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("grandioseSnowdread");
				Class.harpySnowdread.UPGRADES_TIER_0 = ["pegasusSnowdread"];
					Class.pegasusSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("pegasusSnowdread");
				Class.martensiteSnowdread.UPGRADES_TIER_0 = ["austeniteSnowdread"];
					Class.austeniteSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("austeniteSnowdread");

		Class.juggernautSnowdread.UPGRADES_TIER_0 = ["jumboSnowdread", "colossusSnowdread", "brassSnowdread"];

			Class.jumboSnowdread.UPGRADES_TIER_0 = ["goliathSnowdread", "planetSnowdread", "moonSnowdread", "burgSnowdread", "siloSnowdread", "armadaSnowdread"];
				Class.goliathSnowdread.UPGRADES_TIER_0 = ["behemothSnowdread"];
					Class.behemothSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("behemothSnowdread");
				// Class.planetSnowdread.UPGRADES_TIER_0 = ["astronomicSnowdread"];
				// Class.moonSnowdread.UPGRADES_TIER_0 = ["grandioseSnowdread"];
				// Class.burgSnowdread.UPGRADES_TIER_0 = ["bunkerSnowdread"];
				// Class.siloSnowdread.UPGRADES_TIER_0 = ["arsenalSnowdread"];
				Class.armadaSnowdread.UPGRADES_TIER_0 = ["battalionSnowdread"];
					Class.battalionSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("battalionSnowdread");

			Class.colossusSnowdread.UPGRADES_TIER_0 = ["titanSnowdread", "sirenSnowdread", "harpySnowdread", "batonSnowdread", "fireworkSnowdread", "armadaSnowdread"];
				Class.titanSnowdread.UPGRADES_TIER_0 = ["leviathanSnowdread"];
					Class.leviathanSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("leviathanSnowdread");
				// Class.sirenSnowdread.UPGRADES_TIER_0 = ["valrayvnSnowdread"];
				// Class.harpySnowdread.UPGRADES_TIER_0 = ["pegasusSnowdread"];
				// Class.batonSnowdread.UPGRADES_TIER_0 = ["maceSnowdread"];
				// Class.fireworkSnowdread.UPGRADES_TIER_0 = ["missileSnowdread"];
				// Class.armadaSnowdread.UPGRADES_TIER_0 = ["battalionSnowdread"];

			Class.brassSnowdread.UPGRADES_TIER_0 = ["steelSnowdread", "flintSnowdread", "martensiteSnowdread", "ceramicSnowdread", "tungstenSnowdread", "diamondSnowdread"];
				Class.steelSnowdread.UPGRADES_TIER_0 = ["titaniumSnowdread"];
					Class.titaniumSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("titaniumSnowdread");
				// Class.flintSnowdread.UPGRADES_TIER_0 = ["obsidianSnowdread"];
				// Class.martensiteSnowdread.UPGRADES_TIER_0 = ["austeniteSnowdread"];
				Class.ceramicSnowdread.UPGRADES_TIER_0 = ["carbideSnowdread"];
					Class.carbideSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("carbideSnowdread");
				Class.tungstenSnowdread.UPGRADES_TIER_0 = ["osmiumSnowdread"];
					Class.osmiumSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("osmiumSnowdread");
				Class.diamondSnowdread.UPGRADES_TIER_0 = ["grapheneSnowdread"];
					Class.grapheneSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("grapheneSnowdread");

		Class.spotterSnowdread.UPGRADES_TIER_0 = ["spySnowdread"];
			Class.spySnowdread.UPGRADES_TIER_0 = ["monitorSnowdread"];
				Class.monitorSnowdread.UPGRADES_TIER_0 = ["trackerSnowdread"];
					Class.trackerSnowdread.UPGRADES_TIER_0 = makeHexnoughtBodyV2("trackerSnowdread");

const hexDreadNames = {
	Javelin: {
		Javelin: 'Javelin',
		Rapier: 'Lance',
		Woomera: 'Shikari',
		Trebuchet: 'Ballista',
		Bolt: 'Tomahawk',
		Diplomat: 'Envoy',
		Arbitrator: 'Cutlass',
		Dissolver: 'Hellfire',
		Eroder: 'Partisan',
		Gripper: 'Encircler',
		Retardant: 'Rebel',
		Tyrant: 'Autocrat',
		Anesthesiologist: 'Patriot',
		Helix: 'Stinger',
		Bombardment: 'Downpour',
		Raider: 'Pirate',
		Gladiator: 'Pillager',
		Starlight: 'Hornet',
		Bruiser: 'Felon',
		Incapacitator: 'Stretcher',
		Cerberus: 'Argonaut',
		Lucifer: 'Kitsune',
		Sterilizer: 'Mastermind',
		Hielaman: 'Swordsman', 
		Jackhammer: 'Fissure',
	},
	Rapier: {
		Rapier: 'Rapier',
		Woomera: 'Cavalier',
		Trebuchet: 'Katana',
		Bolt: 'Claymore',
		Diplomat: 'Emissary',
		Arbitrator: 'Umpire',
		Dissolver: 'Relocator',
		Eroder: 'Debris',
		Gripper: 'Interrogator',
		Retardant: 'Impeder',
		Tyrant: 'Oppressor',
		Anesthesiologist: 'Slumberer',
		Helix: 'Vortex',
		Bombardment: 'Butcher',
		Raider: 'Bandit',
		Gladiator: 'Injurer',
		Starlight: 'Radiance',
		Bruiser: 'Ringster',
		Incapacitator: 'Swamper',
		Cerberus: 'Cyclops',
		Lucifer: 'Damocles',
		Sterilizer: 'Sanitizer',
		Hielaman: 'Escutcheon', 
		Jackhammer: 'Borer',
	},
	Woomera: {
		Woomera: 'Woomera',
		Trebuchet: 'Cannonball',
		Bolt: 'Piercer', // Soap
		Diplomat: 'Contractor',
		Arbitrator: 'Spirit',
		Dissolver: 'Venom',
		Eroder: 'Decomposer',
		Gripper: 'Crucifier',
		Retardant: 'Overrunner',
		Tyrant: 'Revolutionary',
		Anesthesiologist: 'Guerilla',
		Helix: 'Cultivator',
		Bombardment: 'Incendiary',
		Raider: 'Dispatcher', // Soap
		Gladiator: 'Pugilist',
		Starlight: 'Starborne',
		Bruiser: 'Soldier',
		Incapacitator: 'Scavenger', // Soap
		Cerberus: 'Poltergeist',
		Lucifer: 'Hunkerer',
		Sterilizer: 'Janitor',
		Hielaman: 'Reinforcer', 
		Jackhammer: 'Pyroclastic',
	},
	Trebuchet: {
		Trebuchet: 'Trebuchet',
		Bolt: 'Archer',
		Diplomat: 'Sherman',
		Arbitrator: 'Ultimatum',
		Dissolver: 'Grapeshot',
		Eroder: 'Shrapnel',
		Gripper: 'Razer',
		Retardant: 'Mangonel',
		Tyrant: 'Incarcerator', // Zenphia
		Anesthesiologist: 'Evacuator',
		Helix: 'Hurricane',
		Bombardment: 'Surrenderer',
		Raider: 'Capitulator',
		Gladiator: 'Uprising',
		Starlight: 'Magnetar',
		Bruiser: 'Crumpler',
		Incapacitator: 'Pinner',
		Cerberus: 'Phantom', // Umbra
		Lucifer: 'Sisyphus',
		Sterilizer: 'Operation',
		Hielaman: 'Entrencher', 
		Jackhammer: 'Demolitionist',
	},
	Bolt: {
		Bolt: 'Bolt',
		Diplomat: 'Informant',
		Arbitrator: 'Assaulter',
		Dissolver: 'Sprinter',
		Eroder: 'Discharger', // Soap
		Gripper: 'Lightning',
		Retardant: 'Evicter',
		Tyrant: 'Minister',
		Anesthesiologist: 'Ambusher',
		Helix: 'Ultraviolet',
		Bombardment: 'Dynamo',
		Raider: 'Infector',
		Gladiator: 'Blinder',
		Starlight: 'Neutrino',
		Bruiser: 'Impactor',
		Incapacitator: 'Volt',
		Cerberus: 'Collapse',
		Lucifer: 'Barycenter',
		Sterilizer: 'Greenhouse',
		Hielaman: 'Nebula', 
		Jackhammer: 'Archaeologist',
	},
	Diplomat: {
		Diplomat: 'Diplomat',
		Arbitrator: 'Moderator',
		Dissolver: 'Impaler', // Soap
		Eroder: 'Vulcan',
		Gripper: 'Politician',
		Retardant: 'Insurgent',
		Tyrant: 'Dictator',
		Anesthesiologist: 'Transporter',
		Helix: 'Signature',
		Bombardment: 'Berserker', // Soap
		Raider: 'Marauder',
		Gladiator: 'Champion',
		Starlight: 'Comet',
		Bruiser: 'Ambassador',
		Incapacitator: 'Erebus', // Yharon
		Cerberus: 'Orion',
		Lucifer: 'Manticore',
		Sterilizer: 'Officer',
		Hielaman: 'Investigator', 
		Jackhammer: 'Devourer', // Soap
	},
	Arbitrator: {
		Arbitrator: 'Arbitrator',
		Dissolver: 'Bargainer',
		Eroder: 'Stipulator',
		Gripper: 'Adjudicator',
		Retardant: 'Extinguisher',
		Tyrant: 'Shogun',
		Anesthesiologist: 'Brute',
		Helix: 'Referee',
		Bombardment: 'Jury',
		Raider: 'Buccaneer',
		Gladiator: 'Warrior',
		Starlight: 'Genesis', // Siece
		Bruiser: 'Terminator', // Soap
		Incapacitator: 'Debater',
		Cerberus: 'Gorgon',
		Lucifer: 'Keres',
		Sterilizer: 'Warden',
		Hielaman: 'Crusader', 
		Jackhammer: 'Excavator',
	},
	Dissolver: {
		Dissolver: 'Dissolver',
		Eroder: 'Current',
		Gripper: 'Patronizer',
		Retardant: 'Corroder',
		Tyrant: 'Throne',
		Anesthesiologist: 'Neurotoxin',
		Helix: 'Solution',
		Bombardment: 'Chlorine',
		Raider: 'Traitor',
		Gladiator: 'Abolitionist',
		Starlight: 'Accretion',
		Bruiser: 'Piranha',
		Incapacitator: 'Sandstorm',
		Cerberus: 'Appalachian',
		Lucifer: 'Styx',
		Sterilizer: 'Peroxide',
		Hielaman: 'Frontier', 
		Jackhammer: 'Fracker',
	},
	Eroder: {
		Eroder: 'Eroder',
		Gripper: 'Psychologist',
		Retardant: 'Shatterer',
		Tyrant: 'Crackdown',
		Anesthesiologist: 'Torrent',
		Helix: 'Tornado',
		Bombardment: 'Backstabber',
		Raider: 'Militant', // Umbra
		Gladiator: 'Vitrifier',
		Starlight: 'Stardust',
		Bruiser: 'Gasher', // Soap
		Incapacitator: 'Lacerator', // Soap
		Cerberus: 'Inevitability',
		Lucifer: 'Fragment',
		Sterilizer: 'Cynic',
		Hielaman: 'Polisher', 
		Jackhammer: 'Hoser',
	},
	Gripper: {
		Gripper: 'Gripper',
		Retardant: 'Arrestor',
		Tyrant: 'Tormentor', // Soap
		Anesthesiologist: 'Experimenter',
		Helix: 'Blockader',
		Bombardment: 'Striker',
		Raider: 'Warmongerer', // Umbra
		Gladiator: 'Throwdown',
		Starlight: 'Cryogen',
		Bruiser: 'Knockout',
		Incapacitator: 'Restrainer',
		Cerberus: 'Prometheus',
		Lucifer: 'Mortician',
		Sterilizer: 'Cleanser',
		Hielaman: 'Periscope', 
		Jackhammer: 'Vice',
	},
	Retardant: {
		Retardant: 'Retardant',
		Tyrant: 'Anarchist',
		Anesthesiologist: 'Buckshot', // Soap
		Helix: 'Magnetron',
		Bombardment: 'Sergeant',
		Raider: 'Freebooter',
		Gladiator: 'Combatant',
		Starlight: 'Apparition',
		Bruiser: 'Executioner', // Soap
		Incapacitator: 'Smotherer',
		Cerberus: 'Gigantes',
		Lucifer: 'Demogorgon',
		Sterilizer: 'Fumigator',
		Hielaman: 'Avalanche', 
		Jackhammer: 'Propagator',
	},
	Tyrant: {
		Tyrant: 'Tyrant',
		Anesthesiologist: 'Barbarian',
		Helix: 'Nautilus',
		Bombardment: 'Admiral',
		Raider: 'Corsair',
		Gladiator: 'Amazon',
		Starlight: 'Theocrat',
		Bruiser: 'Authoritarian',
		Incapacitator: 'Jailkeeper',
		Cerberus: 'Ouroboros',
		Lucifer: 'Raiju',
		Sterilizer: 'Purifier',
		Hielaman: 'Protectorate', 
		Jackhammer: 'Detailer',
	},
	Anesthesiologist: {
		Anesthesiologist: 'Anesthesiologist',
		Helix: 'Blizzard',
		Bombardment: 'Nightmare',
		Raider: 'Vaccinator',
		Gladiator: 'Harbinger', // Siece
		Starlight: 'Hypnotizer',
		Bruiser: 'Tactician',
		Incapacitator: 'Psychic', // Soap
		Cerberus: 'Revenant',
		Lucifer: 'Rehabilitator',
		Sterilizer: 'Pestilence',
		Hielaman: 'Heater', 
		Jackhammer: 'Sledgehammer',
	},
	Helix: {
		Helix: 'Helix',
		Bombardment: 'Derecho',
		Raider: 'Deliverer',
		Gladiator: 'Constrictor',
		Starlight: 'Orbit',
		Bruiser: 'Cobra',
		Incapacitator: 'Windfall',
		Cerberus: 'Viper',
		Lucifer: 'Taipan',
		Sterilizer: 'Networker',
		Hielaman: 'Turbine', 
		Jackhammer: 'Spindler',
	},
	Bombardment: {
		Bombardment: 'Bombardment',
		Raider: 'Specialist',
		Gladiator: 'Leonidas',
		Starlight: 'Meteor',
		Bruiser: 'Grenadier',
		Incapacitator: 'Shellshocker',
		Cerberus: 'Deluge',
		Lucifer: 'Containment',
		Sterilizer: 'Haven',
		Hielaman: 'Ballistic', 
		Jackhammer: 'Mallet', // Soap
	},
	Raider: {
		Raider: 'Raider',
		Gladiator: 'Filibuster',
		Starlight: 'Colonizer',
		Bruiser: 'Plunderer', // Umbra
		Incapacitator: 'Blitzkrieg',
		Cerberus: 'Wyvern',
		Lucifer: 'Kraken',
		Sterilizer: 'Splatterer',
		Hielaman: 'Strategist', 
		Jackhammer: 'Extractor',
	},
	Gladiator: {
		Gladiator: 'Gladiator',
		Starlight: 'Enveloper',
		Bruiser: 'Fistfighter',
		Incapacitator: 'Overloader', // Umbra
		Cerberus: 'Ogre',
		Lucifer: 'Wendigo',
		Sterilizer: 'Garrison', // Umbra
		Hielaman: 'Uziel', // Zenphia
		Jackhammer: 'Warlord',
	},
	Starlight: {
		Starlight: 'Starlight',
		Bruiser: 'Wanderer',
		Incapacitator: 'Starstruck',
		Cerberus: 'Constellation',
		Lucifer: 'Galaxy',
		Sterilizer: 'Evaporator',
		Hielaman: 'Protostar', 
		Jackhammer: 'Illuminator',
	},
	Bruiser: {
		Bruiser: 'Bruiser',
		Incapacitator: 'Mauler',
		Cerberus: 'Serpent',
		Lucifer: 'Trident',
		Sterilizer: 'Suture',
		Hielaman: 'Heavyweight', 
		Jackhammer: 'Stapler',
	},
	Incapacitator: {
		Incapacitator: 'Incapacitator',
		Cerberus: 'Opportunist',
		Lucifer: 'Condemner',
		Sterilizer: 'Poisoner',
		Hielaman: 'Eyrie', 
		Jackhammer: 'Thrasher', // Soap
	},
	Cerberus: {
		Cerberus: 'Cerberus',
		Lucifer: 'Oni',
		Sterilizer: 'Antibody',
		Hielaman: 'Typhon', 
		Jackhammer: 'Paver',
	},
	Lucifer: {
		Lucifer: 'Lucifer',
		Sterilizer: 'Lipid',
		Hielaman: 'Insulator', 
		Jackhammer: 'Earthquaker',
	},
	Sterilizer: {
		Sterilizer: 'Sterilizer',
		Hielaman: 'Homeland', 
		Jackhammer: 'Bulldozer',
	},
	Hielaman: {
		Hielaman: 'Hielaman', 
		Jackhammer: 'Compactor',
	},
	Jackhammer: {
		Jackhammer: 'Jackhammer',
	},
};

function mergeHexnoughtWeaponV2(weapon1, weapon2) {
	weapon1 = ensureIsClass(weapon1);
	weapon2 = ensureIsClass(weapon2);

	let PARENT = "genericHexnoughtSnowdread",
		BODY = hexnoughtBody,
		GUNS = [],
		gunsOnOneSide = [],
		weapon2GunsOnOneSide = [],
		TURRETS = [],
		turretsOnOneSide = [],
		weapon2TurretsOnOneSide = [],
		CONTROLLERS = weapon2.CONTROLLERS,
		TOOLTIP,
		UPGRADE_TOOLTIP = weapon1.UPGRADE_TOOLTIP + " + " + weapon2.UPGRADE_TOOLTIP;

	// Label
	let name1 = hexDreadNames[weapon1.LABEL][weapon2.LABEL],
		name2 = hexDreadNames[weapon2.LABEL][weapon1.LABEL],
		weaponName = weapon1.LABEL + weapon2.LABEL,
		orientationId = 0;
	if (name1) {
		weaponName = name1;
	} else if (name2) {
		weaponName = name2,
		orientationId = 1;
	}
	let LABEL = weaponName,
		className = weapon1.LABEL.toLowerCase() + weapon2.LABEL + orientationId + "Snowdread";
	
	// Tooltip
	if (weapon1.TOOLTIP) TOOLTIP = weapon1.TOOLTIP + " ";
	if (weapon2.TOOLTIP && weapon1.LABEL != weapon2.LABEL) TOOLTIP += weapon2.TOOLTIP;

	// Upgrade Tooltip
	if (weapon1.LABEL == weapon2.LABEL) UPGRADE_TOOLTIP = weapon1.UPGRADE_TOOLTIP;
	
	// Guns ----------------------
	if (weapon1.GUNS) gunsOnOneSide.push(...JSON.parse(JSON.stringify(weapon1.GUNS.slice(0, weapon1.GUNS.length / 5))));
	if (weapon2.GUNS) weapon2GunsOnOneSide = JSON.parse(JSON.stringify(weapon2.GUNS.slice(0, weapon2.GUNS.length / 5)));

	for (let g in weapon2GunsOnOneSide) weapon2GunsOnOneSide[g].POSITION[5] += 60;
	gunsOnOneSide.push(...weapon2GunsOnOneSide)

	// Turrets -------------------
	if (weapon1.TURRETS) turretsOnOneSide.push(...JSON.parse(JSON.stringify(weapon1.TURRETS.slice(0, weapon1.TURRETS.length / 5))));
	if (weapon2.TURRETS) weapon2TurretsOnOneSide = JSON.parse(JSON.stringify(weapon2.TURRETS.slice(0, weapon2.TURRETS.length / 5)));

	for (let t in weapon2TurretsOnOneSide) weapon2TurretsOnOneSide[t].POSITION[3] += 60;
	turretsOnOneSide.push(...weapon2TurretsOnOneSide)

	// Scale to fit size constraints
	for (let g in gunsOnOneSide) {
		// Scales X and length instead of Y and width if the gun is sideways, only needed for trebuchet
		let isTrebuchetSpecial = Math.abs(gunsOnOneSide[g].POSITION[5]) == 90 || gunsOnOneSide[g].POSITION[5] == 150 || gunsOnOneSide[g].POSITION[5] == -30;
		let offset = 0;
		if (isTrebuchetSpecial) {
			offset = -1
		}
		gunsOnOneSide[g].POSITION[1 + offset] *= hexnoughtScaleFactor ** 2;
		gunsOnOneSide[g].POSITION[4 + offset] *= hexnoughtScaleFactor ** 2;
	}

	for (let t in turretsOnOneSide) {
		turretsOnOneSide[t].POSITION[0] *= hexnoughtScaleFactor ** 2;
	}

	for (let i = 0; i < 3; i++) {
		for (let g in gunsOnOneSide) {
			let gun = JSON.parse(JSON.stringify(gunsOnOneSide[g]));
			gun.POSITION[5] += 120 * i;
			GUNS.push(gun);
		}
		for (let t in turretsOnOneSide) {
			let turret = JSON.parse(JSON.stringify(turretsOnOneSide[t]));
			turret.POSITION[3] += 120 * i;
			TURRETS.push(turret);
		}
	};

	// Gladiator
	if (weapon1.LABEL == "Gladiator" || weapon2.LABEL == "Gladiator") {
		let droneSpawnerIndex = 0
		for (let g in GUNS) {
			let gun = GUNS[g];
			if (gun.PROPERTIES && gun.PROPERTIES.TYPE == "gladiatorTritankMinionSnowdread") {
				switch (droneSpawnerIndex) {
					case 1:
						gun.PROPERTIES.TYPE = "gladiatorTritrapMinionSnowdread";
						break;
					case 2:
						gun.PROPERTIES.TYPE = "gladiatorTriswarmMinionSnowdread";
						break;
					case 3:
						gun.PROPERTIES.TYPE = "gladiatorAutoMinionSnowdread";
						break;
					case 4:
						gun.PROPERTIES.TYPE = "gladiatorAuraMinionSnowdread";
						break;
					case 5:
						gun.PROPERTIES.TYPE = "gladiatorHealAuraMinionSnowdread";
						break;
				}
				droneSpawnerIndex++;
			}
		}
	}
	
	// Body stat modification
	if (weapon1.BODY) for (let m in weapon1.BODY) BODY[m] *= weapon1.BODY[m];
	if (weapon2.BODY) for (let m in weapon2.BODY) BODY[m] *= weapon2.BODY[m];

	// Smash it together
	Class[className] = {
		PARENT, BODY, LABEL, TOOLTIP, UPGRADE_TOOLTIP, GUNS, TURRETS, CONTROLLERS
	};
	return className;
}

function makeHexnoughtBodyV2(body) {
	if (!buildHexnoughts) return [];
	
	body = ensureIsClass(body);

	let PARENT = "genericHexnoughtSnowdread",
		BODY = {},
		GUNS = body.GUNS ?? [],
		TURRETS = [],
		LABEL = body.LABEL,
		UPGRADE_TOOLTIP = body.UPGRADE_TOOLTIP;

	// Label
	let className = LABEL.toLowerCase() + "HexSnowdread";
	
	// Turrets --------------------
	let turretRingLoopLength = Math.floor(body.TURRETS.length / 5);

	// Turret adding
	for (let t = 0; t < body.TURRETS.length; t++) {
		let turret = body.TURRETS[t];
		if (turret.TYPE[0].indexOf('pentagon') >= 0) { // Replace pentagons with hexagons
			TURRETS.push(
				{
					POSITION: [turret.POSITION[0], 0, 0, turret.POSITION[3], turret.POSITION[4], turret.POSITION[5]],
					TYPE: ['hexagon' + turret.TYPE[0].substring(8), turret.TYPE[1] ?? {}],
				}
			);
		} else if (turret.POSITION[1]) { // Do whole turret loop at once
			for (let i = 0; i < turretRingLoopLength; i++) {
				for (let j = 0; j < 6; j++) {
					turret = body.TURRETS[t + i * 5 + 1];
					let displacement = (turret.POSITION[1] ** 2 + turret.POSITION[2] ** 2) ** 0.5 * hexnoughtScaleFactor ** 0.5;
					
					// Angle turrets but not auras
					let x, y, angle;
					if (turret.POSITION[3]) { 
						x = displacement;
						y = 0;
						angle = turret.POSITION[3] / 6 * 5 + 60 * j;
					} else {
						let theta = (turret.POSITION[3] / 6 * 5 - 30 + 60 * j) * Math.PI / 180;
						x = displacement * Math.cos(theta);
						y = displacement * Math.sin(theta);
						angle = 0;
					}
					TURRETS.push(
						{
							POSITION: [turret.POSITION[0] * hexnoughtScaleFactor, x, y, angle, turret.POSITION[4], turret.POSITION[5]],
							TYPE: turret.TYPE,
						}
					)
				}
			}
			t += 5 * turretRingLoopLength - 1;
		} else { // Centered turrets
			TURRETS.push(
				{
					POSITION: [turret.POSITION[0] * hexnoughtScaleFactor ** 0.5, 0, 0, turret.POSITION[3], turret.POSITION[4], turret.POSITION[5]],
					TYPE: turret.TYPE,
				}
			) 
		}
	}
	
	// Body stat modification
	if (body.BODY) for (let m in body.BODY) BODY[m] = body.BODY[m];

	// Smash it together
	Class[className] = {
		PARENT, BODY, LABEL, UPGRADE_TOOLTIP, GUNS, TURRETS,
	};
	return [className];
}

// Merge hexdreads
const pentanoughtWeapons = [
							"rapierSnowdread",     "javelinSnowdread",     "woomeraSnowdread",           "trebuchetSnowdread",  "boltSnowdread",
							"diplomatSnowdread",   "arbitratorSnowdread",  "dissolverSnowdread",         "eroderSnowdread",     "gripperSnowdread",
							"retardantSnowdread",  "tyrantSnowdread",      "anesthesiologistSnowdread",  "helixSnowdread",      "bombardmentSnowdread",
							"raiderSnowdread",     "gladiatorSnowdread",   "starlightSnowdread",         "bruiserSnowdread",    "incapacitatorSnowdread",
							"cerberusSnowdread",   "luciferSnowdread",     "sterilizerSnowdread",        "hielamanSnowdread",   "jackhammerSnowdread",
							];
if(buildHexnoughts) {
	for (let i of pentanoughtWeapons) {
		for (let j of pentanoughtWeapons) {
			util.forcePush(Class[i], 'UPGRADES_TIER_0', mergeHexnoughtWeaponV2(i, j));
		}
	}
}
