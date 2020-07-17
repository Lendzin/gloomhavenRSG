import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import {hexagonSize} from './config'
import {ScenarioCards} from './components/ScenarioCards'
import {MonsterCards} from './components/MonsterCards'

const nextPointHexagon = (center, size, i) => {
  var angle_deg = 60 * i - 30
  var angle_rad = (Math.PI / 180) * angle_deg
  let x = center.x + size * Math.cos(angle_rad)
  let y = center.y + size * Math.sin(angle_rad)
  return {x, y}
}
const getCornersFor = (center) => {
  let loc = 0
  let corners = []
  for (let i = 6; i > 0; i--) {
    loc = nextPointHexagon(center, hexagonSize - 3, i)
    corners.push(loc)
  }
  return corners
}

const drawHexagonForCorners = (corners, ctx, color, offset) => {
  ctx.beginPath()
  corners.forEach((corner, index) => {
    if (offset) {
      corner.x += offset.x
      corner.y += offset.y
    }
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

function coordinateCheck(ctx, tile, offset) {
  tile.gridCubeCoords.forEach((cubeCoord) => {
    if (cubeCoord.r + cubeCoord.g + cubeCoord.b === 0) {
      let drawCoords = getDrawCoords(cubeCoord, tile.startHexCoords)
      // let corners = getCornersFor(drawCoords)
      // drawHexagonForCorners(corners, ctx, offset)
      ctx.font = '20px Arial'
      ctx.fillStyle = 'yellow'
      ctx.textAlign = 'center'
      ctx.fillText(
        `(${cubeCoord.r} , ${cubeCoord.g} , ${cubeCoord.b})`,
        drawCoords.x + offset.x,
        drawCoords.y + offset.y
      )
    }
  })
}

function getDrawCoords(hexCubeCoords, startHexCoords) {
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

const getRandomFromObject = (object) => {
  return object[
    Object.keys(object)[
      Math.floor(Math.random() * Math.floor(Object.keys(object).length))
    ]
  ]
}

function App() {
  const canvasRef = useRef(null)
  const canvasRefItems = useRef(null)

  const [players, setPlayers] = useState(2)
  const [monsterCard, setMonsterCard] = useState(
    getRandomFromObject(MonsterCards)
  )
  const [scenarioCard, setScenarioCard] = useState(
    getRandomFromObject(ScenarioCards)
  )

  const [drawCubeCoords, setDrawCubeCoords] = useState(false)

  const drawHexagon = (ctx, drawCoords, color, offset) => {
    let corners = getCornersFor(drawCoords)
    drawHexagonForCorners(corners, ctx, color, offset)
  }

  const drawTiles = (ctx) => {
    let tiles = [...scenarioCard.Tiles]
    let tileSources = []
    tiles.forEach((tile) => {
      const mapImage = JSON.parse(JSON.stringify(tile.Map))
      mapImage.offset = tile.offset
      tileSources.push(mapImage)
    })
    Promise.all(
      tileSources.map((imageSource) => loadImage(imageSource.location))
    )
      .then((images) => {
        images.forEach((image, index) => {
          const {aspectRatio, drawCoords, offset} = tileSources[index]
          ctx.drawImage(
            image,
            drawCoords.x + offset.x,
            drawCoords.y + offset.y,
            image.width / aspectRatio,
            image.height / aspectRatio
          )
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const drawTileContent = (ctx) => {
    console.log('draw')
    let imageSources = []
    const tiles = scenarioCard.Tiles
    tiles.forEach((tile) => {
      tile.staticRender.forEach((resource) => {
        let token = JSON.parse(JSON.stringify(resource.token))
        const items = getItemsToRender()
        items.forEach((item, index) => {
          if (token.id === `slot${index + 1}`) {
            let newItem = JSON.parse(JSON.stringify(item))
            token = newItem.token
            token.frame = newItem.frame
          }
        })

        token.drawCoords = getDrawCoords(
          resource.cubeCoord,
          tile.Map.startHexCoords
        )
        token.offset = tile.offset

        imageSources.push(token)
      })
    })
    Promise.all(
      imageSources.map((imageSource) => loadImage(imageSource.location))
    )
      .then((images) => {
        images.forEach((image, index) => {
          const {aspectRatio, drawCoords, frame, offset} = imageSources[index]
          if (frame === 'elite') {
            drawHexagon(ctx, drawCoords, 'yellow', offset)
          } else if (frame === 'normal') {
            drawHexagon(ctx, drawCoords, 'white', offset)
          }
          ctx.drawImage(
            image,
            drawCoords.x - image.width / (aspectRatio * 2) + offset.x,
            drawCoords.y - image.height / (aspectRatio * 2) + offset.y,
            image.width / aspectRatio,
            image.height / aspectRatio
          )
        })
      })
      .catch((err) => {
        console.error(err)
      })
      .then(
        tiles.forEach((tile) => {
          if (drawCubeCoords) {
            coordinateCheck(ctx, tile.Map, tile.offset)
          }
        })
      )
  }

  const getItemsToRender = () => {
    return monsterCard[`players${players}`]
  }
  const validatePlayers = (amount) => {
    return amount === 5 ? 4 : amount === 1 ? 2 : amount
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawTiles(ctx)
  }, [monsterCard, scenarioCard])

  useEffect(() => {
    const canvasItems = canvasRefItems.current
    const ctxitems = canvasItems.getContext('2d')
    ctxitems.clearRect(0, 0, canvasItems.width, canvasItems.height)
    drawTileContent(ctxitems)
  }, [monsterCard, scenarioCard, players, drawCubeCoords])

  const handleCanvasClick = (x, y) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let center = {x, y}
    console.log(center.x, center.y)
  }

  return (
    <>
      <div id='stack'>
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={(event) => {
            const x = event.clientX
            const y = event.clientY
            // handleCanvasClick(x, y)
          }}
        ></canvas>
        <canvas
          ref={canvasRefItems}
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={(event) => {
            const x = event.clientX
            const y = event.clientY
            handleCanvasClick(x, y)
          }}
        ></canvas>
        <div className='controls'>
          <div id='combined-card-name'>
            {`Map: ${monsterCard.id} ${scenarioCard.id}`}
          </div>
          <div id='players'>
            Players:
            <button onClick={() => setPlayers(validatePlayers(players + 1))}>
              +
            </button>
            {players}
            <button onClick={() => setPlayers(validatePlayers(players - 1))}>
              -
            </button>
          </div>
          <div id='cubecoords-buttons'>
            <button
              className='cubecoords-button'
              disabled={drawCubeCoords}
              onClick={() => setDrawCubeCoords(true)}
            >
              Generate CubeCoords
            </button>
            <button
              className='cubecoords-button'
              disabled={!drawCubeCoords}
              onClick={() => setDrawCubeCoords(false)}
            >
              Remove CubeCoords
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
