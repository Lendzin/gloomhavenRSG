import React, {useState, useEffect} from 'react'
import '../App.css'
import {tokenPath} from '../config'
const Hexagon = (props) => {
  const setBorderColor = (color) => {
    let css = {
      WebkitBoxShadow: `inset 0px 0px 30px 40px ${color}`,
      MozBoxShadow: `inset 0px 0px 30px 40px ${color}`,
      boxShadow: `inset 0px 0px 30px 20px ${color}`,
    }
    return css
  }

  const {frontSide, backSide} = props
  const {path, image, border} = backSide

  const [hexagonBorder, setBorder] = useState('red')
  const [hexagonPath, setPath] = useState(tokenPath)
  const [hexagonImage, setImage] = useState(frontSide)

  const revealBackside = () => {
    console.log('click.. click')
    setBorder(border)
    setPath(path)
    setImage(image)
  }

  return (
    <div style={{width: '200px', height: '200px'}}>
      <div className='hexagon hexagon2'>
        <div className='hexagon-in1'>
          <div className='hexagon-in2'>
            <img
              itemID='front-side'
              className='hexagon-img'
              src={`${hexagonPath}${hexagonImage}.png`}
              alt=''
            />
            <div
              className='shadow'
              style={setBorderColor(hexagonBorder)}
              onClick={() => revealBackside()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hexagon
