import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import {hexagonSize} from './config'
import {ScenarioCards} from './components/ScenarioCards'
import {MonsterCards} from './components/MonsterCards'

const nextPointHexagon = (center, size, i) => {
  var angle_deg = size * i - 30
  var angle_rad = (Math.PI / 180) * angle_deg
  let x = center.x + size * Math.cos(angle_rad)
  let y = center.y + size * Math.sin(angle_rad)
  return {x, y}
}
const getCornersFor = (center) => {
  let loc = 0
  let corners = []
  for (let i = 6; i > 0; i--) {
    loc = nextPointHexagon(center, hexagonSize, i)
    corners.push(loc)
  }
  return corners
}

const drawHexagonForCorners = (corners, ctx, color) => {
  ctx.beginPath()
  corners.forEach((corner, index) => {
    if (index === 0) {
      ctx.moveTo(corner.x, corner.y)
    } else {
      ctx.lineTo(corner.x, corner.y)
      ctx.fillStyle = color
      ctx.fill()
    }
  })
  ctx.closePath()
}

function coordinateCheck(ctx, tile) {
  tile.gridCubeCoords.forEach((cubeCoord) => {
    if (cubeCoord.r + cubeCoord.g + cubeCoord.b === 0) {
      let drawCoords = getDrawCoords(cubeCoord, tile.startHexCoords)
      // let corners = getCornersFor(drawCoords)
      // drawHexagonForCorners(corners, ctx)
      ctx.font = '20px Arial'
      ctx.fillStyle = 'yellow'
      ctx.textAlign = 'center'
      ctx.fillText(
        `(${cubeCoord.r} , ${cubeCoord.g} , ${cubeCoord.b})`,
        drawCoords.x,
        drawCoords.y
      )
    }
  })
}

export function getDrawCoords(hexCubeCoords, startHexCoords) {
  let drawCoords = JSON.parse(JSON.stringify(startHexCoords))
  const hexagonHeight = hexagonSize * 2
  const hexagonWidth = Math.sqrt(3) * hexagonSize

  drawCoords.x += hexCubeCoords.r * hexagonWidth
  drawCoords.x += (hexCubeCoords.g * hexagonWidth) / 2
  drawCoords.y += (hexCubeCoords.g * hexagonHeight * 3) / 4

  return drawCoords
}

function loadImage(imagePath) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.addEventListener('error', (err) => {
      reject(err)
    })
    image.src = imagePath
  })
}

function App() {
  const canvasRef = useRef(null)
  const [players, setPlayers] = useState(2)
  const [monsterCard, setMonsterCard] = useState(MonsterCards.Wild)
  const [scenarioCard, setScenarioCard] = useState(ScenarioCards.Altar)

  const drawHexagon = (drawCoords, color) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let corners = getCornersFor(drawCoords)
    drawHexagonForCorners(corners, ctx, color)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let imageSources = [scenarioCard.Map]
    scenarioCard.staticRender.forEach((resource) => {
      let token = JSON.parse(JSON.stringify(resource.token))
      monsterCard.players2.forEach((item, index) => {
        if (token.id === `slot${index + 1}`) {
          let newItem = JSON.parse(JSON.stringify(item))
          token = newItem.token
          token.frame = newItem.frame
        }
      })

      token.drawCoords = getDrawCoords(
        resource.cubeCoord,
        scenarioCard.Map.startHexCoords
      )

      imageSources.push(token)
    })

    Promise.all(
      imageSources.map((imageSource) => loadImage(imageSource.location))
    )
      .then((images) => {
        images.forEach((image, index) => {
          const {aspectRatio, drawCoords, itemType, frame} = imageSources[index]
          if (frame === 'elite') {
            drawHexagon(drawCoords, 'yellow')
          } else if (frame === 'normal') {
            drawHexagon(drawCoords, 'white')
          }
          ctx.drawImage(
            image,
            itemType !== 'tile'
              ? drawCoords.x - image.width / (aspectRatio * 2)
              : drawCoords.x,
            itemType !== 'tile'
              ? drawCoords.y - image.height / (aspectRatio * 2)
              : drawCoords.y,
            image.width / aspectRatio,
            image.height / aspectRatio
          )
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [monsterCard, scenarioCard])

  const handleCanvasClick = (x, y) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    coordinateCheck(ctx, scenarioCard.Map)
    let center = {x, y}
    console.log(center.x, center.y)
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={(event) => {
          const x = event.clientX
          const y = event.clientY
          handleCanvasClick(x, y)
        }}
      ></canvas>
    </>
  )
}

export default App
