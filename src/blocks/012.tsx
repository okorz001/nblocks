import { NBlock } from './common'
import { TwoGrid } from './002'
import { TenGrid } from './010'

export const TWELVE: NBlock = {
  number: 12,
  forms: [
    // 3x4
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid width={3} height={4} />
          <TwoGrid x={100} y={100} height={2} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 600,
      svg: () => (
        <svg>
          <TwoGrid width={2} />
          <TenGrid y={100} width={2} height={5} />
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
          <TwoGrid x={100} y={800} height={2} />
        </svg>
      ),
    },
    // O
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid height={4} />
          <TwoGrid x={100} width={2} />
          <TenGrid x={100} y={300} width={2} />
          <TenGrid x={300} height={4} />
        </svg>
      ),
    },
    // b
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid width={2} height={5} />
          <TwoGrid x={200} y={300} height={2} />
        </svg>
      ),
    },
  ],
}

export default TWELVE
