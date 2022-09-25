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

  // Petalburg City
  {
    x: 947,
    y: 3912,
    type: ItemType.Normal,
  },
  {
    x: 817,
    y: 4340,
    type: ItemType.Hidden,
  },
  {
    x: 691,
    y: 4327,
    type: ItemType.Normal,
  },

  // Rt 104
  {
    x: 248,
    y: 4236,
    type: ItemType.Hidden,
  },
  {
    x: 247,
    y: 4105,
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
  {
    x: 626,
    y: 3317,
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
  {
    x: 193,
    y: 1066,
    type: ItemType.Normal,
  },
  {
    x: 290,
    y: 951,
    type: ItemType.TM,
  },
  {
    x: 371,
    y: 1300,
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
    y: 5300,
    type: ItemType.Normal,
  },
  {
    x: 900,
    y: 4705,
    type: ItemType.Hidden,
  },
  {
    x: 726,
    y: 4595,
    type: ItemType.Normal,
  },
  {
    x: 1125,
    y: 4592,
    type: ItemType.Normal,
  },
  {
    x: 1108,
    y: 4623,
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
  {
    x: 3618,
    y: 3513,
    type: ItemType.Normal,
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
  {
    x: 4338,
    y: 2647,
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
  {
    x: 3249,
    y: 2024,
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
  {
    x: 1953,
    y: 280,
    type: ItemType.TM,
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
  {
    x: 755,
    y: 295,
    type: ItemType.Normal,
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
  {
    x: 674,
    y: 1509,
    type: ItemType.TM,
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

  // Fiery Path
  {
    x: 2811,
    y: 2012,
    type: ItemType.Normal,
  },
  {
    x: 2832,
    y: 1556,
    type: ItemType.TM,
  },

  // Desert
  {
    x: 3394,
    y: 1063,
    type: ItemType.Normal,
  },
  {
    x: 3497,
    y: 1072,
    type: ItemType.Hidden,
  },
  {
    x: 3762,
    y: 1255,
    type: ItemType.Hidden,
  },
  {
    x: 3618,
    y: 1319,
    type: ItemType.Hidden,
  },
  {
    x: 3730,
    y: 1864,
    type: ItemType.TM,
  },

  // Rt 105
  {
    x: 242,
    y: 5450,
    type: ItemType.Hidden,
  },
  {
    x: 128,
    y: 5527,
    type: ItemType.Normal,
  },
  {
    x: 461,
    y: 5864,
    type: ItemType.Normal,
  },
  {
    x: 81,
    y: 5250,
    type: ItemType.Hidden,
  },

  // Rt 107
  {
    x: 2914,
    y: 6022,
    type: ItemType.Normal,
  },
  {
    x: 2850,
    y: 6183,
    type: ItemType.Hidden,
  },
  {
    x: 3327,
    y: 5989,
    type: ItemType.Hidden,
  },
  {
    x: 3635,
    y: 6057,
    type: ItemType.Normal,
  },

  // TODO: New Mauville route at ~40mins
  {
    x: 2798,
    y: 3113,
    type: ItemType.Normal,
  },
  {
    x: 2575,
    y: 2938,
    type: ItemType.Normal,
  },
  {
    x: 2815,
    y: 2921,
    type: ItemType.Normal,
  },
  {
    x: 3166,
    y: 2826,
    type: ItemType.Normal,
  },
  {
    x: 3054,
    y: 3161,
    type: ItemType.Normal,
  },

  // Rt 119
  {
    x: 4946,
    y: 2549,
    type: ItemType.Normal,
  },
  {
    x: 4673,
    y: 2137,
    type: ItemType.Normal,
  },
  {
    x: 4898,
    y: 2126,
    type: ItemType.Hidden,
  },
  {
    x: 5010,
    y: 2074,
    type: ItemType.Normal,
  },
  {
    x: 4544,
    y: 1735,
    type: ItemType.Normal,
  },
  {
    x: 4754,
    y: 1509,
    type: ItemType.Hidden,
  },
  {
    x: 4865,
    y: 872,
    type: ItemType.Normal,
  },
  {
    x: 4801,
    y: 662,
    type: ItemType.Hidden,
  },
  {
    x: 5090,
    y: 1204,
    type: ItemType.Hidden,
  },
  {
    x: 4881,
    y: 1418,
    type: ItemType.Normal,
  },
  {
    x: 4786,
    y: 279,
    type: ItemType.Normal,
  },
  {
    x: 4608,
    y: 488,
    type: ItemType.Normal,
  },
  {
    x: 4531,
    y: 1094,
    type: ItemType.Normal,
  },

  // Rt 120
  {
    x: 5906,
    y: 211,
    type: ItemType.Hidden,
  },
  {
    x: 6258,
    y: 374,
    type: ItemType.Hidden,
  },
  {
    x: 6114,
    y: 405,
    type: ItemType.Normal,
  },
  {
    x: 6146,
    y: 727,
    type: ItemType.Normal,
  },
  {
    x: 6145,
    y: 874,
    type: ItemType.Hidden,
  },
  {
    x: 6082,
    y: 1082,
    type: ItemType.Normal,
  },
  {
    x: 6130,
    y: 1512,
    type: ItemType.Normal,
  },
  {
    x: 5872,
    y: 1622,
    type: ItemType.Normal,
  },
  {
    x: 5762,
    y: 1575,
    type: ItemType.Hidden,
  },

  // Rt 121
  {
    x: 6770,
    y: 1638,
    type: ItemType.Hidden,
  },
  {
    x: 7009,
    y: 1686,
    type: ItemType.Normal,
  },
  {
    x: 7360,
    y: 1640,
    type: ItemType.Normal,
  },
  {
    x: 7553,
    y: 1559,
    type: ItemType.Hidden,
  },
  {
    x: 7329,
    y: 1528,
    type: ItemType.Hidden,
  },
  {
    x: 7490,
    y: 1607,
    type: ItemType.Hidden,
  },
  {
    x: 7282,
    y: 1638,
    type: ItemType.Normal,
  },

  // Safari Zone
  {
    x: 6408,
    y: 1266,
    type: ItemType.Normal,
  },
  {
    x: 7158,
    y: 129,
    type: ItemType.Normal,
  },
  {
    x: 8022,
    y: 114,
    type: ItemType.Hidden,
  },
  {
    x: 8180,
    y: 594,
    type: ItemType.Hidden,
  },
  {
    x: 8182,
    y: 914,
    type: ItemType.Normal,
  },
  {
    x: 8198,
    y: 1201,
    type: ItemType.Hidden,
  },
  {
    x: 7990,
    y: 1249,
    type: ItemType.Hidden,
  },
  {
    x: 7812,
    y: 307,
    type: ItemType.Normal,
  },

  // Lilycove City
  {
    x: 8658,
    y: 1430,
    type: ItemType.Hidden,
  },
  {
    x: 8707,
    y: 1815,
    type: ItemType.Hidden,
  },
  {
    x: 8257,
    y: 1815,
    type: ItemType.Hidden,
  },
  {
    x: 8659,
    y: 1896,
    type: ItemType.Normal,
  },

  // Rt 123
  {
    x: 5553,
    y: 2726,
    type: ItemType.Normal,
  },
  {
    x: 5314,
    y: 2453,
    type: ItemType.Hidden,
  },
  {
    x: 7330,
    y: 2721,
    type: ItemType.Hidden,
  },
  {
    x: 7345,
    y: 2674,
    type: ItemType.Hidden,
  },
  {
    x: 6578,
    y: 2678,
    type: ItemType.Hidden,
  },
  {
    x: 6321,
    y: 2456,
    type: ItemType.Hidden,
  },
  {
    x: 6322,
    y: 2583,
    type: ItemType.Normal,
  },
  {
    x: 5617,
    y: 2569,
    type: ItemType.Normal,
  },
  {
    x: 6033,
    y: 2696,
    type: ItemType.Normal,
  },
  {
    x: 5809,
    y: 2685,
    type: ItemType.Normal,
  },

  // Mt Pyre
  {
    x: 6937,
    y: 3765,
    type: ItemType.Normal,
  },
  {
    x: 6937,
    y: 3510,
    type: ItemType.Normal,
  },
  {
    x: 7034,
    y: 2914,
    type: ItemType.TM,
  },
  {
    x: 7034,
    y: 3154,
    type: ItemType.Normal,
  },
  {
    x: 6986,
    y: 3364,
    type: ItemType.Normal,
  },

  // Mt Pyre Outside
  {
    x: 7512,
    y: 4001,
    type: ItemType.TM,
  },
  {
    x: 7641,
    y: 3603,
    type: ItemType.Normal,
  },
  {
    x: 7465,
    y: 3713,
    type: ItemType.Hidden,
  },
  {
    x: 7352,
    y: 3491,
    type: ItemType.Hidden,
  },
  {
    x: 7744,
    y: 2882,
    type: ItemType.Hidden,
  },
  {
    x: 7296,
    y: 3170,
    type: ItemType.Hidden,
  },

  // Magma Hideout
  {
    x: 4980,
    y: 3550,
    type: ItemType.Normal,
  },
  {
    x: 5053,
    y: 3145,
    type: ItemType.Normal,
  },
  {
    x: 5415,
    y: 2962,
    type: ItemType.Normal,
  },
  {
    x: 5636,
    y: 3455,
    type: ItemType.Normal,
  },
  {
    x: 3894,
    y: 3080,
    type: ItemType.Normal,
  },
  {
    x: 5523,
    y: 3437,
    type: ItemType.Normal,
  },
  {
    x: 3990,
    y: 3676,
    type: ItemType.Normal,
  },

  // Aqua Hideout
  {
    x: 9426,
    y: 950,
    type: ItemType.Normal,
  },
  {
    x: 9202,
    y: 917,
    type: ItemType.Normal,
  },
  {
    x: 9202,
    y: 901,
    type: ItemType.Normal,
  },
  {
    x: 9830,
    y: 965,
    type: ItemType.Normal,
  },

  // Rt 124
  {
    x: 9408,
    y: 1333,
    type: ItemType.Normal,
  },
  {
    x: 9896,
    y: 1322,
    type: ItemType.Normal,
  },

  // Rt 125
  {
    x: 10976,
    y: 1416,
    type: ItemType.Normal,
  },

  // Shoal Cave

  // High Tide
  {
    x: 11445,
    y: 226,
    type: ItemType.Normal,
  },
  {
    x: 11508,
    y: 629,
    type: ItemType.Normal,
  },

  // Mossdeep City
  {
    x: 11234,
    y: 2343,
    type: ItemType.Normal,
  },

  // Rt 126
  {
    x: 9187,
    y: 2443,
    type: ItemType.Normal,
  },

  // Rt 127
  {
    x: 10466,
    y: 2521,
    type: ItemType.Normal,
  },
  {
    x: 10450,
    y: 2745,
    type: ItemType.Normal,
  },
  {
    x: 11031,
    y: 3848,
    type: ItemType.Hidden,
  },
  {
    x: 11266,
    y: 3047,
    type: ItemType.Normal,
  },

  // Rt 132/133/134
  {
    x: 6560,
    y: 4520,
    type: ItemType.Normal,
  },
  {
    x: 4636,
    y: 4620,
    type: ItemType.Normal,
  },
  {
    x: 6721,
    y: 4775,
    type: ItemType.Normal,
  },
  {
    x: 4194,
    y: 4781,
    type: ItemType.Normal,
  },
  {
    x: 5968,
    y: 4538,
    type: ItemType.Normal,
  },
  {
    x: 5248,
    y: 4502,
    type: ItemType.Normal,
  },
  {
    x: 5890,
    y: 4792,
    type: ItemType.Normal,
  },

  // Underwater
  {
    x: 9089,
    y: 5626,
    type: ItemType.Hidden,
  },
  {
    x: 9586,
    y: 5562,
    type: ItemType.Hidden,
  },
  {
    x: 9538,
    y: 5066,
    type: ItemType.Hidden,
  },
  {
    x: 9923,
    y: 5530,
    type: ItemType.Hidden,
  },
  {
    x: 11987,
    y: 5501,
    type: ItemType.Hidden,
  },
  {
    x: 11633,
    y: 5051,
    type: ItemType.Hidden,
  },
  {
    x: 10630,
    y: 5257,
    type: ItemType.Hidden,
  },
  {
    x: 10327,
    y: 5610,
    type: ItemType.Hidden,
  },
  {
    x: 10310,
    y: 5562,
    type: ItemType.Hidden,
  },
  {
    x: 10343,
    y: 5545,
    type: ItemType.Hidden,
  },
  {
    x: 11191,
    y: 5946,
    type: ItemType.Hidden,
  },
  {
    x: 11158,
    y: 5290,
    type: ItemType.Hidden,
  },
  {
    x: 9986,
    y: 6009,
    type: ItemType.Hidden,
  },
  {
    x: 9890,
    y: 5849,
    type: ItemType.Hidden,
  },
  {
    x: 12242,
    y: 4925,
    type: ItemType.Hidden,
  },
  {
    x: 12594,
    y: 4670,
    type: ItemType.Hidden,
  },
  {
    x: 10295,
    y: 6218,
    type: ItemType.Hidden,
  },
  {
    x: 12050,
    y: 5930,
    type: ItemType.Hidden,
  },
  {
    x: 12548,
    y: 5914,
    type: ItemType.Hidden,
  },
  {
    x: 9539,
    y: 5802,
    type: ItemType.Hidden,
  },

  // Abandoned Ship
  {
    x: 2252,
    y: 5378,
    type: ItemType.Normal,
  },
  {
    x: 2433,
    y: 4887,
    type: ItemType.Normal,
  },
  {
    x: 2152,
    y: 5758,
    type: ItemType.Normal,
  },
  {
    x: 2990,
    y: 5726,
    type: ItemType.Normal,
  },
  {
    x: 3168,
    y: 5708,
    type: ItemType.Hidden,
  },
  {
    x: 2510,
    y: 5743,
    type: ItemType.Hidden,
  },
  {
    x: 2578,
    y: 5727,
    type: ItemType.TM,
  },
  {
    x: 2514,
    y: 5363,
    type: ItemType.Hidden,
  },
  {
    x: 3155,
    y: 5396,
    type: ItemType.Normal,
  },
  {
    x: 2817,
    y: 5412,
    type: ItemType.Hidden,
  },
  {
    x: 2751,
    y: 5710,
    type: ItemType.Normal,
  },

  // Seafloor Cavern
  {
    x: 10222,
    y: 3761,
    type: ItemType.TM,
  },

  // Victory Road
  {
    x: 12191,
    y: 2753,
    type: ItemType.Normal,
  },
  {
    x: 12061,
    y: 1864,
    type: ItemType.Normal,
  },
  {
    x: 12142,
    y: 1318,
    type: ItemType.Hidden,
  },
  {
    x: 12224,
    y: 1946,
    type: ItemType.TM,
  },
  {
    x: 12000,
    y: 1381,
    type: ItemType.Hidden,
  },
  {
    x: 11758,
    y: 1431,
    type: ItemType.Normal,
  },
  {
    x: 12141,
    y: 2958,
    type: ItemType.Normal,
  },
  {
    x: 12030,
    y: 2959,
    type: ItemType.Hidden,
  },

  // TODO: Artisan Cave/Battle Frontier items
  // TODO: S.S. Tidal Items
];
