const hexagonSize = 60

export const getRandomFromObject = (object) => {
  const pickedObject =
    object[
      Object.keys(object)[
        Math.floor(Math.random() * Math.floor(Object.keys(object).length))
      ]
    ]
  return copyObject(pickedObject)
}

export const copyObject = (object) => {
  return JSON.parse(JSON.stringify(object))
}

export const getDrawCoords = (hexCubeCoords, startHexCoords) => {
  let drawCoords = copyObject(startHexCoords)
  const hexagonHeight = hexagonSize * 2
  const hexagonWidth = Math.sqrt(3) * hexagonSize

  drawCoords.x += hexCubeCoords.r * hexagonWidth
  drawCoords.x += (hexCubeCoords.g * hexagonWidth) / 2
  drawCoords.y += (hexCubeCoords.g * hexagonHeight * 3) / 4

  return drawCoords
}

export const clickToCubeCoords = (hexCoords, currentX, currentY) => {
  currentX -= hexCoords.x
  currentY -= hexCoords.y
  var q = ((Math.sqrt(3) / 3) * currentX - (1 / 3) * currentY) / hexagonSize
  var r = ((2 / 3) * currentY) / hexagonSize
  var x = q
  var z = r
  var y = -x - z
  let cube = {x: x, z: z, y: y}
  var rx = Math.round(x)
  var rz = Math.round(z)
  var ry = Math.round(y)
  var x_diff = Math.abs(rx - cube.x)
  var y_diff = Math.abs(ry - cube.y)
  var z_diff = Math.abs(rz - cube.z)
  if (x_diff > y_diff && x_diff > z_diff) {
    rx = -ry - rz
  } else if (y_diff > z_diff) {
    ry = -rx - rz
  } else {
    rz = -rx - ry
  }
  const cubeCoords = {r: rx, g: rz, b: ry}
  return cubeCoords
}

export const getCornersForHexagon = (center) => {
  let loc = 0
  let corners = []
  for (let i = 6; i > 0; i--) {
    loc = nextPointHexagon(center, hexagonSize - 3, i)
    corners.push(loc)
  }
  return corners
}

const nextPointHexagon = (center, size, i) => {
  var angle_deg = 60 * i - 30
  var angle_rad = (Math.PI / 180) * angle_deg
  let x = center.x + size * Math.cos(angle_rad)
  let y = center.y + size * Math.sin(angle_rad)
  return {x, y}
}

export const allWordsStringUpperCase = (str) => {
  let newStr = str.replace('_', ' ')
  let strArray = newStr.split(' ')
  let builtStr = ''
  strArray.forEach((str) => {
    builtStr += str.charAt(0).toUpperCase() + str.slice(1) + ' '
  })
  return builtStr
}

export const loadImage = (imagePath) => {
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

export const drawOutlineHexagon = (ctx, drawCoords) => {
  let corners = getCornersForHexagon(drawCoords)
  ctx.beginPath()
  corners.forEach((corner, index) => {
    if (index === 0) {
      ctx.lineTo(corner.x, corner.y)
      ctx.moveTo(corner.x, corner.y)
    } else {
      ctx.lineTo(corner.x, corner.y)
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 4
    }
  })
  ctx.closePath()
  ctx.stroke()
}

export const coordinateCheck = (ctx, tile) => {
  const map = tile.Map
  const offset = tile.offset
  map.gridCubeCoords.forEach((cubeCoord) => {
    if (cubeCoord.r + cubeCoord.g + cubeCoord.b === 0) {
      let drawCoords = getDrawCoords(cubeCoord, map.startHexCoords)
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
