import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const FIVE_COLORS = {
  primary: new Color('#2AACC7'),
}

export const FiveBlock = createBlock(FIVE_COLORS.primary)

export const FIVE: NBlock = {
  number: 5,
  forms: [
    // tall
    {
      width: 100,
      height: 500,
      svg: () => (
        <svg>
          <FiveBlock x={0} y= {0} />
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={0} y= {200} />
          <FiveBlock x={0} y= {300} />
          <FiveBlock x={0} y= {400} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={0} y= {200} />
          <FiveBlock x={100} y= {200} />
          <FiveBlock x={100} y= {100} />
          <FiveBlock x={100} y= {0} />
        </svg>
      ),
    },
    // Γ
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={0} y= {0} />
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={0} y= {200} />
          <FiveBlock x={0} y= {300} />
        </svg>
      ),
    },
    // +
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={100} y= {100} />
          <FiveBlock x={200} y= {100} />
          <FiveBlock x={100} y= {200} />
        </svg>
      ),
    },
    // C
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={0} y= {0} />
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={0} y= {200} />
          <FiveBlock x={100} y= {200} />
        </svg>
      ),
    },
    // T
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={0} y= {0} />
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={200} y= {0} />
          <FiveBlock x={100} y= {100} />
          <FiveBlock x={100} y= {200} />
        </svg>
      ),
    },
    // Z
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={0} y= {0} />
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={100} y= {100} />
          <FiveBlock x={100} y= {200} />
          <FiveBlock x={200} y= {200} />
        </svg>
      ),
    },
    // stampolines
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={100} y= {100} />
          <FiveBlock x={100} y= {200} />
          <FiveBlock x={200} y= {0} />
        </svg>
      ),
    },
    // top right
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={0} y= {0} />
          <FiveBlock x={100} y= {0} />
          <FiveBlock x={200} y= {0} />
          <FiveBlock x={200} y= {100} />
          <FiveBlock x={200} y= {200} />
        </svg>
      ),
    },
  ],
}

export default FIVE
