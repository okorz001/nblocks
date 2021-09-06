import { NBlock } from './common'
import { FiveGrid } from './005'
import { TwentyGrid } from './020'

export const TWENTY_FIVE: NBlock = {
  number: 25,
  forms: [
    // square
    {
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
  ],
}

export default TWENTY_FIVE
