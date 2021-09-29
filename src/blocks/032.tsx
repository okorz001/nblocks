import { NBlock } from './common'
import { TwoGrid } from './002'
import { ThirtyGrid } from './030'

export const THIRTY_TWO: NBlock = {
  number: 32,
  forms: [
    // 4x8
    {
      tags: ['4x'],
      width: 400,
      height: 800,
      svg: () => (
        <svg>
          <ThirtyGrid width={4} height={8} />
          <TwoGrid x={100} y={100} width={2} />
        </svg>
      ),
    },
    // 8x4
    {
      tags: ['x4'],
      width: 800,
      height: 400,
      svg: () => (
        <svg>
          <ThirtyGrid width={8} height={4} />
          <TwoGrid x={600} y={100} height={2} />
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
    // O
    {
      width: 900,
      height: 900,
      svg: () => (
        <svg>
          <ThirtyGrid width={9} />
          <TwoGrid x={400} width={2} />
          <ThirtyGrid y={100} height={7} />
          <ThirtyGrid x={800} y={100} height={7} />
          <ThirtyGrid y={800} width={9} />
        </svg>
      ),
    },
  ],
}

export default THIRTY_TWO
