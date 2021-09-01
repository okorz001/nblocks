import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const FOUR_COLORS = {
  primary: new Color('#46CD2E'),
}

export const FourBlock = createBlock(FOUR_COLORS.primary)

export const FOUR: NBlock = {
  number: 4,
  forms: [
    // square
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <FourBlock x={0} y= {0} />
          <FourBlock x={0} y= {100} />
          <FourBlock x={100} y= {0} />
          <FourBlock x={100} y= {100} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 400,
      svg: () => (
        <svg>
          <FourBlock x={0} y= {0} />
          <FourBlock x={0} y= {100} />
          <FourBlock x={0} y= {200} />
          <FourBlock x={0} y= {300} />
        </svg>
      ),
    },
    // L
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FourBlock x={0} y= {0} />
          <FourBlock x={0} y= {100} />
          <FourBlock x={0} y= {200} />
          <FourBlock x={100} y= {200} />
        </svg>
      ),
    },
    // T
    {
      width: 300,
      height: 200,
      svg: () => (
        <svg>
          <FourBlock x={0} y= {0} />
          <FourBlock x={100} y= {0} />
          <FourBlock x={200} y= {0} />
          <FourBlock x={100} y= {100} />
        </svg>
      ),
    },
    // S
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FourBlock x={0} y= {0} />
          <FourBlock x={0} y= {100} />
          <FourBlock x={100} y= {100} />
          <FourBlock x={100} y= {200} />
        </svg>
      ),
    },
    // flat
    {
      width: 400,
      height: 100,
      svg: () => (
        <svg>
          <FourBlock x={0} y= {0} />
          <FourBlock x={100} y= {0} />
          <FourBlock x={200} y= {0} />
          <FourBlock x={300} y= {0} />
        </svg>
      ),
    },
  ],
}

export default FOUR
