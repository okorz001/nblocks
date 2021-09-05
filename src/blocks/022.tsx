import { NBlock } from './common'
import { TwoGrid } from './002'
import { TwentyGrid } from './020'

export const TWENTY_TWO: NBlock = {
  number: 22,
  forms: [
    // double eleven
    {
      width: 400,
      height: 600,
      svg: () => (
        <svg>
          <TwoGrid x={100} width={2} />
          <TwentyGrid y={100} width={4} height={5} />
        </svg>
      ),
    },
    // 2x11
    {
      width: 200,
      height: 1100,
      svg: () => (
        <svg>
          <TwoGrid width={2} />
          <TwentyGrid y={100} width={2} height={10} />
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
          <TwoGrid x={200} y={800} height={2} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_TWO
