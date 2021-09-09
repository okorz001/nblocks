import { NBlock } from './common'
import { TwoGrid } from './002'
import { ThirtyGrid } from './030'

export const THIRTY_TWO: NBlock = {
  number: 32,
  forms: [
    // 4x8
    {
      width: 400,
      height: 800,
      svg: () => (
        <svg>
          <ThirtyGrid width={4} height={8} />
          <TwoGrid x={100} y={100} width={2} />
        </svg>
      ),
    },
    // composite
    {
      width: 400,
      height: 1000,
      svg: () => (
        <svg>
          <ThirtyGrid width={3} height={10} />
          <TwoGrid x={300} y={800} height={2} />
        </svg>
      ),
    },
  ],
}

export default THIRTY_TWO
