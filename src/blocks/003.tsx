import * as Color from 'color'
import { createBlock } from './Block'
import Grid from './Grid'
import NBlock from './NBlock'

export const THREE_COLORS = {
  primary: new Color('#E0CF16'),
}

export const ThreeBlock = createBlock(THREE_COLORS.primary)

export const THREE: NBlock = {
  number: 3,
  forms: [
    // tall
    {
      width: 100,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={ThreeBlock} height={3} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <ThreeBlock x={100} />
          <Grid block={ThreeBlock} y={100} width={2} />
        </svg>
      ),
    },
    // flat
    {
      width: 300,
      height: 100,
      svg: () => (
        <svg>
          <Grid block={ThreeBlock} width={3} />
        </svg>
      ),
    },
    // top right
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <ThreeBlock />
          <Grid block={ThreeBlock} x={100} height={2} />
        </svg>
      ),
    },
  ],
}

export default THREE
