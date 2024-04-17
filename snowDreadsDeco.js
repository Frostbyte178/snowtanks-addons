const { enableSnowDreads } = require('./snowDreadsConstants.js');

// Navigate to [snowDreadsConstants.js] and the "enableSnowDreads" variable to enable/disable this addon.
if (!enableSnowDreads) {
	return console.log('--- Snowdreads decoration addon [snowDreadsDeco.js] is disabled. ---');
}

// Dread base deco
Class.eggBaseDeco = {
	SHAPE: "M 0.71 0.71 A 1 0.98 0 0 1 -0.71 0.71 L -0.6 0.6 A 1 1.25 0 0 0 0.6 0.6 L 0.71 0.71" + 
			"M -0.71 -0.71 A 1 0.98 180 0 1 0.71 -0.71 L 0.6 -0.6 A 1 1.25 180 0 0 -0.6 -0.6 L -0.71 -0.71" + 
			"M 0.79 0.33 A 1 0.95 45 0 1 0.6 0.6 L 0.54 0.54 A 1.88 1 45 0 0 0.71 0.29 L 0.79 0.33" + 
			"M -0.79 0.33 A 1 0.95 157.5 0 0 -0.6 0.6 L -0.54 0.54 A 1.88 1 157.5 0 1 -0.71 0.29 L -0.79 0.33" + 
			"M 0.79 -0.33 A 1 0.95 -45 0 0 0.6 -0.6 L 0.54 -0.54 A 1.88 1 -45 0 1 0.71 -0.29 L 0.79 -0.33" + 
			"M -0.79 -0.33 A 1 0.95 -157.5 0 1 -0.6 -0.6 L -0.54 -0.54 A 1.88 1 -157.5 0 0 -0.71 -0.29 L -0.79 -0.33",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 10 },
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 2; i++) {
	Class.eggBaseDeco.GUNS.push(
		{
			POSITION: [8.25, 6.75, 0.6, 0, 0, 180*i+55, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -12.5, SATURATION_SHIFT: 0.85 },
				BORDERLESS: true,
			}
		}, {
			POSITION: [8.25, 6.75, 0.6, 0, 0, 180*i+125, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -12.5, SATURATION_SHIFT: 0.85 },
				BORDERLESS: true,
			}
		}, {
			POSITION: [4, 1.3, 0.001, 9, 0, 48 + 180 * i, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -20 },
				DRAW_ABOVE: true,
			},
		}, {
			POSITION: [3.5, 1.7, 0.001, 9, 0, 90 + 180 * i, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -20 },
				DRAW_ABOVE: true,
			},
		}, {
			POSITION: [4, 1.3, 0.001, 9, 0, 132 + 180 * i, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -20 },
				DRAW_ABOVE: true,
			},
		}, {
			POSITION: [1.5, 1.3, 0, 7.5, 0, 48 + 180 * i, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -20 },
				DRAW_ABOVE: true,
			},
		}, {
			POSITION: [1, 1.7, 0, 8, 0, 90 + 180 * i, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -20 },
				DRAW_ABOVE: true,
			},
		}, {
			POSITION: [1.5, 1.3, 0, 7.5, 0, 132 + 180 * i, 0],
			PROPERTIES: {
				COLOR: { BASE: 6, BRIGHTNESS_SHIFT: -20 },
				DRAW_ABOVE: true,
			},
		}, 
	)
}
Class.squareBaseDeco = {
	SHAPE: "M -0.98 0.98 L -0.3 0.75 L -0.63 0.63 L -0.75 0.3 L -0.98 0.98" + 
			"M 0.98 0.98 L 0.75 0.3 L 0.63 0.63 L 0.3 0.75 L 0.98 0.98" + 
			"M 0.98 -0.98 L 0.3 -0.75 L 0.63 -0.63 L 0.75 -0.3 L 0.98 -0.98" + 
			"M -0.98 -0.98 L -0.75 -0.3 L -0.63 -0.63 L -0.3 -0.75 L -0.98 -0.98",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 10 },
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.squareBaseDeco.GUNS.push(
		{
			POSITION: [4, 2, 0.001, 9.5, 2.6, 20 + 90 * i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -15 } },
		}, {
			POSITION: [4, 2, 0.001, 9.5, -2.6, 70 + 90 * i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -15 } },
		}, {
			POSITION: [5, 1.5, 0.001, -2, 9, -70 + 90 * i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 17.5 } },
		}, {
			POSITION: [5, 1.5, 0.001, -2, -9, 70 + 90 * i, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 17.5 } },
		},
	)
}
Class.triangleBaseDeco = {
	SHAPE: "M -1.546 -0.108 L -1.546 0.108 L -0.175 0.303 L 0.679 1.393 L 0.867 1.285 L 0.35 0 L 0.867 -1.285 L 0.679 -1.393 L -0.175 -0.303 L -1.546 -0.108",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 5 },
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.triangleBaseDeco.GUNS.push(
		{
			POSITION: [7, 3, 0.001, 10, 0, 120 * i + 60, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -12.5, SATURATION_SHIFT: 0.7 } },
		}, {
			POSITION: [5, 2.5, 0.001, 6.5, -2, 120 * i + 90, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -10, SATURATION_SHIFT: 0.85 } },
		}, {
			POSITION: [5, 2.5, 0.001, 6.5, 2, 120 * i + 30, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -10, SATURATION_SHIFT: 0.85 } },
		}, {
			POSITION: [9, 5, 0.25, 0, 0, 120 * i + 60, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 12.5 }, BORDERLESS: true, DRAW_ABOVE: true },
		},
	)
}
Class.pentagonBaseDeco = {
	SHAPE: "M -1.207 -0.324 L -0.724 -0.194 L -0.408 -0.629 L -0.681 -1.048 L -0.688 -0.5 Z" +
		"M -1.207 0.324 L -0.724 0.194 L -0.408 0.629 L -0.681 1.048 L -0.688 0.5 Z" +
		"M 0.787 -0.971 L 0.472 -0.583 L -0.039 -0.749 L -0.065 -1.248 L 0.263 -0.808 Z" +
		"M 0.787 0.971 L 0.472 0.583 L -0.039 0.749 L -0.065 1.248 L 0.263 0.808 Z" +
		"M 1.167 0.448 L 0.7 0.269 L 0.7 -0.269 L 1.167 -0.448 L 0.85 0 Z",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 5 },
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.pentagonBaseDeco.GUNS.push(
		{
			POSITION: [4, 6, 0.001, 8.5, 0, 72 * i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -10, SATURATION_SHIFT: 0.6 } },
		}, {
			POSITION: [7, 2.5, 0.001, 6, -6.2, 72 * i + 60, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -2.5, SATURATION_SHIFT: 0.8 } },
		}, {
			POSITION: [7, 2.5, 0.001, 6, 6.2, 72 * i - 60, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -2.5, SATURATION_SHIFT: 0.8 } },
		},
	)
}
Class.hexagonBaseDeco = {
	SHAPE: "M -1.1 0 L -0.956 0.292 L -0.669 0.205 L -0.669 -0.205 L -0.956 -0.292 Z" +
		"M -0.55 0.952 L -0.225 0.974 L -0.157 0.682 L -0.512 0.477 L -0.731 0.682 Z" +
		"M -0.55 -0.952 L -0.225 -0.974 L -0.157 -0.682 L -0.512 -0.477 L -0.731 -0.682 Z" +
		"M 0.55 0.952 L 0.225 0.974 L 0.157 0.682 L 0.512 0.477 L 0.731 0.682 Z" +
		"M 0.55 -0.952 L 0.225 -0.974 L 0.157 -0.682 L 0.512 -0.477 L 0.731 -0.682 Z" +
		"M 1.1 0 L 0.956 0.292 L 0.669 0.205 L 0.669 -0.205 L 0.956 -0.292 Z",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 2.5 },
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 6; i++) {
	Class.hexagonBaseDeco.GUNS.push(
		{
			POSITION: [1.75, 3, -0.75, 7.5, 0, 60 * i, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: 2.5, SATURATION_SHIFT: 0.9 }, DRAW_ABOVE: true },
		}, {
			POSITION: [1, 9, 0, 8.5, 0, 60 * i + 30, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: 10, SATURATION_SHIFT: 1.15 } },
		},
	)
}

// Projectile deco
Class.ring085 = {
	COLOR: {BASE: 17, BRIGHTNESS_SHIFT: -7.5},
	SHAPE: "M -0.85 0 A 0.85 0.85 0 0 0 0.85 0 A 0.85 0.85 0 0 0 -0.85 0 M -1 0 A 1 1 0 0 1 1 0 A 1 1 0 0 1 -1 0 Z"
}
Class.aggressorMinionTopSnowdread = {
	SHAPE: "M -1.546 -0.108 L -1.546 0.108 L -0.175 0.303 L 0.679 1.393 L 0.867 1.285 L 0.35 0 L 0.867 -1.285 L 0.679 -1.393 L -0.175 -0.303 L -1.546 -0.108",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 5 },
	MIRROR_MASTER_ANGLE: true,
}
Class.unsetTrapTopSnowdread = {
	SHAPE: "M 1.1 1.1 L 1 0 L 1.1 -1.1 L 0 -1 L -1.1 -1.1 L -1 0 L -1.1 1.1 L 0 1 L 1.1 1.1 M 0.9 0.9 L 0 0.825 L -0.9 0.9 L -0.825 0 L -0.9 -0.9 L 0 -0.825 L 0.9 -0.9 L 0.825 0 L 0.9 0.9 Z",
	COLOR: {BASE: 17, BRIGHTNESS_SHIFT: -7.5},
}
Class.unsetPillboxTopSnowdread = {
	SHAPE: "M -1.3 -0.15 L -1.3 0.15 L -0.3 0.3 L -0.15 1.3 L 0.15 1.3 L 0.3 0.3 L 1.3 0.15 L 1.3 -0.15 L 0.3 -0.3 L 0.15 -1.3 L -0.15 -1.3 L -0.3 -0.3 Z",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 5 },
	MIRROR_MASTER_ANGLE: true,
}

// Dread body deco
// Size increase body deco
Class.stomperTurretSnowdread = {
	PARENT: 'genericTank',
	MIRROR_MASTER_ANGLE: true,
	LABEL: "",
	COLOR: -1,
	GUNS: [],
	TURRETS: [
		{
			POSITION: [10, 0, 0, 0, 0, 1],
			TYPE: ["egg", {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -15}}]
		}
	]
}
for(let i = 0; i < 2; i++) {
	Class.stomperTurretSnowdread.GUNS.push(
		{
			POSITION: [17, 17, -0.2, 0, 0, 180*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [15, 12.5, -0.2, 0, 0, 180*i, 0],
			PROPERTIES: { COLOR: { BASE: 9, BRIGHTNESS_SHIFT: 7.5 }, BORDERLESS: true },
		},
	)
}
Class.rollerTurretSnowdread = {
	PARENT: ["genericSquarenoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.rollerTurretSnowdread.GUNS.push(
		{
			POSITION: [20, 20, 0, 0, 0, 90*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [15, 15, 0, 2.5, 0, 90*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 7.5}, BORDERLESS: true},
		},
	)
}
Class.flattenerTurretSnowdread = {
	PARENT: ["genericTrinoughtSnowdread"],
	SHAPE: "",
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.flattenerTurret2Snowdread = {
	PARENT: ["genericTrinoughtSnowdread"],
	SHAPE: "",
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.flattenerTurretSnowdread.GUNS.push(
		{
			POSITION: [18, 25, 0, 0, 0, 120*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [12, 17, 0, 4.5, 0, 120*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
	Class.flattenerTurret2Snowdread.GUNS.push(
		{
			POSITION: [17, 20, 0, 0, 0, 120*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [11, 12, 0, 4, 0, 120*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
}
Class.pentagonCrusherTurretSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
Class.pentagonCrusherTurret2Snowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
Class.pentagonCrusherTurret3Snowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.pentagonCrusherTurretSnowdread.GUNS.push(
		{
			POSITION: [20, 16, 0, 0, 0, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [14, 10, 0, 3.5, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
	Class.pentagonCrusherTurret2Snowdread.GUNS.push(
		{
			POSITION: [21, 11, 0, 0, 0, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [15, 6, 0, 3.5, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
	Class.pentagonCrusherTurret3Snowdread.GUNS.push(
		{
			POSITION: [17, 16, 0, 0, 0, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [10, 11, 0, 5, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
}
Class.hexagonCrusherTurretSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
Class.hexagonCrusherTurret2Snowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
Class.hexagonCrusherTurret3Snowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
for(let i = 0; i < 6; i++) {
	Class.hexagonCrusherTurretSnowdread.GUNS.push(
		{
			POSITION: [20, 13.5, 0, 0, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [14, 7.5, 0, 3.5, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
	Class.hexagonCrusherTurret2Snowdread.GUNS.push(
		{
			POSITION: [21, 8.5, 0, 0, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [15, 4, 0, 3.5, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
	Class.hexagonCrusherTurret3Snowdread.GUNS.push(
		{
			POSITION: [17, 13.5, 0, 0, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [10, 9, 0, 5, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true},
		},
	)
}

// Size decrease body deco
Class.pentagonFinchTurretSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: 9,
	TURRETS: [
		{
			POSITION: [15.5, 0, 0, 0, 0, 1],
			TYPE: ['pentagon', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}]
		}
	]
}
Class.hexagonFinchTurretSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	COLOR: 9,
	TURRETS: [
		{
			POSITION: [16.5, 0, 0, 30, 0, 1],
			TYPE: ['hexagon', {MIRROR_MASTER_ANGLE: true, COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5}}]
		}
	]
}

// Minelayer body deco
Class.dropperTurretSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [["spin", {speed: -0.035}]],
	INDEPENDENT: true,
	LABEL: "",
	COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 15 },
	GUNS: [
		{ 
			POSITION: [13, 25, 1, -6.5, 0, 0, 0],
			PROPERTIES: { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -20 } },
		}, { 
			POSITION: [8, 32, 1, -4, 0, 0, 0],
			PROPERTIES: { COLOR: { BASE: 17, BRIGHTNESS_SHIFT: 5 } },
		},
	],
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 0, 1],
			TYPE: ["egg", { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -20, SATURATION_SHIFT: 0.5 } }],
		}, {
			POSITION: [6.5, 0, 0, 0, 0, 1],
			TYPE: ["egg", { COLOR: { BASE: -1 } }]
		},
	]
}
Class.baiterTurretSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [["spin", {speed: -0.035}]],
	INDEPENDENT: true,
	LABEL: "",
	COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 12.5},
	GUNS: [
		{ 
			POSITION: [11, 23, 1, -5.5, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -17.5}}
		}, {
			POSITION: [11, 23, 1, -5.5, 0, 90, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -17.5}}
		}, { 
			POSITION: [7, 28, 1, -3.5, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 6}}
		}, {
			POSITION: [7, 28, 1, -3.5, 0, 90, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 6}}
		},
	],
	TURRETS: [
		{
			POSITION: [15, 0, 0, 0, 0, 1],
			TYPE: ["egg", { COLOR: { BASE: -1, BRIGHTNESS_SHIFT: -17.5, SATURATION_SHIFT: 0.45 } }],
		}, {
			POSITION: [7.5, 0, 0, 0, 0, 1],
			TYPE: ["egg", { COLOR: { BASE: -1 } }]
		},
	]
}
Class.cagerTurretSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [["spin", {speed: -0.035}]],
	INDEPENDENT: true,
	LABEL: "",
	COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 10},
	GUNS: [],
	TURRETS: [
		{
			POSITION: [14.5, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 17.5}}]
		}, {
			POSITION: [10, 0, 0, 30, 0, 1],
			TYPE: ['hexagon', {COLOR: -1, MIRROR_MASTER_ANGLE: true}]
		},
	]
};
for (let i = 0; i < 3; i++) {
	Class.cagerTurretSnowdread.GUNS.push(
		{ 
			POSITION: [10, 22, 1, -5, 2.5, 120*i, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -5, SATURATION_SHIFT: 0.8}}
		}, { 
			POSITION: [6, 30, 1, -3, 1.5, 120*i, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 5}}
		},
	)
}
Class.pentagonHoarderTurretSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [["spin", {speed: -0.035}]],
	INDEPENDENT: true,
	LABEL: "",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5},
	GUNS: [],
	TURRETS: [
		{
			POSITION: [17, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: -1}]
		}, {
			POSITION: [10, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 10}}]
		},
	]
}
Class.hexagonHoarderTurretSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [["spin", {speed: -0.035}]],
	INDEPENDENT: true,
	LABEL: "",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 5},
	GUNS: [],
	TURRETS: [
		{
			POSITION: [17, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: -1}]
		}, {
			POSITION: [10, 0, 0, 0, 0, 1],
			TYPE: ['egg', {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 10}}]
		},
	]
}
for(let i = 0; i < 5; i++) {
	Class.pentagonHoarderTurretSnowdread.GUNS.push(
		{ 
			POSITION: [15, 5.5, -2.5, 0, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 7.5}},
		},
	)
}
for(let i = 0; i < 6; i++) {
	Class.hexagonHoarderTurretSnowdread.GUNS.push(
		{ 
			POSITION: [16, 5, -2.5, 0, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 17, BRIGHTNESS_SHIFT: 7.5}},
		},
	)
}

// FOV boost body deco
Class.spotterRadarSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [['spin', {speed: 0.02}]],
	INDEPENDENT: true,
	SHAPE: [[0.225, 1], [0.225, -1], [-0.225, -1], [-0.225, 1]],
	COLOR: 17,
	GUNS: [
		{
			POSITION: [4.5, 26, 1, -2.25, 0, 0, 0],
			PROPERTIES: {COLOR: -1}
		}, {
			POSITION: [7, 17, 1, -3.5, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -20}}
		},
	]
}
Class.spyRadarSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [['spin', {speed: 0.02}]],
	INDEPENDENT: true,
	SHAPE: [[0.2, 1], [0.2, -1], [-0.2, -1], [-0.2, 1]],
	COLOR: 17,
	GUNS: [
		{
			POSITION: [4, 26, 1, -2, 0, 0, 0],
			PROPERTIES: {COLOR: 13}
		}, {
			POSITION: [7, 17, 1, -3.5, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -17.5}}
		}
	]
}
Class.monitorRadarSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [['spin', {speed: 0.02}]],
	INDEPENDENT: true,
	SHAPE: [[0.175, 1], [0.175, -1], [-0.175, -1], [-0.175, 1]],
	COLOR: 17,
	GUNS: [
		{
			POSITION: [6, 17, 1, -3, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -12.5, SATURATION_SHIFT: 0.65}}
		}, {
			POSITION: [3.5, 26, 1, -1.75, 0, 0, 0],
			PROPERTIES: {COLOR: 2}
		}
	]
}
Class.trackerRadarSnowdread = {
	PARENT: 'genericTank',
	CONTROLLERS: [['spin', {speed: 0.02}]],
	INDEPENDENT: true,
	SHAPE: [[0.16, 1], [0.16, -1], [-0.16, -1], [-0.16, 1]],
	COLOR: 17,
	GUNS: [
		{
			POSITION: [6.2, 17, 1, -3.1, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: -7.5, SATURATION_SHIFT: 0.65}}
		}, {
			POSITION: [3.2, 26, 1, -1.6, 0, 0, 0],
			PROPERTIES: {COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 2.5}}
		}
	]
}

// Speed buff body deco
Class.colossusTopSnowdread = {
	PARENT: ["genericSquarenoughtSnowdread"],
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.colossusTopSnowdread.GUNS.push(
		{
			POSITION: [3.5, 17.5, 0.001, 9, 0, 90*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [2.5, 9, 0, 7, 0, 90*i, 0],
			PROPERTIES: {COLOR: 9, DRAW_ABOVE: true},
		},
	)
}
Class.colossusBottomSnowdread = {
	PARENT: ["genericSquarenoughtSnowdread"],
	GUNS: [],
}
for (let i = 0; i < 4; i++) {
	Class.colossusTopSnowdread.GUNS.push(
		{
			POSITION: [3.5, 17.5, 0.001, 9, 0, 90*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
for (let i = 0; i < 4; i++) {
	Class.colossusBottomSnowdread.GUNS.push(
		{
			POSITION: [4, 17.5, 0.001, 9, 0, 90*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.titanTopSnowdread = {
	PARENT: ["genericTrinoughtSnowdread"],
	GUNS: [],
}
for (let i = 0; i < 3; i++) {
	Class.titanTopSnowdread.GUNS.push(
		{
			POSITION: [5, 26, 0.001, 8, 0, 120*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.pentagonLeviathanTopSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	LABEL: "Leviathan",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.pentagonLeviathanTop2Snowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	LABEL: "Leviathan",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.pentagonLeviathanTop3Snowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	LABEL: "Leviathan",
	COLOR: 9,
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.pentagonLeviathanBottomSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	LABEL: "Leviathan",
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for (let i = 0; i < 5; i++) {
	Class.pentagonLeviathanTopSnowdread.GUNS.push(
		{
			POSITION: [6, 13.5, 0.001, 9, 0, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [4, 11.5, 0, 5.7, 0, 72*i, 0],
			PROPERTIES: {COLOR: 9, DRAW_ABOVE: true},
		},
	);
	Class.pentagonLeviathanTop2Snowdread.GUNS.push(
		{
			POSITION: [4.5, 13.5, 0.001, 9, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}},
		}, {
			POSITION: [3, 11.5, 0, 6.7, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, DRAW_ABOVE: true},
		},
	);
	Class.pentagonLeviathanTop3Snowdread.GUNS.push(
		{
			POSITION: [3.5, 8, 0, 6.7, 0, 72*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, DRAW_ABOVE: true, BORDERLESS: true},
		},
	);
	Class.pentagonLeviathanBottomSnowdread.GUNS.push(
		{
			POSITION: [7, 17, 0.001, 9, 0, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		}
	);
}
Class.hexagonLeviathanTopSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	LABEL: "Leviathan",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.hexagonLeviathanTop2Snowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	LABEL: "Leviathan",
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.hexagonLeviathanTop3Snowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	LABEL: "Leviathan",
	COLOR: 9,
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
Class.hexagonLeviathanBottomSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	LABEL: "Leviathan",
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for (let i = 0; i < 6; i++) {
	Class.hexagonLeviathanTopSnowdread.GUNS.push(
		{
			POSITION: [6, 10, 0.001, 9.5, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [3, 9, 0, 7, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9, DRAW_ABOVE: true},
		},
	)
	Class.hexagonLeviathanTop2Snowdread.GUNS.push(
		{
			POSITION: [5, 10, 0.001, 9.5, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}},
		}, {
			POSITION: [2.5, 9, 0, 7.5, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, DRAW_ABOVE: true},
		},
	)
	Class.hexagonLeviathanTop3Snowdread.GUNS.push(
		{
			POSITION: [3, 6.5, 0, 7, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 10}, DRAW_ABOVE: true, BORDERLESS: true},
		}
	)
	Class.hexagonLeviathanBottomSnowdread.GUNS.push(
		{
			POSITION: [7, 13.5, 0.001, 9.5, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}

// Drifter body deco
Class.cottonTurretSnowdread = {
	PARENT: ["genericSquarenoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	SHAPE: [[1, 0], [0, 1], [-1, 0], [0, -1]],
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.cottonTurretSnowdread.GUNS.push(
		{
			POSITION: [25, 16, 0.001, 0, 0, 90*i+45, 0],
			PROPERTIES: {COLOR: 9}
		},
	)
}
for(let i = 0; i < 4; i++) { // layering issues
	Class.cottonTurretSnowdread.GUNS.push(
		{
			POSITION: [25 * 3/4, 12, 0.001, 0, 0, 90*i+45, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true}
		},
	)
}
Class.featherTurretSnowdread = {
	PARENT: ["genericTrinoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.featherTurretSnowdread.GUNS.push(
		{
			POSITION: [20, 17, 0.001, 3, 0, 120*i, 0],
			PROPERTIES: {COLOR: 9}
		}, {
			POSITION: [15, 12, 0.001, 3, 0, 120*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true}
		},
	)
}
Class.pentagonWispTurretSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	SHAPE: 5,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.pentagonWispTurretSnowdread.GUNS.push(
		{
			POSITION: [26, 13, 0.001, 3, 0, 72*i+36, 0],
			PROPERTIES: {COLOR: 9}
		}, {
			POSITION: [23.5, 10, 0.001, 0, 0, 72*i+36, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true}
		},
	)
}
Class.hexagonWispTurretSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	SHAPE: 6,
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 6; i++) {
	Class.hexagonWispTurretSnowdread.GUNS.push(
		{
			POSITION: [26, 13, 0.001, 3, 0, 60*i, 0],
			PROPERTIES: {COLOR: 9}
		}, {
			POSITION: [23.5, 10, 0.001, 0, 0, 60*i, 0],
			PROPERTIES: {COLOR: {BASE: 9, BRIGHTNESS_SHIFT: 6}, BORDERLESS: true}
		},
	)
}

// Body damage buff body deco
Class.ironTopSnowdread = {
	PARENT: ["genericSquarenoughtSnowdread"],
	SHAPE: 0,
	MIRROR_MASTER_ANGLE: true,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	GUNS: [],
}
for(let i = 0; i < 8; i++) {
	Class.ironTopSnowdread.GUNS.push(
		{
			POSITION: [8, 6, 0.001, 20, 0, 45*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [8, 6, 0.001, -20, 0, 45*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.ironBottomSnowdread = {
	PARENT: ["genericSquarenoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 4; i++) {
	Class.ironBottomSnowdread.GUNS.push(
		{
			POSITION: [6, 6, 0.001, 9.5, 5, 90*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [6, 6, 0.001, 9.5, -5, 90*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.steelTopSnowdread = {
	PARENT: ["genericTrinoughtSnowdread"],
	SHAPE: 0,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 9; i++) {
	Class.steelTopSnowdread.GUNS.push(
		{
			POSITION: [8, 6, 0.001, 17.5, 0, 40*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [8, 6, 0.001, -17.5, 0, 40*i+20, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.steelBottomSnowdread = {
	PARENT: ["genericTrinoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 3; i++) {
	Class.steelBottomSnowdread.GUNS.push(
		{
			POSITION: [3, 5, 0.001, 8, 7.5, 120*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [3, 5, 0.001, 8, 0, 120*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [3, 5, 0.001, 8, -7.5, 120*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.pentagonTitaniumTopSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	SHAPE: 0,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 10; i++) {
	Class.pentagonTitaniumTopSnowdread.GUNS.push(
		{
			POSITION: [8, 6, 0.001, 20, 0, 36*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [8, 6, 0.001, -20, 0, 36*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.pentagonTitaniumBottomSnowdread = {
	PARENT: ["genericPentanoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 5; i++) {
	Class.pentagonTitaniumBottomSnowdread.GUNS.push(
		{
			POSITION: [5, 6, 0.001, 9.5, 3.5, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [5, 6, 0.001, 9.5, -3.5, 72*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.hexagonTitaniumTopSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	SHAPE: 0,
	COLOR: {BASE: -1, BRIGHTNESS_SHIFT: 7.5},
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 12; i++) {
	Class.hexagonTitaniumTopSnowdread.GUNS.push(
		{
			POSITION: [7, 5, 0.001, 18, 0, 30*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [7, 5, 0.001, -18, 0, 30*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}
Class.hexagonTitaniumBottomSnowdread = {
	PARENT: ["genericHexnoughtSnowdread"],
	MIRROR_MASTER_ANGLE: true,
	GUNS: [],
}
for(let i = 0; i < 6; i++) {
	Class.hexagonTitaniumBottomSnowdread.GUNS.push(
		{
			POSITION: [5, 5, 0.001, 9.5, 3.25, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		}, {
			POSITION: [5, 5, 0.001, 9.5, -3.25, 60*i, 0],
			PROPERTIES: {COLOR: 9},
		},
	)
}

// Misc
Class.octogon = { SHAPE: 8 }
