const { base } = require('../constants.js');
const g = require('../gunvals.js');

// Set the below variable to true to enable all of the snowDreads addons.
exports.enableSnowDreads = true;

if (!exports.enableSnowDreads) {
	return console.log('--- Snowdreads constants addon [snowDreadsConstants.js] is disabled. ---');
}

// Set the below variable to true to enable hex dreadnought building.
exports.buildHexnoughts = true;

// Set the below variable to true to enable photosphere with 10 auras instead of 6.
exports.useOldPhotosphere = false;

// For hexnought merging
exports.hexnoughtScaleFactor = 0.9;

// Missing stats
g.flame = {reload: 0.5, recoil: 0.1, shudder: 1.5, range: 0.5, spray: 7, damage: 2, health: 1/3, speed: 0.6, maxSpeed: 0.3};
g.honcho = {size: 2, damage: 2.5, health: 1.2, reload: 2, speed: 0.7};

// Body helpers
exports.hpBuffBodyStats = [
	{ HEALTH: 2.1, SHIELD: 2.1, REGEN: 2,   SPEED: 0.8  },
	{ HEALTH: 2.9, SHIELD: 2.9, REGEN: 2.2, SPEED: 0.65 },
	{ HEALTH: 3.5, SHIELD: 3.4, REGEN: 2.5, SPEED: 0.55 },
];
exports.speedBuffBodyStats = [
	{ SPEED: 1.95, HEALTH: 0.65 },
	{ SPEED: 2.3,  HEALTH: 0.5  },
	{ SPEED: 2.55, HEALTH: 0.35 },
];
exports.sizeBuffBodyStats = [
	{ SPEED: 0.9,  HEALTH: 2   },
	{ SPEED: 0.85, HEALTH: 2.4 },
	{ SPEED: 0.8,  HEALTH: 2.8 },
];

// Body stats
exports.eggnoughtBody = {
    SPEED: base.SPEED * 0.8,
    HEALTH: base.HEALTH * 1.75,
	SHIELD: base.SHIELD * 1.5,
	REGEN: base.REGEN * 1.5,
    FOV: base.FOV,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 1.5,
};
exports.squarenoughtBody = {
    SPEED: base.SPEED * 0.675,
    HEALTH: base.HEALTH * 2.5,
	SHIELD: base.SHIELD * 2,
	REGEN: base.REGEN * 2,
    FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 2,
};
exports.trinoughtBody = {
    SPEED: base.SPEED * 0.55,
    HEALTH: base.HEALTH * 3.5,
	SHIELD: base.SHIELD * 2.5,
	REGEN: base.REGEN * 2.5,
    FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 2.5,
};
exports.pentanoughtBody = {
    SPEED: base.SPEED * 0.425,
    HEALTH: base.HEALTH * 4.25,
	SHIELD: base.SHIELD * 3,
	REGEN: base.REGEN * 3,
    FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 3,
};
exports.hexnoughtBody = {
    SPEED: base.SPEED * 0.3,
    HEALTH: base.HEALTH * 5,
	SHIELD: base.SHIELD * 3.5,
	REGEN: base.REGEN * 3.5,
    FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 3.5,
};
