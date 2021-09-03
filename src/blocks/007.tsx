import * as Color from 'color'
import { createBlock, NBlock } from './common'

import { OneBlock } from './001'
import { TwoBlock } from './002'
import { ThreeBlock } from './003'
import { FourBlock } from './004'
import { FiveBlock } from './005'
import { SixBlock } from './006'

export const SEVEN_COLORS = {
  primary: new Color('#9768AC'),
}

export const SevenBlock = createBlock('Seven', SEVEN_COLORS.primary)

export const SEVEN: NBlock = {
  number: 7,
  forms: [
    // tall
    {
      width: 100,
      height: 700,
      svg: () => (
        <svg>
          <SevenBlock />
          <SixBlock y={100} />
          <FiveBlock y={200} />
          <FourBlock y={300} />
          <ThreeBlock y={400} />
          <TwoBlock y={500} />
          <OneBlock y={600} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <FiveBlock y={100} />
          <ThreeBlock y={200} />
          <OneBlock y={300} />
          <SevenBlock x={100} />
          <SixBlock x={100} y={100} />
          <FourBlock x={100} y={200} />
          <TwoBlock x={100} y={300} />
        </svg>
      ),
    },
    // b
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <SevenBlock />
          <SixBlock y={100} />
          <FiveBlock y={200} />
          <ThreeBlock x={100} y={100} />
          <FourBlock x={100} y={200} />
          <OneBlock x={200} y={100} />
          <TwoBlock x={200} y={200} />
        </svg>
      ),
    },
    // T
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <OneBlock />
          <TwoBlock x={100} />
          <FourBlock x={100} y={100} />
          <FiveBlock x={100} y={200} />
          <SixBlock x={100} y={300} />
          <SevenBlock x={100} y={400} />
          <ThreeBlock x={200} />
        </svg>
      ),
    },
    // ??? scoop?
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <FiveBlock y={200} />
          <SixBlock y={300} />
          <SevenBlock y={400} />
          <FourBlock x={100} y={200} />
          <OneBlock x={200} />
          <TwoBlock x={200} y={100} />
          <ThreeBlock x={200} y={200} />
        </svg>
      ),
    },
    // top right
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <SevenBlock />
          <SixBlock x={100} />
          <FiveBlock x={200} />
          <FourBlock x={300} />
          <ThreeBlock x={300} y={100} />
          <TwoBlock x={300} y={200} />
          <OneBlock x={300} y={300} />
        </svg>
      ),
    },
  ],
}

export default SEVEN
