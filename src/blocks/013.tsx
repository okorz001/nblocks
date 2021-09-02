import NBlock from './NBlock'
import { ThreeBlock } from './003'
import { TenBlock } from './010'

export const THIRTEEN: NBlock = {
  number: 13,
  forms: [
    // comb-over
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
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
          <ThreeBlock x={100} y= {0} />
          <ThreeBlock x={200} y= {0} />
          <ThreeBlock x={200} y= {100} />
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
          <ThreeBlock x={200} y= {200} />
          <ThreeBlock x={200} y= {300} />
          <ThreeBlock x={200} y= {400} />
        </svg>
      ),
    },
    // d, tall
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={200} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
          <ThreeBlock x={0} y= {400} />
          <ThreeBlock x={100} y= {400} />
          <ThreeBlock x={200} y= {400} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 700,
      svg: () => (
        <svg>
          <ThreeBlock x={100} y= {0} />
          <ThreeBlock x={0} y= {100} />
          <ThreeBlock x={100} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={100} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={100} y= {600} />
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
          <ThreeBlock x={100} y= {700} />
          <ThreeBlock x={100} y= {800} />
          <ThreeBlock x={100} y= {900} />
        </svg>
      ),
    },
    // lower left nub
    {
      width: 500,
      height: 300,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {0} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={300} y= {200} />
          <ThreeBlock x={400} y= {0} />
          <ThreeBlock x={400} y= {100} />
          <ThreeBlock x={400} y= {200} />
        </svg>
      ),
    },
    // d, wide
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={300} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={0} y= {300} />
          <ThreeBlock x={100} y= {300} />
          <ThreeBlock x={200} y= {300} />
          <ThreeBlock x={300} y= {300} />
        </svg>
      ),
    },
    // jagged
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <ThreeBlock x={300} y= {0} />
          <ThreeBlock x={200} y= {100} />
          <ThreeBlock x={300} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
          <TenBlock x={300} y= {300} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={200} y= {400} />
          <TenBlock x={300} y= {400} />
        </svg>
      ),
    },
    // d and 3
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={200} y= {300} />
          <ThreeBlock x={300} y= {0} />
          <ThreeBlock x={300} y= {100} />
          <ThreeBlock x={300} y= {200} />
        </svg>
      ),
    },
    // fifteen's minute of fame
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <ThreeBlock x={200} y= {0} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={200} y= {300} />
          <ThreeBlock x={300} y= {0} />
          <ThreeBlock x={300} y= {100} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={300} y= {300} />
        </svg>
      ),
    },
  ],
}

export default THIRTEEN
