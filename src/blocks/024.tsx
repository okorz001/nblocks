import { NBlock } from './common'
import { FourGrid } from './004'
import { TwentyGrid } from './020'

export const TWENTY_FOUR: NBlock = {
  number: 24,
  forms: [
    // 3x8
    {
      width: 300,
      height: 800,
      svg: () => (
        <svg>
          <TwentyGrid width={3} height={8} />
          <FourGrid x={100} y={200} height={4} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 1200,
      svg: () => (
        <svg>
          <FourGrid width={2} height={2} />
          <TwentyGrid y={200} width={2} height={10} />
        </svg>
      ),
    },
    // 4x6
    {
      width: 400,
      height: 600,
      svg: () => (
        <svg>
          <FourGrid width={4} />
          <TwentyGrid y={100} width={4} height={10} />
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
          <FourGrid x={200} y={600} height={4} />
        </svg>
      ),
    },
    // O
    {
      width: 700,
      height: 700,
      svg: () => (
        <svg>
          <TwentyGrid width={7} />
          <FourGrid x={200} width={4} />
          <TwentyGrid y={100} height={5} />
          <TwentyGrid x={600} y={100} height={5} />
          <TwentyGrid y={600} width={7} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_FOUR
