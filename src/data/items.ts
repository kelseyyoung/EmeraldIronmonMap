export interface ItemData {
  x: number; // x coordinate of the top-left pixel of this item
  y: number; // y coordinate of the top-left pixel of this item
  type: ItemType; // Type of the item
  spawnInfo?: string; // Special spawn rate information
}

export enum ItemType {
  Normal = 0,
  TM = 1,
  Hidden = 2,
}

export const defaultItemHeight = 12;
export const defaultItemWidth = 12;

export const items: ItemData[] = [
  // Rt 102
  {
    x: 1299,
    y: 4263,
    type: ItemType.Normal,
  },

  // Rt 104
  {
    x: 1299,
    y: 4263,
    type: ItemType.Hidden,
  },
  {
    x: 247,
    y: 4075,
    type: ItemType.Hidden,
  },
  {
    x: 229,
    y: 3941,
    type: ItemType.Hidden,
  },
  {
    x: 467,
    y: 3914,
    type: ItemType.Normal,
  },
  {
    x: 49,
    y: 3208,
    type: ItemType.Hidden,
  },
  {
    x: 82,
    y: 3193,
    type: ItemType.Normal,
  },
  {
    x: 113,
    y: 3161,
    type: ItemType.Hidden,
  },
  {
    x: 595,
    y: 3417,
    type: ItemType.Normal,
  },

  // Petalburg Woods
  {
    x: 1250,
    y: 3711,
    type: ItemType.Hidden,
  },
  {
    x: 689,
    y: 3568,
    type: ItemType.Normal,
  },
  {
    x: 690,
    y: 3453,
    type: ItemType.Hidden,
  },
  {
    x: 689,
    y: 3279,
    type: ItemType.Normal,
  },
  {
    x: 1040,
    y: 3244,
    type: ItemType.Hidden,
  },
  {
    x: 1346,
    y: 3269,
    type: ItemType.Normal,
  },
  {
    x: 1266,
    y: 3615,
    type: ItemType.Hidden,
  },
  {
    x: 1186,
    y: 3462,
    type: ItemType.Normal,
  },

  // Rustboro City
  {
    x: 574,
    y: 2918,
    type: ItemType.Normal,
  },

  // Rt 115
  {
    x: 321,
    y: 1784,
    type: ItemType.Normal,
  },

  // Rt 116
  {
    x: 801,
    y: 2375,
    type: ItemType.Normal,
  },
  {
    x: 946,
    y: 2201,
    type: ItemType.Normal,
  },
  {
    x: 1518,
    y: 2296,
    type: ItemType.Normal,
  },
  {
    x: 994,
    y: 2247,
    type: ItemType.Hidden,
  },

  // Rusturf Tunnel
  {
    x: 1370,
    y: 2451,
    type: ItemType.Normal,
  },

  // Rt 106
  {
    x: 1094,
    y: 5866,
    type: ItemType.Hidden,
  },
  {
    x: 850,
    y: 5815,
    type: ItemType.Hidden,
  },
  {
    x: 655,
    y: 5801,
    type: ItemType.Hidden,
  },

  // Granite Cave
  {
    x: 1160,
    y: 5482,
    type: ItemType.Normal,
  },
  {
    x: 901,
    y: 5282,
    type: ItemType.Normal,
  },
  {
    x: 900,
    y: 4687,
    type: ItemType.Hidden,
  },

  // Rt 109
  {
    x: 3453,
    y: 5677,
    type: ItemType.Hidden,
  },
  {
    x: 3408,
    y: 5560,
    type: ItemType.Hidden,
  },
  {
    x: 3346,
    y: 5464,
    type: ItemType.Hidden,
  },
  {
    x: 3733,
    y: 5380,
    type: ItemType.Hidden,
  },
  {
    x: 3601,
    y: 5416,
    type: ItemType.Normal,
  },
  {
    x: 3654,
    y: 5629,
    type: ItemType.Hidden,
  },
];
