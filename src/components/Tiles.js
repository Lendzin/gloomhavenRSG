import {tilePath} from '../config'
import {TileCubeCoords} from './TileCubeCoords'
const fileFormat = '.png'
const tileStart = {x: 100, y: 100}

export const Tiles = {
  // A TILES
  A1a: {
    id: 'A1a',
    location: `${tilePath}A1a_S${fileFormat}`,
    startHexCoords: {x: 208, y: 191},
    aspectRatio: 1.86,
    drawCoords: tileStart,
    gridCubeCoords: TileCubeCoords.ATile,
    itemType: 'tile',
    material: 'stone',
  },
  A1b: {
    id: 'A1b',
    location: `${tilePath}A1b_W${fileFormat}`,
    startHexCoords: {x: 224.5, y: 189},
    aspectRatio: 1.88,
    drawCoords: tileStart,
    gridCubeCoords: TileCubeCoords.ATile,
    itemType: 'tile',
    material: 'wood',
  },
  A2a: {
    id: 'A2a',
    location: `${tilePath}A2a_S${fileFormat}`,
    startHexCoords: {x: 207, y: 191},
    aspectRatio: 1.86,
    drawCoords: {x: tileStart.x - 29, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.ATile,
    itemType: 'tile',
    material: 'stone',
  },
  A3b: {
    id: 'A3b',
    location: `${tilePath}A3b_S${fileFormat}`,
    startHexCoords: {x: 224, y: 190},
    aspectRatio: 1.88,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.ATile,
    itemType: 'tile',
    material: 'stone',
  },

  // B TILES
  B2a: {
    id: 'B2a',
    location: `${tilePath}B2a_W${fileFormat}`,
    startHexCoords: {x: 173, y: 192},
    aspectRatio: 1.86,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.BTile,
    itemType: 'tile',
    material: 'wood',
  },
  B2b: {
    id: 'B2b',
    location: `${tilePath}B2b_S${fileFormat}`,
    startHexCoords: {x: 173, y: 192},
    aspectRatio: 1.86,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.BTile,
    itemType: 'tile',
    material: 'stone',
  },

  // C TILES
  C1b: {
    id: 'C1b',
    location: `${tilePath}C1b_W${fileFormat}`,
    startHexCoords: {x: 283, y: 189},
    aspectRatio: 3.75,
    drawCoords: {x: tileStart.x - 55, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.CTile,

    itemType: 'tile',
    material: 'wood',
  },

  // D TILES
  D2b: {
    id: 'D2b',
    location: `${tilePath}D2b_NS${fileFormat}`,
    startHexCoords: {x: 282, y: 191},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 55, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.DTile,

    itemType: 'tile',
    material: 'ice',
  },

  // E TILES
  E1b: {
    id: 'E1b',
    location: `${tilePath}E1b_NS${fileFormat}`,
    startHexCoords: {x: 224, y: 192},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 28},
    gridCubeCoords: TileCubeCoords.ETile,
    itemType: 'tile',
    material: 'ice',
  },

  // F TILES
  F1a: {
    id: 'F1a',
    location: `${tilePath}F1a_S${fileFormat}`,
    startHexCoords: {x: 173, y: 113},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 108},
    gridCubeCoords: TileCubeCoords.FTile,
    itemType: 'tile',
    material: 'stone',
  },
  F1b: {
    id: 'F1b',
    location: `${tilePath}F1b_E${fileFormat}`,
    startHexCoords: {x: 173, y: 113},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 108},
    gridCubeCoords: TileCubeCoords.FTile,
    itemType: 'tile',
    material: 'earth',
  },

  // G TILES
  G1a: {
    id: 'G1a',
    location: `${tilePath}G1a_E${fileFormat}`,
    startHexCoords: {x: 173, y: 210},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 10},
    gridCubeCoords: TileCubeCoords.GTile,
    itemType: 'tile',
    material: 'earth',
  },
  G2b: {
    id: 'G2b',
    location: `${tilePath}G2b_W${fileFormat}`,
    startHexCoords: {x: 173, y: 210},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 10},
    gridCubeCoords: TileCubeCoords.GTile,
    itemType: 'tile',
    material: 'wood',
  },

  // H TILES
  H1b: {
    id: 'H1b',
    location: `${tilePath}H1b_S${fileFormat}`,
    startHexCoords: {x: 223, y: 207},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 10},
    gridCubeCoords: TileCubeCoords.HTile,
    itemType: 'tile',
    material: 'stone',
  },
  H2b: {
    id: 'H2b',
    location: `${tilePath}H2b_E${fileFormat}`,
    startHexCoords: {x: 223, y: 207},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 10},
    gridCubeCoords: TileCubeCoords.HTile,
    itemType: 'tile',
    material: 'earth',
  },

  // I TILES
  I2b: {
    id: 'I2b',
    location: `${tilePath}I2b_W${fileFormat}`,
    startHexCoords: {x: 173, y: 190},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 30},
    gridCubeCoords: TileCubeCoords.ITile,
    itemType: 'tile',
    material: 'wood',
  },

  // J TILES
  J2a: {
    id: 'J2a',
    location: `${tilePath}J2a_S${fileFormat}`,
    startHexCoords: {x: 590, y: 191},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.JTileA,
    itemType: 'tile',
    material: 'stone',
  },
  J1b: {
    id: 'J1b',
    location: `${tilePath}J1b_NS${fileFormat}`,
    startHexCoords: {x: 173, y: 192},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.JTileB,
    itemType: 'tile',
    material: 'ice',
  },

  // K TILES
  K1b: {
    id: 'K1b',
    location: `${tilePath}K1b_NS${fileFormat}`,
    startHexCoords: {x: 417, y: 192},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 29, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.KTile,
    itemType: 'tile',
    material: 'ice',
  },
  K2b: {
    id: 'K2b',
    location: `${tilePath}K2b_S${fileFormat}`,
    startHexCoords: {x: 417, y: 192},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 29, y: tileStart.y - 29},
    gridCubeCoords: TileCubeCoords.KTile,
    itemType: 'tile',
    material: 'stone',
  },

  // L TILES
  L2b: {
    id: 'L2b',
    location: `${tilePath}L2b_S${fileFormat}`,
    startHexCoords: {x: 172, y: 190},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 30},
    gridCubeCoords: TileCubeCoords.LTile,
    itemType: 'tile',
    material: 'stone',
  },
  L3a: {
    id: 'L3a',
    location: `${tilePath}L3a_E${fileFormat}`,
    startHexCoords: {x: 172, y: 190},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 30},
    gridCubeCoords: TileCubeCoords.LTile,
    itemType: 'tile',
    material: 'earth',
  },

  // M TILES
  M1a: {
    id: 'M1a',
    location: `${tilePath}M1a_S${fileFormat}`,
    startHexCoords: {x: 274, y: 190},
    aspectRatio: 1.87,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 30},
    gridCubeCoords: TileCubeCoords.MTile,
    itemType: 'tile',
    material: 'stone',
  },
  M1b: {
    id: 'M1b',
    location: `${tilePath}M1b_E${fileFormat}`,
    startHexCoords: {x: 274, y: 188},
    aspectRatio: 1.88,
    drawCoords: {x: tileStart.x - 10, y: tileStart.y - 30},
    gridCubeCoords: TileCubeCoords.MTile,
    itemType: 'tile',
    material: 'earth',
  },
}
