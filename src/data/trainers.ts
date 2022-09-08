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
    x: 2097,
    y: 3743,
  },

  // Rt 102
  {
    name: "Youngster",
    numPokemon: 1,
    pokemonLevels: [8],
    x: 1649,
    y: 4242,
  },
  {
    name: "Bug Catcher",
    numPokemon: 2,
    pokemonLevels: [6, 6],
    x: 1519,
    y: 4258,
  },
  {
    name: "Youngster",
    numPokemon: 2,
    pokemonLevels: [6, 5],
    x: 1423,
    y: 4080,
  },
  {
    name: "Lass",
    numPokemon: 2,
    pokemonLevels: [6, 6],
    x: 1249,
    y: 4129,
    spinner: true,
  },
];
