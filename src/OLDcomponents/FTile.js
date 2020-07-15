import React from 'react'
import {tilePath} from '../config'
import Tile from './Tile'

const Ftile = (props) => {
  let {tileName} = props
  const tileSetup = (
    <div className='tile' style={{zoom: '360%', transform: 'rotate(90deg)'}}>
      <img draggable={false} src={`${tilePath}${tileName}.png`} alt='' />
    </div>
  )

  return <Tile tileSetup={tileSetup}></Tile>
}

export default Ftile
