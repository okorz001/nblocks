import { NBlock } from './common'
import { FiveGrid } from './005'
import { ThirtyGrid } from './030'

export const THIRTY_FIVE: NBlock = {
  number: 35,
  forms: [
    // 5x7
    {
      tags: ['5x'],
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <FiveGrid width={5} />
          <ThirtyGrid y={100} width={5} height={6} />
      </svg>
      ),
    },
    // 7x5
    {
      tags: ['x5'],
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <ThirtyGrid width={6} height={5} />
          <FiveGrid x={600} height={5} />
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
          <FiveGrid x={300} y={500} height={5} />
        </svg>
      ),
    },
  ],
}

export default THIRTY_FIVE
