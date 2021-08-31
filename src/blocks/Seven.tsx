import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

import { OneBlock } from './One'
import { TwoBlock } from './Two'
import { ThreeBlock } from './Three'
import { FourBlock } from './Four'
import { FiveBlock } from './Five'
import { SixBlock } from './Six'

export const SEVEN_COLORS = {
  primary: new Color('#9768AC'),
  shadow: new Color('#6C599D'),
}

export const SevenBlock = createBlock(SEVEN_COLORS)

export const SEVEN: NBlock = {
  number: 3,
  forms: [
    // tall
    {
      width: 100,
      height: 700,
      svg: () => (
        <svg>
          <SevenBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <FiveBlock x={0} y= {200} />
          <FourBlock x={0} y= {300} />
          <ThreeBlock x={0} y= {400} />
          <TwoBlock x={0} y= {500} />
          <OneBlock x={0} y= {600} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <SevenBlock x={100} y= {0} />
          <SixBlock x={100} y= {100} />
          <FiveBlock x={0} y= {100} />
          <FourBlock x={100} y= {200} />
          <ThreeBlock x={0} y= {200} />
          <TwoBlock x={100} y= {300} />
          <OneBlock x={0} y= {300} />
        </svg>
      ),
    },
  ],
}

export default SEVEN
