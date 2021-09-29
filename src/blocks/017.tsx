import { NBlock } from './common'
import { OneBlock } from './001'
import { TwoBlock } from './002'
import { ThreeBlock } from './003'
import { FourBlock } from './004'
import { FiveBlock } from './005'
import { SixBlock } from './006'
import { SevenBlock } from './007'
import { TenGrid } from './010'

export const SEVENTEEN: NBlock = {
  number: 17,
  forms: [
    // hair
    {
      width: 400,
      height: 700,
      svg: () => (
        <svg>
          <ThreeBlock y={100} />
          <TwoBlock y={200} />
          <OneBlock y={300} />
          <FourBlock x={100} y={100} />
          <FiveBlock x={200} y={100} />
          <SevenBlock x={300} />
          <SixBlock x={300} y={100} />
          <TenGrid x={100} y={200} width={2} height={5} />
        </svg>
      ),
    },
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TenGrid height={10} />
          <SevenBlock x={100} y={300} />
          <SixBlock x={100} y={400} />
          <FiveBlock x={100} y={500} />
          <FourBlock x={100} y={600} />
          <ThreeBlock x={100} y={700} />
          <TwoBlock x={100} y={800} />
          <OneBlock x={100} y={900} />
        </svg>
      ),
    },
    // odd
    {
      tags: ['odd'],
      width: 200,
      height: 900,
      svg: () => (
        <svg>
          <FiveBlock y={100} />
          <ThreeBlock y={200} />
          <OneBlock y={300} />
          <SevenBlock x={100} />
          <SixBlock x={100} y={100} />
          <FourBlock x={100} y={200} />
          <TwoBlock x={100} y={300} />
          <TenGrid y={400} width={2} height={5} />
        </svg>
      ),
    },
    // antenna
    {
      width: 500,
      height: 800,
      svg: () => (
        <svg>
          <SevenBlock x={100} />
          <OneBlock y={100} />
          <ThreeBlock x={100} y={100} />
          <FourBlock x={200} y={100} />
          <FiveBlock x={300} y={100} />
          <SixBlock x={400} y={100} />
          <TwoBlock x={100} y={200} />
          <TenGrid y={300} width={4} />
          <TenGrid x={100} y={300} height={4} />
          <TenGrid y={500} width={3} />
        </svg>
      ),
    },
    // +
    {
      width: 900,
      height: 900,
      svg: () => (
        <svg>
          <SevenBlock x={400} />
          <SixBlock x={400} y={100} />
          <FiveBlock x={400} y={200} />
          <FourBlock x={400} y={300} />
          <TenGrid y={400} width={6} />
          <ThreeBlock x={600} y={400} />
          <TwoBlock x={700} y={400} />
          <OneBlock x={800} y={400} />
          <TenGrid x={400} y={500} height={4} />
        </svg>
      ),
    },
  ],
}

export default SEVENTEEN
