import React from 'react'

const Tile = (props) => {
  let {tileSetup} = props
  return (
    <React.Fragment>
      <div className='container-div'>{tileSetup}</div>
    </React.Fragment>
  )
}

export default Tile
