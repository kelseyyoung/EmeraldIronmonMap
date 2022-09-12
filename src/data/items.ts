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

  // Rt 103
  {
    x: 2721,
    y: 3797,
    type: ItemType.Normal,
  },
  {
    x: 2945,
    y: 3830,
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
  {
    x: 241,
    y: 1625,
    type: ItemType.Hidden,
  },
  {
    x: 497,
    y: 1735,
    type: ItemType.Normal,
  },
  {
    x: 418,
    y: 1912,
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
  {
    x: 1808,
    y: 2481,
    type: ItemType.Normal,
  },
  {
    x: 1760,
    y: 2325,
    type: ItemType.Hidden,
  },
  {
    x: 1922,
    y: 2247,
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
    y: 5691,
    type: ItemType.Hidden,
  },
  {
    x: 3408,
    y: 5575,
    type: ItemType.Hidden,
  },
  {
    x: 3346,
    y: 5479,
    type: ItemType.Hidden,
  },
  {
    x: 3733,
    y: 5396,
    type: ItemType.Hidden,
  },
  {
    x: 3601,
    y: 5418,
    type: ItemType.Normal,
  },
  {
    x: 3654,
    y: 5644,
    type: ItemType.Hidden,
  },

  // Rt 110
  {
    x: 3682,
    y: 3863,
    type: ItemType.Normal,
  },
  {
    x: 3794,
    y: 3831,
    type: ItemType.Hidden,
  },
  {
    x: 3730,
    y: 3480,
    type: ItemType.Hidden,
  },
  {
    x: 3762,
    y: 3384,
    type: ItemType.Hidden,
  },
  {
    x: 3295,
    y: 3367,
    type: ItemType.Normal,
  },
  {
    x: 3266,
    y: 3318,
    type: ItemType.Hidden,
  },

  // Trick House
  {
    x: 3100,
    y: 4101,
    type: ItemType.Normal,
  },

  // Mauville
  {
    x: 3650,
    y: 2744,
    type: ItemType.Normal,
  },

  // Rt 118
  {
    x: 4034,
    y: 2664,
    type: ItemType.Hidden,
  },

  // Rt 117
  {
    x: 2385,
    y: 2455,
    type: ItemType.Normal,
  },
  {
    x: 2497,
    y: 2724,
    type: ItemType.Normal,
  },
  {
    x: 2288,
    y: 2722,
    type: ItemType.Hidden,
  },

  // Rt 111
  {
    x: 3505,
    y: 2085,
    type: ItemType.Normal,
  },

  // Rt 113
  {
    x: 2658,
    y: 248,
    type: ItemType.Hidden,
  },
  {
    x: 2865,
    y: 278,
    type: ItemType.Normal,
  },
  {
    x: 2446,
    y: 312,
    type: ItemType.Normal,
  },
  {
    x: 1842,
    y: 441,
    type: ItemType.Normal,
  },
  {
    x: 2770,
    y: 247,
    type: ItemType.Hidden,
  },

  // Fallabor Town
  {
    x: 1313,
    y: 437,
    type: ItemType.Hidden,
  },

  // Rt 114
  {
    x: 754,
    y: 680,
    type: ItemType.Hidden,
  },
  {
    x: 818,
    y: 793,
    type: ItemType.Normal,
  },
  {
    x: 962,
    y: 1111,
    type: ItemType.Hidden,
  },

  // Meteor Falls
  {
    x: 1072,
    y: 1525,
    type: ItemType.Normal,
  },
  {
    x: 672,
    y: 1669,
    type: ItemType.Normal,
  },

  // Jagged Pass
  {
    x: 1412,
    y: 680,
    type: ItemType.Hidden,
  },
  {
    x: 1652,
    y: 908,
    type: ItemType.Normal,
  },
  {
    x: 1394,
    y: 984,
    type: ItemType.Hidden,
  },

  // Lavaridge Town
  {
    x: 2785,
    y: 1208,
    type: ItemType.Normal,
  },
  {
    x: 2306,
    y: 1232,
    type: ItemType.Hidden,
  },
];
