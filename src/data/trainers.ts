export interface TrainerData {
  x: number; // x coordinate of the top-left pixel of this trainer
  y: number; // y coordinate of the top-left pixel of this trainer
  // points: string; // "points" attr for the <polygon> element
  name: string; // name of the trainer
  numPokemon: number; // number of pokemon this trainer has
  pokemonLevels: number[]; // Array of levels for the pokemon this trainer has
  walker?: boolean; // T/F if the trainer walks around
  spinner?: boolean; // T/F if the trainer is a stationary spinner
}

export const defaultTrainerHeight = 22;
export const defaultTrainerWidth = 18;

export interface BoundingBoxCoords {
  x: number;
  y: number;
}

export interface BoundingBox {
  topLeft: BoundingBoxCoords;
  topRight: BoundingBoxCoords;
  bottomRight: BoundingBoxCoords;
  bottomLeft: BoundingBoxCoords;
}

export const buildBoundingBox = (
  topLeftCoords: BoundingBoxCoords,
  width: number,
  height: number
): BoundingBox => {
  return {
    topLeft: {
      x: topLeftCoords.x,
      y: topLeftCoords.y,
    },
    topRight: {
      x: topLeftCoords.x + width,
      y: topLeftCoords.y,
    },
    bottomRight: {
      x: topLeftCoords.x + width,
      y: topLeftCoords.y + height,
    },
    bottomLeft: {
      x: topLeftCoords.x,
      y: topLeftCoords.y + height,
    },
  };
};

export const convertBoundingBoxToPolygonPoints = (box: BoundingBox) => {
  const topLeftString = `${box.topLeft.x},${box.topLeft.y}`;
  const topRightString = `${box.topRight.x},${box.topRight.y}`;
  const bottomRightString = `${box.bottomRight.x},${box.bottomRight.y}`;
  const bottomLeftString = `${box.bottomLeft.x},${box.bottomLeft.y}`;

  return `${topLeftString} ${topRightString} ${bottomRightString} ${bottomLeftString} ${topLeftString}`;
};

export const trainers: TrainerData[] = [
  // Rt 103
  {
    name: "Rival",
    numPokemon: 1,
    pokemonLevels: [8],
    x: 2081,
    y: 3757,
  },
  {
    name: "Lady",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3055,
    y: 3886,
    spinner: true,
  },
  {
    name: "Small Twins",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 2947,
    y: 3906,
  },
  {
    name: "Pokefan Boy",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 2818,
    y: 3919,
  },
  {
    name: "Fisherman",
    numPokemon: 3,
    pokemonLevels: [8, 17, 24],
    x: 2719,
    y: 3857,
    walker: true,
  },
  {
    name: "Fighter",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 2992,
    y: 3791,
  },
  {
    name: "Guitarist",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 2992,
    y: 3853,
  },

  // Rt 102
  {
    name: "Youngster",
    numPokemon: 1,
    pokemonLevels: [8],
    x: 1649,
    y: 4255,
  },
  {
    name: "Bug Catcher",
    numPokemon: 2,
    pokemonLevels: [6, 6],
    x: 1520,
    y: 4272,
  },
  {
    name: "Youngster",
    numPokemon: 2,
    pokemonLevels: [6, 5],
    x: 1423,
    y: 4095,
  },
  {
    name: "Lass",
    numPokemon: 2,
    pokemonLevels: [6, 6],
    x: 1249,
    y: 4143,
    spinner: true,
  },

  // Rt 104
  {
    name: "Youngster",
    numPokemon: 2,
    pokemonLevels: [8, 11],
    x: 282,
    y: 4174,
    walker: true,
  },
  {
    name: "Fisherman",
    numPokemon: 1,
    pokemonLevels: [15],
    x: 237,
    y: 4014,
  },
  {
    name: "Lady",
    numPokemon: 1,
    pokemonLevels: [11],
    x: 176,
    y: 3775,
    spinner: true,
  },
  {
    name: "Rich Boy",
    numPokemon: 1,
    pokemonLevels: [11],
    x: 329,
    y: 3469,
    spinner: true,
  },
  {
    name: "Lass",
    numPokemon: 2,
    pokemonLevels: [9, 9],
    x: 496,
    y: 3455,
    spinner: true,
  },
  {
    name: "Twin Girls",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 433,
    y: 3314,
  },
  {
    name: "Fisherman",
    numPokemon: 3,
    pokemonLevels: [8, 9, 11],
    x: 463,
    y: 3200,
  },

  // Petalburg Woods
  {
    name: "Bug Catcher",
    numPokemon: 4,
    pokemonLevels: [5, 5, 5, 5],
    x: 722,
    y: 3684,
  },
  {
    name: "Aqua Grunt",
    numPokemon: 1,
    pokemonLevels: [15],
    x: 1026,
    y: 3515,
  },
  {
    name: "Bug Catcher",
    numPokemon: 2,
    pokemonLevels: [9],
    x: 674,
    y: 3400,
  },

  // Rustboro City
  {
    name: "Rival",
    numPokemon: 2,
    pokemonLevels: [21, 24],
    x: 257,
    y: 2914,
  },

  // Rt 115
  {
    name: "Fighter",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 432,
    y: 1683,
    spinner: true,
  },
  {
    name: "Battle Girl",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 241,
    y: 1638,
  },
  {
    name: "Lass",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 448,
    y: 1824,
  },
  {
    name: "Bug Maniac",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 348,
    y: 1824,
    spinner: true,
  },

  // Rt 116
  {
    name: "Bug Catcher",
    numPokemon: 2,
    pokemonLevels: [12, 12],
    x: 849,
    y: 2383,
    spinner: true,
  },
  {
    name: "Youngster",
    numPokemon: 1,
    pokemonLevels: [15],
    x: 834,
    y: 2226,
  },
  {
    name: "School Girl",
    numPokemon: 1,
    pokemonLevels: [15],
    x: 993,
    y: 2369,
  },
  {
    name: "Youngster",
    numPokemon: 2,
    pokemonLevels: [12, 12],
    x: 1217,
    y: 2321,
  },
  {
    name: "Hiker",
    numPokemon: 1,
    pokemonLevels: [12],
    x: 1217,
    y: 2383,
    spinner: true,
  },
  {
    name: "Hiker",
    numPokemon: 2,
    pokemonLevels: [12, 12],
    x: 1313,
    y: 2320,
  },
  {
    name: "Lady",
    numPokemon: 2,
    pokemonLevels: [12, 12],
    x: 1168,
    y: 2237,
  },
  {
    name: "Rich Boy",
    numPokemon: 2,
    pokemonLevels: [12, 12],
    x: 1169,
    y: 2191,
  },
  {
    name: "Lass",
    numPokemon: 1,
    pokemonLevels: [15],
    x: 1055,
    y: 2207,
  },
  {
    name: "School Boy",
    numPokemon: 1,
    pokemonLevels: [15],
    x: 1088,
    y: 2235,
  },

  // Rusturf Tunnel
  {
    name: "Aqua Grunt",
    numPokemon: 1,
    pokemonLevels: [18],
    x: 1531,
    y: 2521,
  },
  {
    name: "Hiker",
    numPokemon: 3,
    pokemonLevels: [26, 26, 26],
    x: 1838,
    y: 2650,
  },

  // Rt 106
  {
    name: "Fisherman",
    numPokemon: 1,
    pokemonLevels: [18],
    x: 1043,
    y: 5855,
    spinner: true,
  },
  {
    name: "Fisherman",
    numPokemon: 3,
    pokemonLevels: [17, 11, 17],
    x: 817,
    y: 5856,
  },

  // Rt 109
  {
    name: "Sailor",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3439,
    y: 5581,
  },
  {
    name: "Tuber Girl",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 3471,
    y: 5524,
  },
  {
    name: "Tuber Boy",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 3504,
    y: 5479,
    // TODO: not sure if spinner
    spinner: true,
  },
  {
    name: "Tuber Girl",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3551,
    y: 5429,
  },
  {
    name: "Tuber Boy",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3631,
    y: 5432,
    spinner: true,
  },
  {
    name: "Sailor",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 3584,
    y: 5521,
    spinner: true,
  },

  // Seashore House
  // TODO: locations
  // ~3:27:00 of video
  {
    name: "Tuber Boy",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 0,
    y: 0,
  },
  {
    name: "Beauty",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 0,
    y: 0,
  },
  {
    name: "Sailor",
    numPokemon: 3,
    pokemonLevels: [18, 18, 18],
    x: 0,
    y: 0,
  },

  // Oceanic Museum
  {
    name: "Aqua Grunt",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 3892,
    y: 4770,
  },
  {
    name: "Aqua Grunt",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3893,
    y: 4752,
  },

  // Rt 110
  {
    name: "Pokefan Woman",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3363,
    y: 3962,
  },
  {
    name: "Pokefan Man",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3313,
    y: 3962,
  },
  {
    name: "Youngster",
    numPokemon: 2,
    pokemonLevels: [24, 21],
    x: 3729,
    y: 3855,
    spinner: true,
  },
  {
    name: "Rival",
    numPokemon: 3,
    pokemonLevels: [29, 32, 20],
    x: 3744,
    y: 3600,
  },
  {
    name: "Bug Maniac",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3745,
    y: 3393,
  },
  {
    name: "Guitarist",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3777,
    y: 3393,
  },
  {
    name: "Biker Girl",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 3354,
    y: 3375,
  },
  {
    name: "Psychic Boy",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 3249,
    y: 3378,
  },
  {
    name: "Fisherman",
    numPokemon: 4,
    pokemonLevels: [18, 23, 18, 23],
    x: 3360,
    y: 3055,
  },

  // Trick House
  {
    name: "Lass",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 3181,
    y: 4349,
  },
  {
    name: "Youngster",
    numPokemon: 2,
    pokemonLevels: [23, 26],
    x: 3181,
    y: 4159,
  },
  {
    name: "Lass",
    numPokemon: 3,
    pokemonLevels: [23, 23, 23],
    x: 2987,
    y: 4270,
  },

  // Mauville
  {
    name: "Wally",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 3328,
    y: 2531,
  },

  // Cycling Road
  {
    name: "Psychic",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 3730,
    y: 2992,
  },
  // TODO: might not be a trainer?
  {
    name: "Biker Girl",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 3631,
    y: 3112,
    walker: true,
  },
  {
    name: "Biker Girl",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 3675,
    y: 3250,
  },
  {
    name: "Biker Boy",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 3383,
    y: 3232,
    walker: true,
  },
  {
    name: "Biker Boy",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 3459,
    y: 3610,
    walker: true,
  },
  {
    name: "Biker Girl",
    numPokemon: 3,
    pokemonLevels: [23, 9, 23],
    x: 3456,
    y: 3865,
    walker: true,
  },
  {
    name: "Biker Boy",
    numPokemon: 3,
    pokemonLevels: [9, 23, 9],
    x: 3505,
    y: 4000,
    walker: true,
  },

  // Rt 118
  {
    name: "Youngster",
    numPokemon: 3,
    pokemonLevels: [23, 23, 23],
    x: 3952,
    y: 2544,
  },
  {
    name: "Lady",
    numPokemon: 3,
    pokemonLevels: [23, 23, 23],
    x: 3952,
    y: 2623,
  },
  {
    name: "Fisherman",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 4068,
    y: 2659,
  },
  {
    name: "Guitarist",
    numPokemon: 2,
    pokemonLevels: [24, 24],
    x: 4121,
    y: 2612,
  },

  // Rt 117
  // TODO: Lass Twins
  {
    name: "Triathelete Boy",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 2910,
    y: 2688,
    walker: true,
  },
  {
    name: "Breeder Boy",
    numPokemon: 6,
    pokemonLevels: [18, 18, 18, 18, 18, 18],
    x: 2769,
    y: 2607,
    spinner: true,
  },
  {
    name: "Triathelete Girl",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 2643,
    y: 2607,
    walker: true,
  },
  {
    name: "Triathelete Girl",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 2528,
    y: 2498,
    walker: true,
  },
  {
    name: "Battle Girl",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 2577,
    y: 2498,
  },
  {
    name: "Psychic",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 2480,
    y: 2498,
  },
  {
    name: "Bug Maniac",
    numPokemon: 2,
    pokemonLevels: [26, 26],
    x: 2512,
    y: 2626,
  },
  {
    name: "Breeder Girl",
    numPokemon: 6,
    pokemonLevels: [18, 18, 18, 18, 18, 18],
    x: 2369,
    y: 2592,
  },

  // Rt 111
  {
    name: "Lady",
    numPokemon: 1,
    pokemonLevels: [29],
    x: 3520,
    y: 2303,
  },
  {
    name: "Camper Boy",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 3616,
    y: 2303,
  },
  {
    name: "Camper Girl",
    numPokemon: 1,
    pokemonLevels: [29],
    x: 3505,
    y: 2128,
  },
  {
    name: "Guitarist",
    numPokemon: 1,
    pokemonLevels: [29],
    x: 3457,
    y: 2095,
  },
  {
    name: "Winstrate Dad",
    numPokemon: 2,
    pokemonLevels: [26, 26],
    x: 3409,
    y: 2015,
  },
  {
    name: "Winstrate Mom",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 3425,
    y: 2015,
  },
  {
    name: "Winstrate Sister",
    numPokemon: 3,
    pokemonLevels: [24, 24, 24],
    x: 3441,
    y: 2015,
  },
  {
    name: "Winstrate Grandma",
    numPokemon: 1,
    pokemonLevels: [29],
    x: 3457,
    y: 2015,
  },
  {
    name: "Camper Girl",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 3361,
    y: 1505,
  },
  {
    name: "Camper Boy",
    numPokemon: 1,
    pokemonLevels: [29],
    x: 3378,
    y: 1327,
  },
  {
    name: "Camper Boy",
    numPokemon: 1,
    pokemonLevels: [29],
    x: 3027,
    y: 1295,
  },
  {
    name: "Camper Girl",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 2912,
    y: 1248,
    spinner: true,
  },
  {
    name: "Hiker",
    numPokemon: 3,
    pokemonLevels: [26, 27, 26],
    x: 2798,
    y: 1152,
  },
  {
    name: "Hiker",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 2941,
    y: 1059,
    spinner: true,
  },

  // Rt 113
  {
    name: "Lady",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 3055,
    y: 688,
    spinner: true,
  },
  {
    name: "Guitarist",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 3055,
    y: 624,
    spinner: true,
  },
  {
    name: "Cooltrainer Boy",
    numPokemon: 3,
    pokemonLevels: [27, 27, 27],
    x: 3344,
    y: 627,
  },
  {
    name: "Fighter",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 3718,
    y: 659,
    walker: true,
  },
  {
    name: "Cooltrainer Girl",
    numPokemon: 3,
    pokemonLevels: [27, 27, 27],
    x: 3375,
    y: 370,
  },
  {
    name: "Youngster",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 2593,
    y: 320,
  },
  {
    name: "Ninja Boy",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 2739,
    y: 230,
  },
  {
    name: "Camper Boy",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 2739,
    y: 257,
  },
  {
    name: "Bug Maniac",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 2800,
    y: 240,
  },
  {
    name: "Cooltrainer Girl",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 2416,
    y: 369,
    spinner: true,
  },
  {
    name: "Young Girl Twins",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 2323,
    y: 290,
  },
  {
    name: "Ninja Boy",
    numPokemon: 3,
    pokemonLevels: [27, 27, 27],
    x: 2065,
    y: 293,
  },
  {
    name: "Youngster",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 1938,
    y: 368,
  },
  {
    name: "Camper Girl",
    numPokemon: 2,
    pokemonLevels: [27, 30],
    x: 1712,
    y: 323,
    walker: true,
  },
  {
    name: "Guitarist",
    numPokemon: 2,
    pokemonLevels: [27, 30],
    x: 1712,
    y: 382,
    walker: true,
  },

  // Rt 114
  {
    name: "Fisherman",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 1040,
    y: 288,
  },
  {
    name: "Fisherman",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 1088,
    y: 449,
    spinner: true,
  },
  {
    name: "Camper Girl",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 1088,
    y: 511,
  },
  {
    name: "Fisherman",
    numPokemon: 3,
    pokemonLevels: [26, 27, 29],
    x: 944,
    y: 607,
  },
  {
    name: "Camper Girl",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 944,
    y: 755,
    spinner: true,
  },
  {
    name: "Lass Twins",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 1008,
    y: 896,
  },
  {
    name: "Camper Boy",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 992,
    y: 990,
  },
  {
    name: "Bug Maniac",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 961,
    y: 1088,
  },
  {
    name: "Guitarist",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 1121,
    y: 1120,
    spinner: true,
  },
  {
    name: "Hiker",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 1121,
    y: 1343,
    spinner: true,
  },
  {
    name: "Camper Girl",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 1055,
    y: 1343,
    spinner: true,
  },
  {
    name: "Hiker",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 878,
    y: 1231,
  },

  // Mt. Chimney
  {
    name: "Magma Grunt Girl",
    numPokemon: 1,
    pokemonLevels: [32],
    x: 1976,
    y: 763,
  },
  {
    name: "Magma Grunt Boy",
    numPokemon: 1,
    pokemonLevels: [32],
    x: 1908,
    y: 763,
  },
  {
    name: "Magma Leader",
    numPokemon: 4,
    pokemonLevels: [29, 32, 35, 35],
    x: 1962,
    y: 684,
  },
  {
    name: "Maxie",
    numPokemon: 6,
    pokemonLevels: [38, 38, 38, 38, 38, 41],
    x: 1962,
    y: 684,
  },

  // Jagged Pass
  {
    name: "Hiker",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 1442,
    y: 639,
  },
  {
    name: "Magma Grunt Boy",
    numPokemon: 2,
    pokemonLevels: [35, 35],
    x: 1537,
    y: 813,
  },
  {
    name: "Camper Girl",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 1427,
    y: 849,
    spinner: true,
  },
  {
    name: "Camper Girl",
    numPokemon: 1,
    pokemonLevels: [33],
    x: 1507,
    y: 911,
    spinner: true,
  },
  {
    name: "Bike Boy",
    numPokemon: 1,
    pokemonLevels: [33],
    x: 1570,
    y: 910,
  },
  {
    name: "Camper Boy",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 1536,
    y: 1073,
    spinner: true,
  },

  // Lavaridge Town
  {
    name: "Hiker",
    numPokemon: 0,
    pokemonLevels: [0],
    x: 2688,
    y: 1322,
    walker: true,
  },
];
