import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const EIGHT_COLORS = {
  primary: new Color('#EB27A1'),
}

export const EightBlock = createBlock(EIGHT_COLORS.primary)

export const EIGHT: NBlock = {
  number: 8,
  forms: [
    // even
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <EightBlock x={0} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={0} y= {300} />
          <EightBlock x={100} y= {0} />
          <EightBlock x={100} y= {100} />
          <EightBlock x={100} y= {200} />
          <EightBlock x={100} y= {300} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 800,
      svg: () => (
        <svg>
          <EightBlock x={0} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={0} y= {300} />
          <EightBlock x={0} y= {400} />
          <EightBlock x={0} y= {500} />
          <EightBlock x={0} y= {600} />
          <EightBlock x={0} y= {700} />
        </svg>
      ),
    },
    // O
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <EightBlock x={0} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={100} y= {200} />
          <EightBlock x={200} y= {200} />
          <EightBlock x={200} y= {100} />
          <EightBlock x={200} y= {0} />
          <EightBlock x={100} y= {0} />
        </svg>
      ),
    },
    // cross
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <EightBlock x={100} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={100} y= {100} />
          <EightBlock x={200} y= {100} />
          <EightBlock x={100} y= {200} />
          <EightBlock x={100} y= {300} />
          <EightBlock x={100} y= {400} />
          <EightBlock x={100} y= {500} />
        </svg>
      ),
    },
    // tickler
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <EightBlock x={300} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={100} y= {100} />
          <EightBlock x={200} y= {100} />
          <EightBlock x={300} y= {100} />
          <EightBlock x={300} y= {200} />
          <EightBlock x={300} y= {300} />
          <EightBlock x={300} y= {400} />
        </svg>
      ),
    },
    // wrench
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <EightBlock x={100} y= {0} />
          <EightBlock x={200} y= {0} />
          <EightBlock x={200} y= {100} />
          <EightBlock x={200} y= {200} />
          <EightBlock x={100} y= {200} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={100} y= {300} />
          <EightBlock x={100} y= {400} />
        </svg>
      ),
    },
    // rugby
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <EightBlock x={100} y= {0} />
          <EightBlock x={200} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={100} y= {100} />
          <EightBlock x={200} y= {100} />
          <EightBlock x={300} y= {100} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={300} y= {200} />
        </svg>
      ),
    },
    // U
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <EightBlock x={0} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={100} y= {200} />
          <EightBlock x={200} y= {200} />
          <EightBlock x={300} y= {200} />
          <EightBlock x={300} y= {100} />
          <EightBlock x={300} y= {0} />
        </svg>
      ),
    },
    // almost square
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <EightBlock x={0} y= {0} />
          <EightBlock x={0} y= {100} />
          <EightBlock x={0} y= {200} />
          <EightBlock x={100} y= {0} />
          <EightBlock x={100} y= {100} />
          <EightBlock x={100} y= {200} />
          <EightBlock x={200} y= {100} />
          <EightBlock x={200} y= {200} />
        </svg>
      ),
    },
  ],
}

export default EIGHT
