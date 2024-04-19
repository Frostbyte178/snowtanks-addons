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
	{ HEALTH: 1.5,  SPEED: 1.2,  SHIELD: 1.6,  REGEN: 1.3  },
	{ HEALTH: 1.8,  SPEED: 1.33, SHIELD: 1.95, REGEN: 1.45 },
	{ HEALTH: 2.05, SPEED: 1.45, SHIELD: 2.2,  REGEN: 1.6  },
	{ HEALTH: 2.3,  SPEED: 1.55, SHIELD: 2.5,  REGEN: 1.7  },
];
exports.speedBuffBodyStats = [
	{ HEALTH: 0.65, SPEED: 2.1,  SHIELD: 0.75, REGEN: 1   },
	{ HEALTH: 0.55, SPEED: 2.45, SHIELD: 0.65, REGEN: 0.9 },
	{ HEALTH: 0.45, SPEED: 2.75, SHIELD: 0.5,  REGEN: 0.8 },
];
exports.shieldBuffBodyStats = [
	{ HEALTH: 1.2,  SPEED: 1.45, SHIELD: 2.2,  REGEN: 1.7 },
	{ HEALTH: 1.4,  SPEED: 1.6,  SHIELD: 2.85, REGEN: 1.9 },
	{ HEALTH: 1.55, SPEED: 1.72, SHIELD: 3.45, REGEN: 2.1 },
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
