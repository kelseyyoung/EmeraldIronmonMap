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
    y: 5567,
  },
  {
    name: "Tuber Girl",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 3471,
    y: 5500,
  },
  {
    name: "Tuber Boy",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 3504,
    y: 5470,
    // TODO: not sure if spinner
    spinner: true,
  },
  {
    name: "Tuber Girl",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3554,
    y: 5403,
  },
  {
    name: "Tuber Boy",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3631,
    y: 5406,
    spinner: true,
  },
  {
    name: "Sailor",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 3566,
    y: 5506,
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
  // TODO: locations
  // 3:28:00 of video
  {
    name: "Aqua Grunt",
    numPokemon: 1,
    pokemonLevels: [24],
    x: 0,
    y: 0,
  },
  {
    name: "Aqua Grunt",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 0,
    y: 0,
  },

  // Rt 110
];
