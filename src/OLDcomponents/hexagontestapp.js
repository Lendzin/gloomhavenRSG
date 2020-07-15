import React from 'react'
import './App.css'
// import Hexagon from './components/hexagon'
import Gtile from './components/GTile'
import {localhost, tilePath, monsterPath, tokenPath} from './config'
import {HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex} from 'react-hexgrid'
import Ftile from './components/FTile'
// import './other.css'

function App() {
  return (
    <div id='board'>
      {/* <img src={`{tilePath}G1b.png`} alt='' style={{}} />
        <img src={`${tilePath}C1b.png`} alt='' /> */}
      {/* <img
          src={`${localhost}${tiles}F1b.png`}
          alt=''
          style={{transform: 'rotate(90deg)'}}
        /> */}
      {/* <Gtile tileName='G1a' /> */}
      {/* <Ftile tileName='F1a_S' /> */}
      <HexGrid width={1200} height={800} viewBox='-50 -50 100 100'>
        {/* Grid with manually inserted hexagons */}
        <Layout
          size={{x: 10, y: 10}}
          flat={true}
          spacing={1.1}
          origin={{x: 0, y: 0}}
        >
          <Hexagon q={0} r={0} s={0} />
          {/* Using pattern (defined below) to fill the hexagon */}
          <Hexagon q={0} r={-1} s={1} fill='pat-1' />
          <Hexagon q={0} r={1} s={-1} />
          <Hexagon q={1} r={-1} s={0}>
            <Text>1, -1, 0</Text>
          </Hexagon>
          <Hexagon q={1} r={0} s={-1} onClick={console.log('test')}>
            <Text>1, 0, -1</Text>
          </Hexagon>
          {/* Pattern and text */}
          <Hexagon q={-1} r={1} s={0} fill='pat-2'>
            <Text>-1, 1, 0</Text>
          </Hexagon>
          <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-2} r={0} s={1} />
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
        <Pattern id='pat-1' link='http://cat-picture' />
        <Pattern id='pat-2' link='http://cat-picture2' />
      </HexGrid>

      {/* <div style={{marginLeft: '133px', marginTop: '-686px'}}>
        <Hexagon
          backSide={{
            image: 'Vert-Ancient%20Artillery',
            path: monsterPath,
            border: 'yellow',
          }}
          frontSide={'Corridor_1_S'}
        />
        <Hexagon
          backSide={{
            image: 'Altar_vertical',
            path: tokenPath,
            border: 'green',
          }}
          frontSide={'Corridor_1_S'}
        />
        <Hexagon
          backSide={{
            image: 'Vert-Ancient%20Artillery',
            path: monsterPath,
            border: 'white',
          }}
          frontSide={'Corridor_1_S'}
        />
      </div> */}
      {/* <Hexagon
        background={'monster_pics/Ancient-Artillery-214x300.jpg'}
        type={'elite'}
      />
      <Hexagon
        background={'monster_pics/Ancient-Artillery-214x300.jpg'}
        type={'normal'}
      />
      <Hexagon
        background={'monster_pics/Ancient-Artillery-214x300.jpg'}
        type={'normal'}
      />
      <div style={{marginLeft: '173px', marginTop: '-700px'}}>
        <Hexagon
          background={'monster_pics/Ancient-Artillery-214x300.jpg'}
          type={'none'}
        />
        <Hexagon
          background={'monster_pics/Ancient-Artillery-214x300.jpg'}
          type={'normal'}
        />
        <Hexagon
          background={'monster_pics/Ancient-Artillery-214x300.jpg'}
          type={'normal'}
        />
      </div>
      */}
    </div>
  )
}

export default App
