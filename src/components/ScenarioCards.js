import {Tokens} from './Tokens'
import {EmptySlots} from './EmptySlots'
import {Tiles} from './Tiles'

export const ScenarioCards = {
  Alcove: {},
  Altar: {
    id: 'Altar',
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
      {token: Tokens.entrance, cubeCoord: {r: 3, g: 3, b: -6}},
      {token: Tokens.exit, cubeCoord: {r: -2, g: 3, b: -1}},
    ],
  },
  Armory: {
    id: 'Armory',
  },
  Burrow: {
    id: 'Burrow',
  },
  Cabin: {
    id: 'Cabin',
  },
  Cave: {
    id: 'Cave',
  },
  Clearing: {
    id: 'Clearing',
  },
  Corridor: {
    id: 'Corridor',
  },
  Crossroads: {
    id: 'Crossroads',
  },
  DeadEnd: {
    id: 'DeadEnd',
  },
  Den: {
    id: 'Den',
  },
  Encampment: {
    id: 'Encampment',
  },
  Hallway: {
    id: 'Hallway',
  },
  Hovel: {
    id: 'Hovel',
  },
  Library: {
    id: 'Library',
  },
  Passage: {
    id: 'Passage',
  },
  Road: {
    id: 'Road',
  },
  Sewer: {
    id: 'Sewer',
  },
  Trial: {
    id: 'Trial',
  },
  Tunnel: {
    id: 'Tunnel',
  },
}
