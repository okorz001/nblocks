import { NBlock } from './common'
import { FiveBlock, FiveGrid } from './005'
import { TenBlock, TenGrid } from './010'

export const FIFTEEN: NBlock = {
  number: 15,
  forms: [
    // step
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <FiveGrid x={400} height={5} />
          <TenGrid x={300} y={100} height={4} />
          <TenGrid x={200} y={200} height={3} />
          <TenGrid x={100} y={300} height={2} />
          <TenBlock y={400}/>
        </svg>
      ),
    },
    // 3x5
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid width={2} height={5} />
          <FiveGrid x={200} height={5} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 800,
      svg: () => (
        <svg>
          <FiveBlock x={100} />
          <FiveGrid y={100} width={2} height={2} />
          <TenGrid y={300} width={2} height={5} />
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
          <FiveGrid x={100} y={500} height={5} />
        </svg>
      ),
    },
    // tree
    {
      width: 300,
      height: 900,
      svg: () => (
        <svg>
          <TenBlock x={100} />
          <TenGrid y={100} width={3} height={3} />
          <FiveGrid x={100} y={400} height={5} />
        </svg>
      ),
    },
  ],
}

export default FIFTEEN
