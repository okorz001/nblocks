import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const TEN_COLORS = {
  primary: new Color('#F0F0F0'),
}

export const TenBlock = createBlock(TEN_COLORS.primary)

export const TEN: NBlock = {
  number: 1,
  forms: [
    // tall
    {
      width: 100,
      height: 1000,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={0} y= {700} />
          <TenBlock x={0} y= {800} />
          <TenBlock x={0} y= {900} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
        </svg>
      ),
    },
    // step
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={300} y= {0} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
          <TenBlock x={300} y= {300} />
        </svg>
      ),
    },
    // tap
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={300} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
        </svg>
      ),
    },
    // upside down T
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenBlock x={100} y= {0} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
        </svg>
      ),
    },
  ],
}

export default TEN