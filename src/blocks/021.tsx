import { NBlock } from './common'
import { OneBlock } from './001'
import { TwentyBlock, TwentyGrid } from './020'

export const TWENTY_ONE: NBlock = {
  number: 21,
  forms: [
    // 3x7
    {
      width: 300,
      height: 700,
      svg: () => (
        <svg>
          <TwentyGrid width={3} height={7} />
          <OneBlock x={100} y={300} />
        </svg>
      ),
    },
    // step
    {
      width: 600,
      height: 600,
      svg: () => (
        <svg>
          <OneBlock x={500} />
          <TwentyGrid x={400} y={100} width={2} height={5} />
          <TwentyGrid x={300} y={200} height={4} />
          <TwentyGrid x={200} y={300} height={3} />
          <TwentyGrid x={100} y={400} height={2} />
          <TwentyBlock y={500} />
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
          <OneBlock x={200} y={900} />
        </svg>
      ),
    },
    // +
    {
      width: 1100,
      height: 1100,
      svg: () => (
        <svg>
          <TwentyGrid x={500} height={11} />
          <TwentyGrid y={500} width={11} />
          <OneBlock x={500} y={500} />
        </svg>
      ),
    },
    // O
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <OneBlock />
          <TwentyGrid x={100} width={4} />
          <TwentyGrid y={100} height={4} />
          <TwentyGrid x={300} y={100} width={2} height={4} />
          <TwentyGrid x={100} y={300} width={2} height={2} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_ONE
