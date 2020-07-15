import {tokenPath} from '../config'
const fileFormat = '.png'
const drawCoords = {x: 0, y: 0}
export const Tokens = {
  altar: {
    id: 'altar',
    location: `${tokenPath}altar_vertical${fileFormat}`,
    aspectRatio: 4.1,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  stone_pillar: {
    id: 'stone_pillar',
    location: `${tokenPath}stone_pillar${fileFormat}`,
    aspectRatio: 4.6,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  entrance: {
    id: 'entrance',
    location: `${tokenPath}entrance_vertical${fileFormat}`,
    aspectRatio: 5,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  exit: {
    id: 'exit',
    location: `${tokenPath}exit_vertical${fileFormat}`,
    aspectRatio: 5,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  coin: {
    id: 'coin',
    location: `${tokenPath}Coin${fileFormat}`,
    aspectRatio: 4.2,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  treasure: {
    id: 'treasure',
    location: `${tokenPath}Treasure${fileFormat}`,
    aspectRatio: 4.2,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  bear_trap: {
    id: 'bear_trap',
    location: `${tokenPath}Bear-Trap${fileFormat}`,
    aspectRatio: 4.0,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
  empty: {
    id: 'empty',
    location: `${tokenPath}empty${fileFormat}`,
    aspectRatio: 4,
    drawCoords,
    itemType: 'token',
    material: 'none',
  },
}
