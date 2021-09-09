import { NBlock } from './common'
import { SixGrid } from './006'
import { TwentyGrid } from './020'

export const TWENTY_SIX: NBlock = {
  number: 26,
  forms: [
    // suit ???
    {
      width: 400,
      height: 700,
      svg: () => (
        <svg>
          <SixGrid y={500} width={4} height={2} />
          <TwentyGrid y={100} width={4} height={4} />
          <TwentyGrid x={100} width={2} height={6} />
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
          <SixGrid x={200} y={400} height={6} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 1300,
      svg: () => (
        <svg>
          <SixGrid width={2} height={3} />
          <TwentyGrid y={300} width={2} height={10} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_SIX
