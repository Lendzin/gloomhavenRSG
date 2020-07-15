import React from 'react'
import {tilePath} from '../config'
import Tile from './Tile'

const Gtile = (props) => {
  let {tileName} = props
  const tileSetup = (
    <div style={{zoom: '150%'}}>
      <img draggable={false} src={`${tilePath}${tileName}.png`} alt='' />
    </div>
  )

  return <Tile tileSetup={tileSetup}></Tile>
}

export default Gtile
