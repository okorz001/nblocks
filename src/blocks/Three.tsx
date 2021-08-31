import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const THREE_COLORS = {
  primary: new Color('#E0CF16'),
  shadow: new Color('#C0A31F'),
}

export const ThreeBlock = createBlock(THREE_COLORS)

export const THREE: NBlock = {
  number: 3,
  forms: [
    // tall
    {
      width: 100,
      height: 300,
      svg: () => (
        <svg>
          <ThreeBlock x={0} y= {0} />
          <ThreeBlock x={0} y= {100} />
          <ThreeBlock x={0} y= {200} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <ThreeBlock x={0} y= {100} />
          <ThreeBlock x={100} y= {100} />
          <ThreeBlock x={100} y= {0} />
        </svg>
      ),
    },
    // flat
    {
      width: 300,
      height: 100,
      svg: () => (
        <svg>
          <ThreeBlock x={0} y= {0} />
          <ThreeBlock x={100} y= {0} />
          <ThreeBlock x={200} y= {0} />
        </svg>
      ),
    },
  ],
}

export default THREE
