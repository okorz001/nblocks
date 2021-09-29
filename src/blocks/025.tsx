import { NBlock } from './common'
import { FiveBlock, FiveGrid } from './005'
import { TwentyBlock, TwentyGrid } from './020'

export const TWENTY_FIVE: NBlock = {
  number: 25,
  forms: [
    // square
    {
      tags: ['square', '5x', 'x5'],
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <TwentyGrid width={5} height={4} />
          <FiveGrid y={400} width={5} />
        </svg>
      ),
    },
    // composite
    {
      width: 300,
      height: 1000,
      svg: () => (
        <svg>
          <TwentyGrid width={2} height={10} />
          <FiveGrid x={200} y={500} height={5} />
        </svg>
      ),
    },
    // odd
    {
      width: 300,
      height: 1300,
      svg: () => (
        <svg>
          <FiveBlock x={100} />
          <FiveGrid y={100} width={2} height={2} />
          <TwentyGrid y={300} width={2} height={10} />
        </svg>
      ),
    },
    // triangle
    {
      width: 900,
      height: 500,
      svg: () => (
        <svg>
          <TwentyBlock x={400} />
          <TwentyGrid x={300} y={100} width={3} />
          <TwentyGrid x={200} y={200} width={5} />
          <TwentyGrid x={100} y={300} width={7} />
          <FiveGrid y={400} width={5} />
          <TwentyGrid x={500} y={400} width={4} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_FIVE
