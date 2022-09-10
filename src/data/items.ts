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
    y: 4277,
    type: ItemType.Normal,
  },

  // Rt 104
  {
    x: 1299,
    y: 4278,
    type: ItemType.Hidden,
  },
  {
    x: 247,
    y: 4090,
    type: ItemType.Hidden,
  },
  {
    x: 229,
    y: 3956,
    type: ItemType.Hidden,
  },
  {
    x: 467,
    y: 3929,
    type: ItemType.Normal,
  },
  {
    x: 49,
    y: 3223,
    type: ItemType.Hidden,
  },
  {
    x: 82,
    y: 3208,
    type: ItemType.Normal,
  },
  {
    x: 113,
    y: 3176,
    type: ItemType.Hidden,
  },
  {
    x: 595,
    y: 3432,
    type: ItemType.Normal,
  },

  // Petalburg Woods
  {
    x: 1235,
    y: 3739,
    type: ItemType.Hidden,
  },
  {
    x: 676,
    y: 3597,
    type: ItemType.Normal,
  },
  {
    x: 676,
    y: 3482,
    type: ItemType.Hidden,
  },
  {
    x: 675,
    y: 3307,
    type: ItemType.Normal,
  },
  {
    x: 1027,
    y: 3274,
    type: ItemType.Hidden,
  },
  {
    x: 1332,
    y: 3298,
    type: ItemType.Normal,
  },
  {
    x: 1252,
    y: 3644,
    type: ItemType.Hidden,
  },
  {
    x: 1172,
    y: 3501,
    type: ItemType.Normal,
  },

  // Rustboro City
  {
    x: 574,
    y: 2933,
    type: ItemType.Normal,
  },

  // Rt 115
  {
    x: 321,
    y: 1799,
    type: ItemType.Normal,
  },

  // Rt 116
  {
    x: 801,
    y: 2390,
    type: ItemType.Normal,
  },
  {
    x: 946,
    y: 2216,
    type: ItemType.Normal,
  },
  {
    x: 1518,
    y: 2312,
    type: ItemType.Normal,
  },
  {
    x: 994,
    y: 2262,
    type: ItemType.Hidden,
  },
  {
    x: 1185,
    y: 2231,
    type: ItemType.Normal,
  },

  // Rusturf Tunnel
  {
    x: 1374,
    y: 2464,
    type: ItemType.Normal,
  },

  // Rt 106
  {
    x: 1094,
    y: 5881,
    type: ItemType.Hidden,
  },
  {
    x: 850,
    y: 5830,
    type: ItemType.Hidden,
  },
  {
    x: 655,
    y: 5816,
    type: ItemType.Hidden,
  },

  // Granite Cave
  {
    x: 1158,
    y: 5500,
    type: ItemType.Normal,
  },
  {
    x: 899,
    y: 2300,
    type: ItemType.Normal,
  },
  {
    x: 900,
    y: 4705,
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
