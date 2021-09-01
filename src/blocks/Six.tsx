import * as Color from 'color'
import { createBlock } from './Block'
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
          <SixBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={100} y= {0} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={100} y= {200} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 600,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={0} y= {300} />
          <SixBlock x={0} y= {400} />
          <SixBlock x={0} y= {500} />
        </svg>
      ),
    },
    // pipe
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={100} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={200} y= {100} />
          <SixBlock x={300} y= {100} />
        </svg>
      ),
    },
    // step
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <SixBlock x={200} y= {0} />
          <SixBlock x={200} y= {100} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={100} y= {200} />
          <SixBlock x={200} y= {200} />
        </svg>
      ),
    },
    // bolt
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <SixBlock x={100} y= {0} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={100} y= {200} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={0} y= {300} />
        </svg>
      ),
    },
    // backwards 4
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={200} y= {0} />
          <SixBlock x={200} y= {100} />
        </svg>
      ),
    },
    // zig-zag
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={100} y= {0} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={200} y= {100} />
          <SixBlock x={200} y= {200} />
          <SixBlock x={300} y= {200} />
        </svg>
      ),
    },
    // ??? scoop?
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <SixBlock x={200} y= {0} />
          <SixBlock x={200} y= {100} />
          <SixBlock x={200} y= {200} />
          <SixBlock x={100} y= {200} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={0} y= {300} />
        </svg>
      ),
    },
  ],
}

export default SIX
