import NBlock from './NBlock'
import { SixBlock } from './006'
import { TenBlock } from './010'

export const SIXTEEN: NBlock = {
  number: 16,
  forms: [
    // square
    {
      width: 400,
      height: 400,
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
          <TenBlock x={0} y= {200} />
          <SixBlock x={100} y= {200} />
          <SixBlock x={200} y= {200} />
          <TenBlock x={300} y= {200} />
          <SixBlock x={0} y= {300} />
          <SixBlock x={100} y= {300} />
          <SixBlock x={200} y= {300} />
          <SixBlock x={300} y= {300} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 800,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={100} y= {0} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={100} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={0} y= {700} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={100} y= {500} />
          <TenBlock x={100} y= {600} />
          <TenBlock x={100} y= {700} />
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
          <SixBlock x={100} y= {400} />
          <SixBlock x={100} y= {500} />
          <SixBlock x={100} y= {600} />
          <SixBlock x={100} y= {700} />
          <SixBlock x={100} y= {800} />
          <SixBlock x={100} y= {900} />
        </svg>
      ),
    },
    // bowl cut
    {
      width: 400,
      height: 600,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {0} />
          <SixBlock x={100} y= {0} />
          <SixBlock x={200} y= {0} />
          <SixBlock x={300} y= {0} />
          <SixBlock x={300} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={100} y= {500} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={200} y= {300} />
          <TenBlock x={200} y= {400} />
          <TenBlock x={200} y= {500} />
        </svg>
      ),
    },
    // fork
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={200} y= {300} />
          <TenBlock x={200} y= {400} />
          <SixBlock x={300} y= {0} />
          <SixBlock x={300} y= {100} />
          <SixBlock x={300} y= {200} />
          <SixBlock x={400} y= {0} />
          <SixBlock x={400} y= {100} />
          <SixBlock x={400} y= {200} />
        </svg>
      ),
    },
    // crazy hair
    {
      width: 800,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={300} y= {100} />
          <TenBlock x={300} y= {200} />
          <TenBlock x={300} y= {300} />
          <SixBlock x={400} y= {100} />
          <TenBlock x={400} y= {200} />
          <TenBlock x={400} y= {300} />
          <SixBlock x={500} y= {0} />
          <SixBlock x={500} y= {100} />
          <SixBlock x={600} y= {0} />
          <SixBlock x={600} y= {100} />
          <SixBlock x={700} y= {0} />
        </svg>
      ),
    },
    // mushroom
    {
      width: 600,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {0} />
          <TenBlock x={200} y= {100} />
          <SixBlock x={200} y= {200} />
          <SixBlock x={200} y= {300} />
          <SixBlock x={200} y= {400} />
          <TenBlock x={300} y= {0} />
          <TenBlock x={300} y= {100} />
          <SixBlock x={300} y= {200} />
          <SixBlock x={300} y= {300} />
          <SixBlock x={300} y= {400} />
          <TenBlock x={400} y= {0} />
          <TenBlock x={400} y= {100} />
          <TenBlock x={500} y= {100} />
        </svg>
      ),
    },
  ],
}

export default SIXTEEN
