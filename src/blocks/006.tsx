import * as Color from 'color'
import { createBlock } from './Block'
import Grid from './Grid'
import NBlock from './NBlock'

export const SIX_COLORS = {
  primary: new Color('#5829BD'),
}

export const SixBlock = createBlock(SIX_COLORS.primary)

export const SIX: NBlock = {
  number: 6,
  forms: [
    // even
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={SixBlock} width={2} height={3} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 600,
      svg: () => (
        <svg>
          <Grid block={SixBlock} height={6} />
        </svg>
      ),
    },
    // step
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <SixBlock y={200} />
          <Grid block={SixBlock} x={100} y={100} height={2} />
          <Grid block={SixBlock} x={200} height={3} />
        </svg>
      ),
    },
    // pipe
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <Grid block={SixBlock} width={2} />
          <Grid block={SixBlock} y={100} width={4} />
        </svg>
      ),
    },
    // bolt
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={SixBlock} y={100} height={3} />
          <Grid block={SixBlock} x={100} height={3} />
        </svg>
      ),
    },
    // backwards 4
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={SixBlock} height={3} />
          <SixBlock x={100} y={100} />
          <Grid block={SixBlock} x={200} height={2} />
        </svg>
      ),
    },
    // zig-zag
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={SixBlock} width={2} />
          <Grid block={SixBlock} x={100} y={100} width={2} />
          <Grid block={SixBlock} x={200} y={200} width={2} />
        </svg>
      ),
    },
    // upside down T
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <Grid block={SixBlock} x={100} width={2} />
          <Grid block={SixBlock} y={100} width={4} />
        </svg>
      ),
    },
    // ??? scoop?
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={SixBlock} y={200} height={2} />
          <SixBlock x={100} y={200} />
          <Grid block={SixBlock} x={200} height={3} />
        </svg>
      ),
    },
    // U
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <SixBlock />
          <SixBlock x={300} />
          <Grid block={SixBlock} y={100} width={4} />
        </svg>
      ),
    },
  ],
}

export default SIX
