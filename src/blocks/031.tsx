import { NBlock } from './common'
import { OneBlock } from './001'
import { ThirtyGrid } from './030'

export const THIRTY_ONE: NBlock = {
  number: 31,
  forms: [
    // calendar
    {
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <ThirtyGrid width={7} height={4} />
          <ThirtyGrid y={400} width={2} />
          <OneBlock x={200} y={400} />
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
          <OneBlock x={300} y={900} />
        </svg>
      ),
    },
  ],
}

export default THIRTY_ONE
