const { combineStats } = require('../../facilitators.js');
const { gunCalcNames } = require('../../constants.js');
const g = require('../../gunvals.js');
const { enableSnowDreads } = require('./snowDreadsConstants.js');

// Navigate to [snowDreadsConstants.js] and the "enableSnowDreads" variable to enable/disable this addon.
if (!enableSnowDreads) {
	return console.log('--- Snowdreads facilitators addon [snowDreadsFacilitators.js] is disabled. ---');
}

// Guns
exports.addRifle = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.sniper], isMusket = false) => {
	if (isMusket) {
		return [
			{
				POSITION: [length - 1, 1, aspect, x, y + width + 1, angle, 0],
				PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 22.5, SATURATION_SHIFT: 0.5 },}
			}, {
				POSITION: [length - 1, 1, aspect, x, y - width - 1, angle, 0],
				PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 22.5, SATURATION_SHIFT: 0.5 },}
			}, {
				POSITION: [4.5, width + 4, 0, x + length - 8, y + (width + 1) / 2, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
				}
			}, {
				POSITION: [4.5, width + 4, 0, x + length - 12, y + (width + 1) / 2, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
				}
			}, {
				POSITION: [4.5, width + 4, 0, x + length - 8, y - (width + 1) / 2, angle, delay + 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
				}
			}, {
				POSITION: [4.5, width + 4, 0, x + length - 12, y - (width + 1) / 2, angle, delay + 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
				}
			}, {
				POSITION: [length, width, aspect, x, y + (width + 1) / 2, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats(stats),
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 17.5, SATURATION_SHIFT: 0.65 },
					TYPE: "bullet",
				},
			}, {
				POSITION: [length, width, aspect, x, y - (width + 1) / 2, angle, delay + 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats(stats),
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 17.5, SATURATION_SHIFT: 0.65 },
					TYPE: "bullet",
				},
			}, {
				POSITION: [length - 2.5, width, aspect - 0.3, x, y + (width + 1) / 2, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 7.5, SATURATION_SHIFT: 0.65 },
					BORDERLESS: true
				}
			}, {
				POSITION: [length - 2.5, width, aspect - 0.3, x, y - (width + 1) / 2, angle, delay + 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 7.5, SATURATION_SHIFT: 0.65 },
					BORDERLESS: true
				}
			}, {
				POSITION: [length - 4.5, width * 1.5, aspect - 0.4, x, y, angle, delay],
				PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5 } }
			}, {
				POSITION: [length - 6.5, width * 1.3, aspect - 0.45, x, y, angle, delay],
				PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 20 }, BORDERLESS: true }
			},
		];
	}
	return [
		{
			POSITION: [length - 2.5, width + 3, aspect, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 22.5, SATURATION_SHIFT: 0.5 },}
		}, {
			POSITION: [4.5, width + 4, 0, x + length - 8, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
			}
		}, {
			POSITION: [4.5, width + 4, 0, x + length - 12, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
			}
		}, {
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 17.5, SATURATION_SHIFT: 0.65 },
				TYPE: "bullet",
			},
		}, {
			POSITION: [length - 1, width, aspect - 0.2, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.65 },
				BORDERLESS: true
			}
		}, {
			POSITION: [length - 2.5, width - 1.5, aspect - 0.2, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.65 },
				BORDERLESS: true
			}
		},
	];
}
exports.addSniper = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.sniper]) => {
	let output = [
		{ // Main barrel
			POSITION: [length, width, 1, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "heavyBulletSnowdread",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 20, SATURATION_SHIFT: 0.55 }
			},
		}, {
			POSITION: [length - 3.3, width * 0.8, -0.65, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10 },
				BORDERLESS: true,
			},
		}, {
			POSITION: [length - 1.6, width * 0.6, -0.65, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 25, SATURATION_SHIFT: 0.5 },
				BORDERLESS: true,
			},
		},
	];
	for (let i = 0; i < 2; i++) {
		output.push(
			{
				POSITION: [0.6, width * 0.7, -0.9, x + length - 2 - i * 2.5, y, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift - 12.5 },
				},
			},
		)
	}
	return output;
}
exports.addAssassin = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.sniper]) => {
	return [
		{
			POSITION: [(length - x) * 0.6, width, -1.6, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift },
			},
		},
		...exports.addSniper({length, width, aspect, x: 0, y, angle, delay}, brightShift, stats),
		{
			POSITION: [5, width, -1.6, x, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 20, SATURATION_SHIFT: 0.5 } },
		}, {
			POSITION: [5, width - 1.5, -1.6, x - 1.5, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 } },
		},
	];
}
exports.addHunter = ({length = 18, width = 8, dimensionDifference = 3, barrelCount = 2, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.sniper]) => {
	let output = [
		{
			POSITION: [length - 2.5, width + 2, -aspect - 0.3, x, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.8 } },
		},
	];
	let delayOffset = 0.5 / barrelCount;
	for (let i = 0; i < barrelCount; i++) stats.push(g.hunterSecondary);
	for (let i = barrelCount - 1; i >= 0; i--) {
		output.push(
			{
				POSITION: [length + i * dimensionDifference, width - i * dimensionDifference, aspect, x, y, angle, delay + delayOffset * (barrelCount - i - 1)],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats(stats),
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
					TYPE: "bullet",
				},
			}, {
				POSITION: [length + i * dimensionDifference, width - i * dimensionDifference - 3, -aspect + 0.3, x, y, angle, delay + delayOffset * (barrelCount - i - 1)],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.65 },
					TYPE: "bullet",
				},
			},
		)
		stats.pop();
	}
	output.push(
		{
			POSITION: [length - 1.5, width - 4, -aspect + 0.3, x, y, angle, delay + delayOffset * (barrelCount - 1)],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.8 },
				TYPE: "bullet",
				BORDERLESS: true,
			},
		},
	)
	return output;
}
exports.addHeavySniper = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.sniper]) => {
	return [
		{
			POSITION: [length, width, 1, 0, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "heavyBulletSnowdread",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.65 },
			},
		}, {
			POSITION: [length - 1.5, width * 0.7, -1.3, 0, y, angle, delay],
			PROPERTIES: { 
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.65 }, 
				BORDERLESS: true
			},
		}, {
			POSITION: [width / 2, width, -0.5, y + width * 0.15, -x, angle + 90, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 } },
		}, {
			POSITION: [width / 2, width, -0.5, y + width * 0.15, x, angle - 90, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 } },
		}, {
			POSITION: [width / 2, width * 0.7, -0.35, y + width * 0.07, -x, angle + 90, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 }, BORDERLESS: true },
		}, {
			POSITION: [width / 2, width * 0.7, -0.35, y + width * 0.07, x, angle - 90, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 }, BORDERLESS: true },
		}, {
			POSITION: [length - 7, width * 0.4, -1.4, 0, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5 } },
		}, {
			POSITION: [4, width + 2, 1, length - 7, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.8 },
			},
		}, {
			POSITION: [2, width + 2.5, 1, length - 6, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 },
			},
		}, 
	];
}
exports.addRailgun = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.sniper]) => {
	let output = [
		{
			POSITION: [length - x - 3.5, width + 3, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.7 }}
		}, {
			POSITION: [length - x, width, 1, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
			},
		}, {
			POSITION: [(length - x) * 0.85, width * 0.85, 0.7, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 17.5, SATURATION_SHIFT: 0.8 },
				BORDERLESS: true,
			},
		}, {
			POSITION: [5, width + 3, -1.7, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15 } }
		}, {
			POSITION: [3.5, width + 1.5, -1.7, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.65 } }
		},
	];
	for (let i = 0; i < 3; i++) {
		output.splice(1, 0,
			{
				POSITION: [0.6, width + 4, 1, length - 4 - 2.5 * i, y, angle, delay],
				PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5 } }
			}
		)
	}
	return output;
}

exports.addNormal = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic], drawTop = true) => {
	let output = [
		{
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 20, SATURATION_SHIFT: 0.55 }
			},
		},
	];
	if (drawTop) {
		output.push(
			{
				POSITION: [length - 1.5, width * 0.85, aspect * 0.9, x, y, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 27.5, SATURATION_SHIFT: 0.55 },
					BORDERLESS: true,
				},
			}, {
				POSITION: [length - 1.5, width * 0.5, aspect * -0.7, x, y, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 32.5, SATURATION_SHIFT: 0.55 },
					BORDERLESS: true,
				},
			}, {
				POSITION: [1.5 * aspect, aspect * width * 0.7, -0.6, x + length - 1.5 - 1.5 * aspect, y, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([...stats, g.fake]),
					TYPE: "bullet",
					COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10 },
				},
			},
		);
	}
	return output;
}
exports.addSpam = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic]) => {
	return [
		{ // Main barrel
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15 }
			},
		}, {
			POSITION: [length - 1.2, width, aspect * (length - 2) / length, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.75 }
			},
		}, {
			POSITION: [length - 2, width - 1, aspect - 0.3, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.75 },
				BORDERLESS: true,
			},
		},
	];
}
exports.addGunner = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic]) => {
	return [
		{ // Main barrel
			POSITION: [length, width, 1, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15 }
			},
		}, {
			POSITION: [length - 1.25, width * 0.8, -0.8, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.7 }
			},
		},
	];
}
exports.addCrowbar = ({length = 38, width = 6.5, aspect = 1, x = 8, y = 0, angle = 0, delay = 0}, brightShift = 0) => {
	return [
		{
			POSITION: [length - x - 8, width, -1.5, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 }},
		}, {
			POSITION: [length - x, width, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.6 }}
		}, {
			POSITION: [length - x, width - 2, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.7 }, BORDERLESS: true}
		}, {
			POSITION: [5, width + 2, -1.5, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 7.5, SATURATION_SHIFT: 0.6 }}
		}, {
			POSITION: [5, width + 0.5, -1.6, x - 1.5, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 }},
		},
	];
}
exports.addHeavy = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic]) => {
	return [
		{
			POSITION: [12.5, width * 1.3, -aspect + 0.25, x, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5 } },
		}, {
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "heavyBulletSnowdread",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 17.5, SATURATION_SHIFT: 0.6 },
			},
		}, {
			POSITION: [length - 2, width * 1.2, aspect - 0.35, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.7 },
				BORDERLESS: true,
			},
		}, {
			POSITION: [(length - 11.5) * 0.75, width * 0.65, aspect - 0.4, x + 11.5, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 2.5 } },
		}, {
			POSITION: [11.5, width * 0.8, -aspect + 0.25, x, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 2.5 } },
		}, {
			POSITION: [length * 0.8, width * 0.8, aspect - 0.6, x, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.75 } },
		}, 
	];
}
exports.addLauncher = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic], isSkimmer = false, TYPE = "missileProjectileSnowdread") => {
	if (isSkimmer) {
		return [
			{
				POSITION: [10, width - 1, -0.75, x + length - 8, y, angle, 0],
				PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.6 }} 
			}, {
				POSITION: [9.5, width - 3, -0.75, x + length - 8, y, angle, 0],
				PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.7 }, BORDERLESS: true} 
			}, {
				POSITION: [length, width, 0.95, x, y, angle, delay],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats(stats),
					TYPE,
					STAT_CALCULATOR: gunCalcNames.sustained,
					COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 },
				},
			}, {
				POSITION: [length + 0.5 - 10, width * 0.7, 0.001, x + 10, y, angle, 0],
				PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 2.5 }}
			}, {
				POSITION: [length - 2, width - 2, 0.8, x, y, angle, 0],
				PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.6 }}
			}, {
				POSITION: [length, width - 2, 0.75, x - 3.5, y, angle, 0],
				PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.7 }, BORDERLESS: true}
			}, {
				POSITION: [length * 0.65 - 2.5, width * 0.55, 0.6, x + 2.5, y, angle, 0],
				PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5 }}
			},
		];
	}
	return [
		{
			POSITION: [length - 6, width - 3, 1, x + 8, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE,
				STAT_CALCULATOR: gunCalcNames.sustained,
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.6 },
			},
		}, {
			POSITION: [length - 7, width - 5, 0, x + 8, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "bullet",
				STAT_CALCULATOR: gunCalcNames.sustained,
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift },
			},
		}, {
			POSITION: [length, width, -1.15, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 }} 
		}, {
			POSITION: [length, width - 2.5, -0.6, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.7 }}
		}, {
			POSITION: [length, width - 3, 0.7, x - 2, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift + 2.5, SATURATION_SHIFT: 0.7 }, BORDERLESS: true}
		}, {
			POSITION: [length * 0.8, width * 0.45, 0.001, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 }} 
		},
	];
}
exports.addShotgun = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, realGuns = [], bigStats = [g.basic], smallStats = [g.basic]) => {
	let output = [
		{
			POSITION: [length - x, width, 1, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...bigStats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 20, SATURATION_SHIFT: 0.6 },
			},
		}, {
			POSITION: [length - x - 1.5, width - 2, 0.85, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...bigStats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 },
			},
		}, {
			POSITION: [6, width, -1.3, x, y, angle, 0],
			PROPERTIES: {
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 20, SATURATION_SHIFT: 0.65 },
			},
		}, {
			POSITION: [length - x - 1, width / 2, -0.6, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...bigStats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.75 },
			},
		}, {
			POSITION: [length - x - 2.5, width * 0.35, -0.85, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...bigStats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.55 },
				BORDERLESS: true,
			},
		}, {
			POSITION: [length - x - 4, width * 0.5, 0.001, x, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 } },
		}, {
			POSITION: [6, width - 1.5, -1.3, x - 1.5, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 } },
		},
	];
	let hasSmall = false;
	for (let i = 0; i < realGuns.length; i++) {
		let gun = realGuns[i],
			stats = gun.small ? smallStats : bigStats,
			TYPE = i % 3 == 0 ? "casing" : "bullet";
		if (gun.small) hasSmall = true;
		output.splice(0, 0, {
			POSITION: [gun.l, gun.w, 0.001, 0, g.y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE,
			}
		});
	}
	if (hasSmall) {
		output.splice(0, 0, {
			POSITION: [length - x + 2.5, width - 3.5, 1, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...bigStats, g.fake]),
				TYPE: "bullet",
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.6 },
			},
		});
	}
	return output;
}
exports.addTwister = ({length = 18, width = 8, aspect = -1.4, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic], TYPE = "spinmissile") => {
	return [
		{
			POSITION: [10, width - 1, -0.5, x + length - 8, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 7.5, SATURATION_SHIFT: 0.65 },}
		}, {
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE,
				STAT_CALCULATOR: gunCalcNames.sustained,
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5 },
			},
		}, {
			POSITION: [length, width * 1.08, aspect, x - length / 5, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: 'bullet',
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 15, SATURATION_SHIFT: 0.7 },
			},
		}, {
			POSITION: [length, width * 0.85, aspect - 0.1, x - length / 5 - 1, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: 'bullet',
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 6.25, SATURATION_SHIFT: 0.7 },
				BORDERLESS: true
			},
		}, {
			POSITION: [length, width * 0.9, aspect - 0.1, x - length / 5 - 3, y, angle, delay],
			PROPERTIES: {COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 }}
		}, {
			POSITION: [length - 2, width * 0.65, 0.7, x, y, angle, 0],
			PROPERTIES: {COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.65 }}
		},
	];
}
exports.addDrone = ({length = 18, width = 8, aspect = 1.2, x = 8, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.drone], MAX_CHILDREN = 4, TYPE = "drone") => {
	let output = [
		{
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE,
				MAX_CHILDREN,
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				WAIT_TO_CYCLE: true,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.8}
			},
		}, {
			POSITION: [length - 1, width, 0.8, x, y, angle, 0],
			PROPERTIES: { COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift, SATURATION_SHIFT: 0.8}, BORDERLESS: true },
		}, {
			POSITION: [length - 2.5, width * 0.8, -1.2, x, y, angle, 0],
			PROPERTIES: { COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5} },
		},
	];
	if (MAX_CHILDREN > 2) {
		output.splice(0, 0,
			{
				POSITION: [length - 2, width + 3, 1, x, y, angle, 0],
				PROPERTIES: { COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift} },
			}
		)
	}
	return output;
}
exports.addMinion = ({length = 18, gap = 3, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.factory], TYPE = "assailantMinionSnowdread", MAX_CHILDREN = 2) => {
	return [
		{
			POSITION: [gap, width - 1, 1, x + length, y, angle, 0],
			PROPERTIES: { COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.6} },
		}, {
			POSITION: [1.5, width, 1, x + length + gap, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE,
				STAT_CALCULATOR: gunCalcNames.drone,
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				MAX_CHILDREN,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.6},
			},
		}, {
			POSITION: [length, width, 1, x, y, angle, 0],
			PROPERTIES: { COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5} },
		}, {
			POSITION: [length + gap - 1, width * 0.6, -1.4, x, y, angle, 0],
			PROPERTIES: { COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15} },
		}, {
			POSITION: [length + gap - 2.5, width * 0.3, -1.2, x, y, angle, 0],
			PROPERTIES: { COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.7} },
		},
	];
}
exports.addAutoDrone = ({length = 18, width = 8, aspect = 1.2, x = 8, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.drone], MAX_CHILDREN = 4) => {
	return [
		{
			POSITION: [3, width * 0.75, 0.001, x + length - 1.5, y, angle, delay],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.55}},
		}, {
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "turretedDroneSnowdread",
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				WAIT_TO_CYCLE: true,
				MAX_CHILDREN,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.65},
			},
		}, {
			POSITION: [length - 3, width - 2, aspect * 0.95, x, y, angle, delay],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5}},
		}, {
			POSITION: [length - 1, width - 3, aspect, x, y, angle, delay],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.75}},
		}, {
			POSITION: [length - 2, width / 2, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5},}
		},
	];
}
exports.addHoncho = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.drone], MAX_CHILDREN = 4) => {
	let sideAngle = Math.atan(((aspect - 1) * width / 2) / (x * 0.8));
	let xShift = -20 * Math.cos(sideAngle) + 11;
	return [
		{
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "honchoDroneSnowdread",
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				WAIT_TO_CYCLE: true,
				MAX_CHILDREN,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.6},
			},
		}, {
			POSITION: [1.5, width * 1.1, 0.5, x + length - 2.5, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 2.5, SATURATION_SHIFT: 0.7}, BORDERLESS: true}
		}, {
			POSITION: [1.5, width * 1.1, 1, x + length - 4.5, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 5}}
		}, {
			POSITION: [3, width * 0.6, 0.001, x + length - 5, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15}}
		}, {
			POSITION: [length + 11, 4, 0.001, x + xShift, y + width * 0.25, angle + sideAngle * 180 / Math.PI, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5},}
		}, {
			POSITION: [length + 11, 4, 0.001, x + xShift, y - width * 0.25, angle - sideAngle * 180 / Math.PI, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 12.5},}
		},
	];
}
exports.addSwarm = ({length = 18, width = 8, aspect = 0.6, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.swarm]) => {
	return [
		{
			POSITION: [length, width, aspect, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: "swarm",
				STAT_CALCULATOR: gunCalcNames.swarm,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.7}
			},
		}, {
			POSITION: [length * 1.5, width * 0.8, aspect, x - length * 0.65, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: "swarm",
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.7},
				BORDERLESS: true
			},
		},
	];
}
exports.addTrap = ({length = 18, length2 = 3, width = 8, aspect = 1.6, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.trap], isBox = false) => {
	return [
		{
			POSITION: [length + length2 * 0.5, width * 1.3, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10}}
		}, {
			POSITION: [length, width, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 10, SATURATION_SHIFT: 0.6}}
		}, {
			POSITION: [length2, width, aspect, x + length, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: isBox ? "unsetTrapSnowdread" : "trap",
				STAT_CALCULATOR: gunCalcNames.trap,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 12.5, SATURATION_SHIFT: 0.6}
			},
		}, {
			POSITION: [length + length2 / 3, width * 0.8, 0.7, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 17.5,  SATURATION_SHIFT: 0.75}}
		},
	];
}
exports.addAutoTrap = ({length = 18, length2 = 3, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.trap], MAX_CHILDREN = 6, isBox = false) => {
	let output = [
		{
			POSITION: [length, width, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 15, SATURATION_SHIFT: 0.6}}
		}, {
			POSITION: [length - 3, width + 3, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5}}
		}, {
			POSITION: [length - 4, width + 1, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15}, BORDERLESS: true}
		}, {
			POSITION: [length2, width, aspect, x + length, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: isBox ? 'unsetPillboxWeakSnowdread' : 'autoTrapSnowdread',
				STAT_CALCULATOR: gunCalcNames.trap,
				INDEPENDENT: true,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 15, SATURATION_SHIFT: 0.6},
				MAX_CHILDREN,
				DESTROY_OLDEST_CHILD: true,
			},
		}, {
			POSITION: [length + length2 / 2, width * 0.9, 0.6, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 7.5, SATURATION_SHIFT: 0.7}}
		},
	];
	if (isBox) {
		output.splice(1, 0, {
			POSITION: [length - 1, width - 2, 1, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 7.5, SATURATION_SHIFT: 0.65}, BORDERLESS: true}
		});
		output.push({
			POSITION: [length + length2 / 2 - 1.5, width * 0.75, 0.6, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift, SATURATION_SHIFT: 0.75}, BORDERLESS: true}
		});
	}
	return output;
}
exports.addAuraTrap = ({length = 18, length2 = 3, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.trap], MAX_CHILDREN = 6, isBox = false) => {
	return [
		{
			POSITION: [length, width, 1, 0, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 15, SATURATION_SHIFT: 0.6}}
		}, {
			POSITION: [length2 + 1, width - 1.5, -1.7, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5}}
		}, {
			POSITION: [length2, width - 2.5, -1.55, x, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15}, BORDERLESS: true}
		}, {
			POSITION: [length, width * 0.6, -0.1, 0, y, angle, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.75}}
		}, {
			POSITION: [length2, width, aspect, length, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: isBox ? 'auraBlock' : 'auraTrap',
				STAT_CALCULATOR: gunCalcNames.trap,
				COLOR: {BASE: -1, BRIGHTNESS_SHIFT: brightShift - 15, SATURATION_SHIFT: 0.6},
				MAX_CHILDREN,
				DESTROY_OLDEST_CHILD: true,
			},
		}, {
			POSITION: [length2 - 1, width - 2, aspect, length + 1, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: 'bullet',
				COLOR: {BASE: 17, BRIGHTNESS_SHIFT: brightShift + 7.5}
			},
		},
	];
}
exports.addDroneOnAuto = ({length = 6, width = 12, aspect = 1.2, x = 8, y = 0, angle = 0, delay = 0}, brightShift = 6, stats = [g.drone]) => {
	return [
		{
			POSITION: [length, width + 1, -1.2, x - 1, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 } },
		}, {
			POSITION: [length, width, 1.2, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: 'drone',
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				WAIT_TO_CYCLE: true,
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 20, SATURATION_SHIFT: 0.55 },
			},
		}, {
			POSITION: [length - 2, width * 2/3, 1, x - 1, y, angle, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 10 }, DRAW_ABOVE: true },
		},
	];
}
exports.addThruster = ({length = 18, width = 8, aspect = 1, x = 0, y = 0, angle = 0, delay = 0}, brightShift = 0, stats = [g.basic], useThrusterCalculator = true) => {
	let STAT_CALCULATOR = useThrusterCalculator ? gunCalcNames.thruster : undefined;
	return [
		{ // Main barrel
			POSITION: [length, width, 1, x, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats(stats),
				TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
				STAT_CALCULATOR,
				AUTOFIRE: true,
				COLOR: { BASE: 17, BRIGHTNESS_SHIFT: brightShift + 15 }
			},
		}, {
			POSITION: [length - 6, width * 0.8, 1.6, x + 4, y, angle, delay],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([...stats, g.fake]),
				TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
				STAT_CALCULATOR,
				AUTOFIRE: true,
				COLOR: { BASE: -1, BRIGHTNESS_SHIFT: brightShift - 5, SATURATION_SHIFT: 0.65 }
			},
		},
	];
}

exports.addTrinoughtAuraRing = (heal = false) => {
	let output = [],
		TYPE = heal ? "trinoughtSmallHealAuraSnowdread" : "trinoughtSmallAuraSnowdread";
	for (let i = 0; i < 3; i++) {
		let theta = (120 * i + 60) * Math.PI / 180;
		output.push(
			{
				POSITION: [3.5, 10.5 * Math.cos(theta), 10.5 * Math.sin(theta), 0, 360, 2],
				TYPE,
			},
		);
	}
	return output;
}
exports.addTrinoughtTurretRing = () => {
	let output = [];
	for (let i = 0; i < 3; i++) {
		output.push(
			{
				POSITION: [3.5, 10.5, 0, 120*i+60, 180, 2],
				TYPE: "spamAutoTurretSnowdread",
			},
		);
	}
	return output;
}
exports.addPentanoughtAuraRing = (heal = false) => {
	let output = [],
		TYPE = heal ? "pentanoughtSmallHealAuraSnowdread" : "pentanoughtSmallAuraSnowdread";
	for (let i = 0; i < 5; i++) {
		let theta = (72 * i + 36) * Math.PI / 180;
		output.push(
			{
				POSITION: [4, 8.5 * Math.cos(theta), 8.5 * Math.sin(theta), 0, 360, 2],
				TYPE,
			},
		)
	}
	return output;
}
exports.addPentanoughtTurretRing = () => {
	let output = [];
	for (let i = 0; i < 5; i++) {
		output.push(
			{
				POSITION: [3.25, 9, 0, 72*i+36, 180, 2],
				TYPE: "spamAutoTurretSnowdread",
			},
		)
	}
	return output;
}

exports.addAura = (damageFactor = 1, sizeFactor = 1, opacity = 0.3, auraColor, auraSize = "Medium") => {
	let isHeal = damageFactor < 0;
	let auraType = isHeal ? "healAura" + auraSize : "aura" + auraSize;
	let symbolType = isHeal ? "healAuraSymbolSnowdreads" : "auraSymbolSnowdreads";
	auraColor = auraColor ?? (isHeal ? 12 : 0);
	return {
		PARENT: ["genericTank"],
		INDEPENDENT: true,
		LABEL: "",
		COLOR: 17,
		GUNS: [
			{
				POSITION: [0, 20, 1, 0, 0, 0, 0,],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.aura, { size: sizeFactor, damage: damageFactor }]),
					TYPE: [auraType, {COLOR: auraColor, ALPHA: opacity}],
					MAX_CHILDREN: 1,
					AUTOFIRE: true,
					SYNCS_SKILLS: true,
				}, 
			}, 
		],
		TURRETS: [
			{
				POSITION: [20 - isHeal, 0, 0, 0, 360, 1],
				TYPE: [symbolType, {COLOR: auraColor, INDEPENDENT: true}],
			},
		]
	};
}
