import { NBlock } from './common'
import { FiveGrid } from './005'
import { ThirtyGrid } from './030'

export const THIRTY_FIVE: NBlock = {
  number: 35,
  forms: [
    // 5x7
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <FiveGrid width={5} />
          <ThirtyGrid y={100} width={5} height={7} />
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
