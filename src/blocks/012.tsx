import NBlock from './NBlock'
import { TwoBlock } from './002'
import { TenBlock } from './010'

export const TWELVE: NBlock = {
  number: 12,
  forms: [
    // 3x4
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {0} />
          <TwoBlock x={100} y= {100} />
          <TwoBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={200} y= {300} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 600,
      svg: () => (
        <svg>
          <TwoBlock x={0} y= {0} />
          <TwoBlock x={100} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={100} y= {500} />
        </svg>
      ),
    },
    // composite
    {
      width: 200,
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
          <TwoBlock x={100} y= {800} />
          <TwoBlock x={100} y= {900} />
        </svg>
      ),
    },
    // O
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
          <TenBlock x={300} y= {300} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={300} y= {0} />
          <TwoBlock x={200} y= {0} />
          <TwoBlock x={100} y= {0} />
        </svg>
      ),
    },
    // b
    {
      width: 300,
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
          <TwoBlock x={200} y= {300} />
          <TwoBlock x={200} y= {400} />
        </svg>
      ),
    },
  ],
}

export default TWELVE
