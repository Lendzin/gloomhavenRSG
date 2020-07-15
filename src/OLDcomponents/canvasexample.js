var myCanvas = document.getElementById('myCanvas')
var ctx = myCanvas.getContext('2d')

var hexProps = {width: 100, height: 100, facShort: -2, facLong: 10}

var hexagons = []

function drawHex(ctx, x, y, hexProps, stroke, color) {
  let myPath = new Path2D()

  myPath.moveTo(x + hexProps.width * 0.5, y)
  myPath.lineTo(x, y + hexProps.height * hexProps.facShort)
  myPath.lineTo(x, y + hexProps.height * hexProps.facLong)
  myPath.lineTo(x + hexProps.width * 0.5, y + hexProps.height)
  myPath.lineTo(x + hexProps.width, y + hexProps.height * hexProps.facLong)
  myPath.lineTo(x + hexProps.width, y + hexProps.height * hexProps.facShort)
  myPath.lineTo(x + hexProps.width * 0.5, y)
  myPath.closePath()

  if (stroke) {
    ctx.strokeStyle = color
    ctx.stroke(myPath)
  } else {
    ctx.fillStyle = color
    ctx.fill(myPath)
  }

  return myPath
}

hexagons.push({type: 0, path: drawHex(ctx, 100, 100, hexProps, false, '#0f0')})

hexagons.forEach(function (hex) {
  if (hex.type === 0) {
    console.info(hex.path)

    myCanvas.onclick = function (e) {
      let x = e.clientX - myCanvas.offsetLeft,
        y = e.clientY - myCanvas.offsetTop
      console.info(x, y)
      console.info(
        ctx.isPointInPath(
          hex.path,
          e.clientX - myCanvas.offsetLeft,
          e.clientY - myCanvas.offsetTop
        )
      )
    }
  }
})
