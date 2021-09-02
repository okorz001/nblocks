import NBlock from './NBlock'
import { OneBlock } from './001'
import { TenBlock } from './010'

export const ELEVEN: NBlock = {
  number: 11,
  forms: [
    // odd
    {
      width: 200,
      height: 600,
      svg: () => (
        <svg>
          <OneBlock x={100} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
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
          <OneBlock x={100} y= {900} />
        </svg>
      ),
    },
    // spur
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <OneBlock x={200} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
          <TenBlock x={0} y= {400} />
        </svg>
      ),
    },
    // wide
    {
      width: 500,
      height: 300,
      svg: () => (
        <svg>
          <OneBlock x={400} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={400} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={400} y= {200} />
        </svg>
      ),
    },
    // b, wide
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <OneBlock x={100} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
        </svg>
      ),
    },
    // b, tall
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
          <OneBlock x={200} y= {400} />
        </svg>
      ),
    },
  ],
}

export default ELEVEN
