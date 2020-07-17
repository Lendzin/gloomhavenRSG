import {Tokens} from './Tokens'
import {EmptySlots} from './EmptySlots'
import {Tiles} from './Tiles'

export const ScenarioCards = {
  Alcove: {
    id: 'Alcove',
    Tiles: [
      {
        Map: Tiles.J2a,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot2, cubeCoord: {r: -2, g: 2, b: 0}},
          {token: EmptySlots.slot3, cubeCoord: {r: -2, g: 3, b: 1}},
          {token: EmptySlots.slot4, cubeCoord: {r: -3, g: 4, b: -1}},
          {token: EmptySlots.slot5, cubeCoord: {r: -4, g: 5, b: -1}},
          {token: EmptySlots.slot6, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: EmptySlots.slot7, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot10, cubeCoord: {r: -4, g: 4, b: 0}},
          {token: EmptySlots.slot11, cubeCoord: {r: -5, g: 5, b: -1}},
          {token: EmptySlots.slot12, cubeCoord: {r: -4, g: 3, b: 1}},
          {token: Tokens.boulder_1, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: Tokens.boulder_1, cubeCoord: {r: -3, g: 3, b: 0}},
          {token: Tokens.boulder_1, cubeCoord: {r: -3, g: 2, b: 1}},
          {token: Tokens.entrance_left, cubeCoord: {r: -1, g: 0, b: 1}},
          {token: Tokens.exit_right, cubeCoord: {r: 4, g: 1, b: -5}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Altar: {
    id: 'Altar',
    Tiles: [
      {
        Map: Tiles.L2b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: -2, g: 4, b: 2}},
          {token: EmptySlots.slot2, cubeCoord: {r: -1, g: 3, b: 2}},
          {token: EmptySlots.slot3, cubeCoord: {r: -1, g: 2, b: 1}},
          {token: EmptySlots.slot4, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot5, cubeCoord: {r: 3, g: 1, b: -4}},
          {token: EmptySlots.slot6, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot7, cubeCoord: {r: 1, g: 6, b: -7}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 5, b: -6}},
          {token: EmptySlots.slot9, cubeCoord: {r: 1, g: 4, b: -5}},
          {token: EmptySlots.slot10, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: EmptySlots.slot11, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot12, cubeCoord: {r: 0, g: 0, b: 0}},
          {token: Tokens.altar, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: Tokens.altar, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: Tokens.stone_pillar, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: Tokens.stone_pillar, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: Tokens.entrance_right, cubeCoord: {r: 3, g: 3, b: -6}},
          {token: Tokens.exit_left, cubeCoord: {r: -2, g: 3, b: -1}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Armory: {
    id: 'Armory',
    Tiles: [
      {
        Map: Tiles.B2b,
        staticRender: [
          {
            token: Tokens.corridor_2_s,
            cubeCoord: {r: 2.5, g: 2, b: -2.5},
          },
          {token: EmptySlots.slot2, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot3, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot7, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot10, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: EmptySlots.slot11, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot12, cubeCoord: {r: -1, g: 3, b: -2}},
          {token: Tokens.exit_left, cubeCoord: {r: -1, g: 1, b: 0}},
          {
            token: Tokens.shelf_2,
            cubeCoord: {r: 0.5, g: 0, b: -0.5},
          },
          {
            token: Tokens.shelf_2,
            cubeCoord: {r: -0.5, g: 2, b: -2.5},
          },
        ],
        offset: {x: 0, y: 0},
      },
      {
        Map: Tiles.A3b,
        staticRender: [
          {token: Tokens.corridor_1_s, cubeCoord: {r: -1, g: 0, b: 1}},
          {token: EmptySlots.slot1, cubeCoord: {r: -1, g: 0, b: 1}},
          {token: EmptySlots.slot4, cubeCoord: {r: 0, g: 1, b: -2}},
          {token: EmptySlots.slot5, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot6, cubeCoord: {r: 0, g: 0, b: 0}},
          {token: Tokens.entrance_right, cubeCoord: {r: 4, g: 0, b: -4}},
          {
            token: Tokens.entrance_right,
            cubeCoord: {r: 3, g: -1, b: -3},
          },
        ],
        offset: {x: 420, y: 90},
      },
    ],
  },
  Burrow: {
    id: 'Burrow',
    Tiles: [
      {
        Map: Tiles.A1a,
        staticRender: [
          {
            token: Tokens.corridor_2_s,
            cubeCoord: {r: 3.5, g: 1, b: -3.5},
          },
          {token: EmptySlots.slot3, cubeCoord: {r: 3, g: 1, b: -4}},
          {token: EmptySlots.slot4, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot9, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: Tokens.entrance_left, cubeCoord: {r: -1, g: 0, b: 1}},
        ],
        offset: {x: 0, y: 0},
      },
      {
        Map: Tiles.A2a,
        staticRender: [
          {token: Tokens.corridor_1_s, cubeCoord: {r: -1, g: 0, b: 1}},
          {token: EmptySlots.slot1, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: EmptySlots.slot2, cubeCoord: {r: -1, g: 0, b: 1}},
          {token: EmptySlots.slot5, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot6, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot7, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot10, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot11, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot12, cubeCoord: {r: 3, g: 1, b: -4}},
          {token: Tokens.exit_right, cubeCoord: {r: 4, g: 0, b: -4}},
          {token: Tokens.boulder_1, cubeCoord: {r: 2, g: 0, b: -2}},
        ],
        offset: {x: 520, y: 0},
      },
    ],
  },
  Cabin: {
    id: 'Cabin',
    Tiles: [
      {
        Map: Tiles.I2b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 3, g: 2, b: -5}},
          {token: EmptySlots.slot2, cubeCoord: {r: 4, g: 0, b: -4}},
          {token: EmptySlots.slot3, cubeCoord: {r: 5, g: 0, b: 5}},
          {token: EmptySlots.slot4, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot5, cubeCoord: {r: 1, g: 4, b: -5}},
          {token: EmptySlots.slot6, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot7, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot9, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot10, cubeCoord: {r: 2, g: 4, b: -6}},
          {token: EmptySlots.slot11, cubeCoord: {r: 3, g: 3, b: -6}},
          {token: EmptySlots.slot12, cubeCoord: {r: 3, g: 4, b: 7}},
          {token: Tokens.table_2, cubeCoord: {r: 0.5, g: 3, b: -3.5}},
          {token: Tokens.barrel, cubeCoord: {r: 4, g: 1, b: -5}},
          {token: Tokens.cabinet, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: Tokens.cabinet, cubeCoord: {r: 4, g: 2, b: -6}},
          {token: Tokens.entrance_left, cubeCoord: {r: 3, g: -1, b: -2}},
          {token: Tokens.exit_right, cubeCoord: {r: 0, g: 5, b: -5}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Cave: {
    id: 'Cave',
    Tiles: [
      {
        Map: Tiles.E1b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot2, cubeCoord: {r: 2, g: 3, b: -5}},
          {token: EmptySlots.slot3, cubeCoord: {r: -1, g: 3, b: 2}},
          {token: EmptySlots.slot4, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: EmptySlots.slot5, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot6, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot7, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot9, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot10, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot11, cubeCoord: {r: 0, g: 0, b: 0}},
          {token: EmptySlots.slot12, cubeCoord: {r: 1, g: 4, b: -5}},
          {token: Tokens.rock_column, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: Tokens.rock_column, cubeCoord: {r: -1, g: 2, b: -1}},
          {token: Tokens.rock_column, cubeCoord: {r: 1, g: 3, b: -4}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -2, g: 5, b: -3},
          },
          {token: Tokens.exit_right, cubeCoord: {r: 3, g: 2, b: -5}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Clearing: {
    id: 'Clearing',
    Tiles: [
      {
        Map: Tiles.L3a,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: EmptySlots.slot2, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot4, cubeCoord: {r: -1, g: 6, b: -5}},
          {token: EmptySlots.slot5, cubeCoord: {r: 0, g: 6, b: -6}},
          {token: EmptySlots.slot6, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot7, cubeCoord: {r: -1, g: 2, b: -1}},
          {token: EmptySlots.slot8, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot9, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot10, cubeCoord: {r: -2, g: 4, b: -2}},
          {token: EmptySlots.slot11, cubeCoord: {r: -2, g: 5, b: -3}},
          {token: EmptySlots.slot12, cubeCoord: {r: -2, g: 6, b: -4}},
          {
            token: Tokens.entrance_right,
            cubeCoord: {r: 3, g: 3, b: -6},
          },

          {token: Tokens.exit_left, cubeCoord: {r: -2, g: 3, b: -1}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Corridor: {
    id: 'Corridor',
    Tiles: [
      {
        Map: Tiles.F1a,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot2, cubeCoord: {r: -1, g: 3, b: -2}},
          {token: EmptySlots.slot3, cubeCoord: {r: -1, g: 5, b: -4}},
          {token: EmptySlots.slot4, cubeCoord: {r: -2, g: 5, b: -3}},
          {token: EmptySlots.slot5, cubeCoord: {r: -2, g: 6, b: -4}},
          {token: EmptySlots.slot6, cubeCoord: {r: -3, g: 6, b: -3}},
          {token: EmptySlots.slot7, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: EmptySlots.slot8, cubeCoord: {r: -1, g: 2, b: -1}},
          {token: EmptySlots.slot9, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot10, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot11, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot12, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: Tokens.altar, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: Tokens.altar, cubeCoord: {r: -1, g: 6, b: -5}},
          {token: Tokens.altar, cubeCoord: {r: -2, g: 4, b: -2}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -3, g: 9, b: -6},
          },

          {token: Tokens.exit_left, cubeCoord: {r: -1, g: 1, b: 0}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Crossroads: {
    id: 'Crossroads',
    Tiles: [
      {
        Map: Tiles.H2b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 0, g: 5, b: -5}},
          {token: EmptySlots.slot2, cubeCoord: {r: -1, g: 6, b: -5}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot4, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot5, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot6, cubeCoord: {r: 5, g: 1, b: -6}},
          {token: EmptySlots.slot7, cubeCoord: {r: 5, g: 0, b: -5}},
          {token: EmptySlots.slot8, cubeCoord: {r: 4, g: 1, b: -5}},
          {token: EmptySlots.slot9, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot10, cubeCoord: {r: 1, g: 4, b: -5}},
          {token: EmptySlots.slot11, cubeCoord: {r: 1, g: 5, b: -6}},
          {token: EmptySlots.slot12, cubeCoord: {r: 0, g: 6, b: -6}},
          {token: Tokens.totem, cubeCoord: {r: 2, g: 2, b: -4}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -1, g: 0, b: 1},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 6, g: 0, b: -6}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  DeadEnd: {
    id: 'DeadEnd',
    Tiles: [
      {
        Map: Tiles.K1b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 2, g: 3, b: -5}},
          {token: EmptySlots.slot2, cubeCoord: {r: 3, g: 2, b: -5}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: EmptySlots.slot4, cubeCoord: {r: 2, g: 5, b: -7}},
          {token: EmptySlots.slot5, cubeCoord: {r: 3, g: 4, b: -7}},
          {token: EmptySlots.slot6, cubeCoord: {r: 1, g: 5, b: -6}},
          {token: EmptySlots.slot7, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot8, cubeCoord: {r: 0, g: 0, b: 0}},
          {token: EmptySlots.slot9, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: EmptySlots.slot10, cubeCoord: {r: -3, g: 4, b: -1}},
          {token: EmptySlots.slot11, cubeCoord: {r: -3, g: 5, b: -2}},
          {token: EmptySlots.slot12, cubeCoord: {r: -4, g: 5, b: -1}},
          {token: Tokens.stalagmites, cubeCoord: {r: -3, g: 3, b: 0}},
          {token: Tokens.stalagmites, cubeCoord: {r: -1, g: 3, b: -2}},
          {token: Tokens.rock_column, cubeCoord: {r: -1, g: 2, b: -1}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: 2, g: -1, b: -1},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 3, g: 5, b: -8}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Den: {
    id: 'Den',
    Tiles: [
      {
        Map: Tiles.D2b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: EmptySlots.slot2, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot3, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: EmptySlots.slot4, cubeCoord: {r: -1, g: 4, b: -3}},
          {token: EmptySlots.slot5, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot6, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: EmptySlots.slot7, cubeCoord: {r: -1, g: 2, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: -2, g: 3, b: -1}},
          {token: EmptySlots.slot9, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot10, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot11, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot12, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: Tokens.nest, cubeCoord: {r: 0, g: 3, b: -3}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -2, g: 1, b: 1},
          },

          {token: Tokens.exit_right, cubeCoord: {r: -2, g: 5, b: -3}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Encampment: {
    id: 'Encampment',
    Tiles: [
      {
        Map: Tiles.M1b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot2, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot4, cubeCoord: {r: -1, g: 4, b: -3}},
          {token: EmptySlots.slot5, cubeCoord: {r: -1, g: 3, b: -2}},
          {token: EmptySlots.slot6, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: EmptySlots.slot7, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: EmptySlots.slot8, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: -2, g: 5, b: -3}},
          {token: EmptySlots.slot10, cubeCoord: {r: 0, g: 6, b: -6}},
          {token: EmptySlots.slot11, cubeCoord: {r: 2, g: 4, b: -6}},
          {token: EmptySlots.slot12, cubeCoord: {r: 1, g: 5, b: -6}},
          {token: Tokens.nest, cubeCoord: {r: 0, g: 3, b: -3}},
          {
            token: Tokens.skew_log_2,
            cubeCoord: {r: -0.5, g: 1.5, b: -1},
          },
          {token: Tokens.skew_log_2, cubeCoord: {r: 0.5, g: 4.5, b: -5}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -3, g: 3, b: 0},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 4, g: 0, b: -4}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Hallway: {
    id: 'Hallway',
    Tiles: [
      {
        Map: Tiles.G2b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot2, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot4, cubeCoord: {r: 3, g: 1, b: -4}},
          {token: EmptySlots.slot5, cubeCoord: {r: 4, g: 0, b: -4}},
          {token: EmptySlots.slot6, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot7, cubeCoord: {r: 5, g: 0, b: -5}},
          {token: EmptySlots.slot8, cubeCoord: {r: 6, g: 0, b: -6}},
          {token: EmptySlots.slot9, cubeCoord: {r: 5, g: 1, b: -6}},
          {token: EmptySlots.slot10, cubeCoord: {r: 4, g: 2, b: -6}},
          {token: EmptySlots.slot11, cubeCoord: {r: 5, g: 2, b: -7}},
          {token: EmptySlots.slot12, cubeCoord: {r: 6, g: 2, b: -8}},
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -1, g: 1, b: 0},
          },
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -1, g: 3, b: -2},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 7, g: 1, b: -8}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Hovel: {
    id: 'Hovel',
    Tiles: [
      {
        Map: Tiles.B2a,
        staticRender: [
          {
            token: Tokens.corridor_2_w,
            cubeCoord: {r: -0.5, g: 4, b: -3.5},
          },

          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: EmptySlots.slot4, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot5, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot6, cubeCoord: {r: -1, g: 4, b: -3}},
          {token: EmptySlots.slot7, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot11, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: Tokens.table_2, cubeCoord: {r: 1.5, g: 2, b: -3.5}},
          {token: Tokens.entrance_left, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: Tokens.entrance_left, cubeCoord: {r: 2, g: -1, b: -1}},
        ],
        offset: {x: 0, y: -60},
      },
      {
        Map: Tiles.C1b_rotated,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot2, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot8, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: EmptySlots.slot10, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot12, cubeCoord: {r: -1, g: 2, b: -1}},
          {token: Tokens.exit_right, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: Tokens.crate, cubeCoord: {r: 0, g: 2, b: -2}},
        ],
        offset: {x: 6, y: 373},
      },
    ],
  },
  Library: {
    id: 'Library',
    Tiles: [
      {
        Map: Tiles.M1a,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot2, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 4, b: -5}},
          {token: EmptySlots.slot4, cubeCoord: {r: -2, g: 4, b: -2}},
          {token: EmptySlots.slot5, cubeCoord: {r: -2, g: 5, b: -3}},
          {token: EmptySlots.slot6, cubeCoord: {r: -2, g: 6, b: -4}},
          {token: EmptySlots.slot7, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot10, cubeCoord: {r: 0, g: 5, b: -5}},
          {token: EmptySlots.slot11, cubeCoord: {r: 1, g: 5, b: -6}},
          {token: EmptySlots.slot12, cubeCoord: {r: 0, g: 6, b: -6}},
          {
            token: Tokens.skew_bookcase_2,
            cubeCoord: {r: 2, g: 3.5, b: -5.5},
          },
          {
            token: Tokens.skew_bookcase_2,
            cubeCoord: {r: -1, g: 5.5, b: -4.5},
          },
          {
            token: Tokens.skew_bookcase_2,
            cubeCoord: {r: -3, g: 4.5, b: -2.5},
          },
          {
            token: Tokens.skew_bookcase_2,
            cubeCoord: {r: 0, g: 0.5, b: -0.5},
          },
          {
            token: Tokens.stone_pillar,
            cubeCoord: {r: 0, g: 2, b: -2},
          },
          {
            token: Tokens.stone_pillar,
            cubeCoord: {r: -1, g: 4, b: -3},
          },
          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -3, g: 3, b: 0},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 2, g: -1, b: -1}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Passage: {
    id: 'Passage',
    Tiles: [
      {
        Map: Tiles.K2b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: -1, g: 2, b: -1}},
          {token: EmptySlots.slot2, cubeCoord: {r: -2, g: 2, b: 0}},
          {token: EmptySlots.slot3, cubeCoord: {r: -1, g: 3, b: -2}},
          {token: EmptySlots.slot4, cubeCoord: {r: 2, g: 4, b: -6}},
          {token: EmptySlots.slot5, cubeCoord: {r: 3, g: 4, b: -7}},
          {token: EmptySlots.slot6, cubeCoord: {r: 2, g: 5, b: -7}},
          {token: EmptySlots.slot7, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 1, b: -2}},
          {token: EmptySlots.slot9, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: EmptySlots.slot10, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot11, cubeCoord: {r: 3, g: 1, b: -4}},
          {token: EmptySlots.slot12, cubeCoord: {r: 3, g: 2, b: -5}},
          {
            token: Tokens.boulder_2,
            cubeCoord: {r: 1.5, g: 0, b: -1.5},
          },

          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -5, g: 5, b: 0},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 3, g: 5, b: -8}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Road: {
    id: 'Road',
    Tiles: [
      {
        Map: Tiles.G1a,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 3, g: 1, b: -4}},
          {token: EmptySlots.slot2, cubeCoord: {r: 4, g: 0, b: -4}},
          {token: EmptySlots.slot3, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot4, cubeCoord: {r: 5, g: 1, b: -6}},
          {token: EmptySlots.slot5, cubeCoord: {r: 4, g: 1, b: -5}},
          {token: EmptySlots.slot6, cubeCoord: {r: 3, g: 2, b: -5}},
          {token: EmptySlots.slot7, cubeCoord: {r: 1, g: 0, b: -1}},
          {token: EmptySlots.slot8, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: EmptySlots.slot9, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot10, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: EmptySlots.slot11, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot12, cubeCoord: {r: 1, g: 2, b: -1}},
          {
            token: Tokens.skew_log_2,
            cubeCoord: {r: 1.5, g: 1.5, b: -3},
          },

          {
            token: Tokens.entrance_right,
            cubeCoord: {r: 7, g: 1, b: -8},
          },
          {
            token: Tokens.entrance_right,
            cubeCoord: {r: 5, g: 3, b: -8},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 5, g: -1, b: -4}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Sewer: {
    id: 'Sewer',
    Tiles: [
      {
        Map: Tiles.H1b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 2, g: 1, b: -3}},
          {token: EmptySlots.slot2, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot3, cubeCoord: {r: 1, g: 3, b: -4}},
          {token: EmptySlots.slot4, cubeCoord: {r: 2, g: 3, b: -5}},
          {token: EmptySlots.slot5, cubeCoord: {r: 4, g: 1, b: -5}},
          {token: EmptySlots.slot6, cubeCoord: {r: 5, g: 1, b: -6}},
          {token: EmptySlots.slot7, cubeCoord: {r: 5, g: 0, b: -5}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot10, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: EmptySlots.slot11, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot12, cubeCoord: {r: 0, g: 0, b: 0}},

          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -1, g: 7, b: -6},
          },

          {token: Tokens.exit_right, cubeCoord: {r: 3, g: -1, b: -2}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Trial: {
    id: 'Trial',
    Tiles: [
      {
        Map: Tiles.F1b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: -2, g: 4, b: -2}},
          {token: EmptySlots.slot2, cubeCoord: {r: -1, g: 3, b: -2}},
          {token: EmptySlots.slot3, cubeCoord: {r: 0, g: 4, b: -4}},
          {token: EmptySlots.slot4, cubeCoord: {r: 0, g: 3, b: -3}},
          {token: EmptySlots.slot5, cubeCoord: {r: -3, g: 6, b: -3}},
          {token: EmptySlots.slot6, cubeCoord: {r: -2, g: 6, b: -4}},
          {token: EmptySlots.slot7, cubeCoord: {r: -1, g: 4, b: -3}},
          {token: EmptySlots.slot8, cubeCoord: {r: 1, g: 2, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: 0, g: 2, b: -2}},
          {token: EmptySlots.slot10, cubeCoord: {r: 0, g: 0, b: 0}},
          {token: EmptySlots.slot11, cubeCoord: {r: -1, g: 5, b: -4}},
          {token: EmptySlots.slot12, cubeCoord: {r: 2, g: 0, b: -2}},
          {
            token: Tokens.boulder_1,
            cubeCoord: {r: -1, g: 2, b: -1},
          },
          {
            token: Tokens.boulder_1,
            cubeCoord: {r: -1, g: 6, b: -5},
          },

          {
            token: Tokens.entrance_left,
            cubeCoord: {r: -3, g: 9, b: -6},
          },

          {token: Tokens.exit_left, cubeCoord: {r: -1, g: 1, b: 0}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
  Tunnel: {
    id: 'Tunnel',
    Tiles: [
      {
        Map: Tiles.J1b,
        staticRender: [
          {token: EmptySlots.slot1, cubeCoord: {r: 3, g: 2, b: -5}},
          {token: EmptySlots.slot2, cubeCoord: {r: 4, g: 4, b: -8}},
          {token: EmptySlots.slot3, cubeCoord: {r: 5, g: 3, b: -8}},
          {token: EmptySlots.slot4, cubeCoord: {r: 0, g: 0, b: 0}},
          {token: EmptySlots.slot5, cubeCoord: {r: 3, g: 3, b: -6}},
          {token: EmptySlots.slot6, cubeCoord: {r: 2, g: 0, b: -2}},
          {token: EmptySlots.slot7, cubeCoord: {r: 4, g: 3, b: -7}},
          {token: EmptySlots.slot8, cubeCoord: {r: 3, g: 0, b: -3}},
          {token: EmptySlots.slot9, cubeCoord: {r: 2, g: 2, b: -4}},
          {token: EmptySlots.slot10, cubeCoord: {r: 0, g: 1, b: -1}},
          {token: EmptySlots.slot11, cubeCoord: {r: 5, g: 1, b: -6}},
          {token: EmptySlots.slot12, cubeCoord: {r: 0, g: 2, b: -2}},
          {
            token: Tokens.boulder_1,
            cubeCoord: {r: 5, g: 2, b: -7},
          },
          {
            token: Tokens.boulder_1,
            cubeCoord: {r: 3, g: 5, b: -8},
          },
          {
            token: Tokens.skew_boulder_2,
            cubeCoord: {r: 1, g: 1.5, b: -2.5},
          },
          {
            token: Tokens.boulder_3,
            cubeCoord: {r: 3.75, g: 0.5, b: -4.25},
          },

          {
            token: Tokens.entrance_left,
            cubeCoord: {r: 4, g: 6, b: -10},
          },

          {token: Tokens.exit_left, cubeCoord: {r: -1, g: 1, b: 0}},
          {token: Tokens.exit_left, cubeCoord: {r: 2, g: -1, b: -1}},
        ],
        offset: {x: 0, y: 0},
      },
    ],
  },
}
