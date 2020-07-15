import {monsterPath} from '../config'
const fileFormat = '.png'
const drawCoords = {x: 0, y: 0}
const aspectRatio = 4.4
export const Monsters = {
  rending_drake: {
    id: 'rending_drake',
    location: `${monsterPath}Vert-Rending-Drake${fileFormat}`,
    aspectRatio,
    drawCoords,
    itemType: 'monster',
    material: 'none',
  },
  cave_bear: {
    id: 'cave_bear',
    location: `${monsterPath}Vert-Cave-Bear${fileFormat}`,
    aspectRatio,
    drawCoords,
    itemType: 'monster',
    material: 'none',
  },
  forest_imp: {
    id: 'forest_imp',
    location: `${monsterPath}Vert-Forest-Imp${fileFormat}`,
    aspectRatio,
    drawCoords,
    itemType: 'monster',
    material: 'none',
  },
  hound: {
    id: 'hound',
    location: `${monsterPath}Vert-Hound${fileFormat}`,
    aspectRatio,
    drawCoords,
    itemType: 'monster',
    material: 'none',
  },
}
