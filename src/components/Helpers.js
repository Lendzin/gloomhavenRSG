export const scale = 1

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
