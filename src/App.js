import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import {
  getDrawCoords,
  clickToCubeCoords,
  copyObject,
  allWordsStringUpperCase,
  scale,
} from './components/Helpers'
import {drawScenarioCard} from './components/ScenarioCards'
import {drawMonsterCard} from './components/MonsterCards'
import {getCornersForHexagon} from './components/Helpers'

const drawOutlineHexagon = (ctx, drawCoords, color, offset) => {
  let corners = getCornersForHexagon(drawCoords)
  ctx.beginPath()
  corners.forEach((corner, index) => {
    if (offset) {
      corner.x += offset.x
      corner.y += offset.y
    }
    if (index === 0) {
      ctx.lineTo(corner.x, corner.y)
      ctx.moveTo(corner.x, corner.y)
    } else {
      ctx.lineTo(corner.x, corner.y)
      ctx.strokeStyle = color
      ctx.lineWidth = 4
    }
  })
  ctx.closePath()
  ctx.stroke()
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

const validatePlayers = (players) => {
  return players === 5 ? 4 : players === 1 ? 2 : players
}

function App() {
  const canvasRef = useRef(null)
  const canvasRefItems = useRef(null)
  const canvasRefOverlay = useRef(null)

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight)
    return () => window.removeEventListener('resize', updateWidthAndHeight)
  })
  useEffect(() => {
    window.addEventListener('onresize', updateWidthAndHeight)
    return () => window.removeEventListener('onresize', updateWidthAndHeight)
  })

  const getContextScaledCanvas = (canvas) => {
    let ctx = canvas.getContext('2d')
    ctx.scale(scale, scale)
    return ctx
  }

  const [room, setRoom] = useState(1)
  const [usedScenarioCards, setUsedScenarioCards] = useState([])
  const [usedMonsterCards, setUsedMonsterCards] = useState([])
  const [triggeredItem, setTriggeredItem] = useState('No Item')
  const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0})
  const [exit, setExit] = useState('')
  const [modalState, setModalState] = useState(false)
  const [players, setPlayers] = useState(2)
  const [openMenu, setOpenMenu] = useState(false)
  const addCardToUsed = (card) => {
    if (card.Tiles) {
      setUsedScenarioCards([...usedScenarioCards, card.id])
    } else {
      setUsedMonsterCards([...usedMonsterCards, card.id])
    }
    return card
  }

  const [monsterCard, setMonsterCard] = useState(() =>
    addCardToUsed(drawMonsterCard())
  )
  const [scenarioCard, setScenarioCard] = useState(() =>
    addCardToUsed(drawScenarioCard())
  )

  const [drawCubeCoords, setDrawCubeCoords] = useState(false)
  const [exits, setExits] = useState([])

  const drawHexagon = (ctx, drawCoords, color, offset) => {
    let corners = getCornersForHexagon(drawCoords)
    drawHexagonForCorners(corners, ctx, color, offset)
  }

  const isCardUsed = (card) => {
    if (card.Tiles) {
      return usedScenarioCards.includes(card.id)
    } else {
      return usedMonsterCards.includes(card.id)
    }
  }

  const drawTiles = (ctx) => {
    let tiles = [...scenarioCard.Tiles]
    let tileSources = []
    tiles.forEach((tile) => {
      const mapImage = copyObject(tile.Map)
      mapImage.offset = tile.offset
      tileSources.push(mapImage)
    })
    Promise.all(
      tileSources.map((imageSource) => loadImage(imageSource.location))
    )
      .then((images) => {
        images.forEach((image, index) => {
          const {aspectRatio, drawCoords, offset} = tileSources[index]
          let drawXCoord = drawCoords.x + offset.x
          let drawYCoord = drawCoords.y + offset.y
          ctx.drawImage(
            image,
            drawXCoord,
            drawYCoord,
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
    let imageSources = []
    const tiles = scenarioCard.Tiles
    tiles.forEach((tile) => {
      tile.staticRender.forEach((resource) => {
        let newToken = copyObject(resource.token)
        const items = getItemsToRender()
        items.forEach((item, index) => {
          if (newToken.id === `slot${index + 1}`) {
            let newItem = copyObject(item)
            newToken = newItem.token
            newToken.frame = newItem.frame
          }
        })

        let drawCoords = getDrawCoords(
          resource.cubeCoord,
          tile.Map.startHexCoords
        )
        newToken.drawCoords = drawCoords
        newToken.offset = tile.offset
        newToken.cubeCoord = resource.cubeCoord
        imageSources.push(newToken)
      })
    })
    Promise.all(
      imageSources.map((imageSource) => loadImage(imageSource.location))
    )
      .then((images) => {
        let exitsInsideImages = []
        images.forEach((image, index) => {
          const {aspectRatio, drawCoords, frame, offset, id} = imageSources[
            index
          ]
          if (id.includes('exit')) {
            exitsInsideImages.push(imageSources[index])
          }
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
        setExits([...exitsInsideImages])
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
    return copyObject(monsterCard[`players${players}`])
  }

  const generateNextMap = () => {
    if (room + 1 < 4) {
      let exitText = exit.toUpperCase()
      let sCard = drawScenarioCard()
      let card = 20
      while (!sCard.entries.includes(exitText) || isCardUsed(sCard)) {
        sCard = drawScenarioCard()
        if (card === 0) {
          break
        }
        card--
      }

      card = 20
      resetModal()
      let mCard = drawMonsterCard()
      while (isCardUsed(mCard)) {
        mCard = drawMonsterCard()
        if (card === 0) {
          break
        }
        card--
      }

      addCardToUsed(mCard)
      setMonsterCard(mCard)
      addCardToUsed(sCard)
      setScenarioCard(sCard)
      setRoom(room + 1)
    } else {
      resetModal()
      setTriggeredItem(
        <>
          <p>Congratulations!</p>
          <p>You finished!</p>
          <button onClick={() => resetApplication()}>Restart</button>
        </>
      )
      setModalState(true)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = getContextScaledCanvas(canvas)
    ctx.clearRect(0, 0, width, height)
    drawTiles(ctx)
  }, [monsterCard, scenarioCard, width, height])

  useEffect(() => {
    const canvas = canvasRefItems.current
    const ctxitems = getContextScaledCanvas(canvas)
    ctxitems.clearRect(0, 0, width, height)
    drawTileContent(ctxitems)
  }, [monsterCard, scenarioCard, players, drawCubeCoords, width, height])

  const handleCanvasClick = (xIn, yIn) => {
    scenarioCard.Tiles.forEach((tile) => {
      let currentX = xIn
      let currentY = yIn
      let hexCoords = copyObject(tile.Map.startHexCoords)
      hexCoords.x += tile.offset.x
      hexCoords.y += tile.offset.y

      const cubeCoords = clickToCubeCoords(hexCoords, currentX, currentY)
      const canvas = canvasRefOverlay.current
      const ctxOverlay = getContextScaledCanvas(canvas)

      Object.values(tile.staticRender).forEach((value) => {
        if (JSON.stringify(value.cubeCoord) === JSON.stringify(cubeCoords)) {
          let items = getItemsToRender()
          let id = value.token.id
          id = Number(id.slice('slot'.length, id.length))
          if (id) {
            id--
            let item = items[id]
            let {frame, token} = item
            let itemId = token.id
            let newStr = allWordsStringUpperCase(itemId)
            let color = 'white'
            if (frame === 'none') {
              if (newStr.includes('Treasure')) {
                monsterCard.Effects.forEach((effect) => {
                  if (effect.text.includes('Treasure')) {
                    newStr = effect.text
                    color = '#f5d742'
                  }
                })
              } else if (newStr.includes('Trap')) {
                monsterCard.Effects.forEach((effect) => {
                  if (effect.text.includes('trap')) {
                    newStr = effect.text
                    color = '#f57242'
                  }
                })
              }
            }

            if (frame === 'elite') {
              color = 'yellow'
            }
            setTriggeredItem(
              <>
                <p style={{color: color}}>{newStr}</p>
                {frame === 'none' ? (
                  <></>
                ) : (
                  <p style={{color: color}}>{allWordsStringUpperCase(frame)}</p>
                )}
              </>
            )
          } else {
            let item = allWordsStringUpperCase(value.token.id).split(' ')[0]
            setTriggeredItem(
              <>
                <p>{item}</p>
              </>
            )
          }
          setModalState(true)

          let drawCoords = getDrawCoords(cubeCoords, hexCoords)

          drawOutlineHexagon(ctxOverlay, drawCoords, 'black', {x: 0, y: 0})
          exits.forEach((exit) => {
            if (JSON.stringify(exit.cubeCoord) === JSON.stringify(cubeCoords)) {
              setModalState(true)
              setExit(exit.id.slice(-1))
            }
          })
        }
      })
    })
  }

  const triggerOpenMenu = () => {
    resetModal()
    setOpenMenu(!openMenu)
  }

  const resetModal = () => {
    setModalState(false)
    setExit('')
    const canvas = canvasRefOverlay.current
    const ctxOverlay = getContextScaledCanvas(canvas)
    ctxOverlay.clearRect(0, 0, width, height)
  }

  const resetApplication = () => {
    setRoom(1)
    setUsedMonsterCards([])
    setUsedMonsterCards([])
    setMonsterCard(addCardToUsed(drawMonsterCard()))
    setScenarioCard(addCardToUsed(drawScenarioCard()))
    setModalState(false)
  }

  const menuOpen = openMenu ? {} : {display: 'none'}

  const modalOpen = modalState
    ? {left: mouseLocation.x, top: mouseLocation.y}
    : {display: 'none'}
  return (
    <>
      {width > 0 && height > 0 ? (
        <div id='stack'>
          <canvas ref={canvasRef} width={width} height={height}></canvas>
          <canvas ref={canvasRefItems} width={width} height={height}></canvas>
          <canvas
            ref={canvasRefOverlay}
            width={width}
            height={height}
            onMouseDown={(event) => {
              const x = event.clientX
              const y = event.clientY
              console.log(width, height)
              setMouseLocation({x: x, y: y})
              resetModal()
              handleCanvasClick(x, y)
            }}
          ></canvas>
        </div>
      ) : (
        <>Loading..</>
      )}

      <div id='menu' style={menuOpen}>
        <div className='controls'>
          <div id='combined-card-name'>
            <p
              style={{fontSize: '1.5em'}}
            >{`Room ${room}: ${monsterCard.id} ${scenarioCard.id}`}</p>
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
          <div id='extras_and_effects'>
            {scenarioCard ? (
              <div>
                <p style={{color: '#6db000'}}>Minor: {scenarioCard.minor}</p>{' '}
                <p style={{color: '#02acb5'}}>Major: {scenarioCard.major}</p>
              </div>
            ) : (
              <></>
            )}
            <div style={{height: '0.5em'}}> </div>
            {monsterCard ? (
              <div>
                {monsterCard.Effects.map((effect) => {
                  const color = effect.text.includes('trap')
                    ? '#f57242'
                    : '#f5d742'
                  return (
                    <p key={effect.text} style={{color: color}}>
                      {effect.text}
                    </p>
                  )
                })}
              </div>
            ) : (
              <></>
            )}
            <button onClick={() => triggerOpenMenu()}>Close</button>
          </div>
          <div id='cubecoords-buttons' style={{display: 'none'}}>
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
      <button
        id='menu_button'
        onClick={() => {
          triggerOpenMenu()
        }}
      >
        MENU
      </button>

      <div id='myModal' className='modal' style={modalOpen}>
        <div className='modal-content'>
          {exit === '' ? (
            <>{triggeredItem}</>
          ) : (
            <>
              <p>Exit at {exit.toLocaleUpperCase()}?</p>
              <button onClick={() => generateNextMap()} id='nextmap_button'>
                YES
              </button>
              <button onClick={() => resetModal()} id='nextmap_button'>
                NO
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
