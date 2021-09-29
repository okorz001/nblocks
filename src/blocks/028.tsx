import { NBlock } from './common'
import { EightBlock, EightGrid } from './008'
import { TwentyBlock, TwentyGrid } from './020'

export const TWENTY_EIGHT: NBlock = {
  number: 28,
  forms: [
    // brass knuckles
    {
      width: 300,
      height: 1100,
      svg: () => (
        <svg>
          <EightGrid height={3} />
          <EightBlock x={100} />
          <EightGrid x={200} height={3} />
          <EightBlock x={100} y={200} />
          <TwentyGrid y={300} height={8} />
          <TwentyGrid x={200} y={300} height={8} />
          <TwentyGrid x={100} y={400} />
          <TwentyGrid x={100} y={600} />
          <TwentyGrid x={100} y={800} />
          <TwentyGrid x={100} y={1000} />
        </svg>
      ),
    },
    // 4x7
    {
      tags: ['4x'],
      width: 400,
      height: 700,
      svg: () => (
        <svg>
          <EightGrid width={4} height={2} />
          <TwentyGrid y={200} width={4} height={5} />
        </svg>
      ),
    },
    // 7x4
    {
      tags: ['x4'],
      width: 700,
      height: 400,
      svg: () => (
        <svg>
          <TwentyGrid width={5} height={4} />
          <EightGrid x={500} width={2} height={4} />
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
          <EightGrid x={200} y={200} height={8} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 1400,
      svg: () => (
        <svg>
          <EightGrid width={2} height={4} />
          <TwentyGrid y={400} width={2} height={10} />
        </svg>
      ),
    },
    // step
    {
      tags: ['step'],
      width: 700,
      height: 700,
      svg: () => (
        <svg>
          <TwentyBlock y={600} />
          <TwentyGrid x={100} y={500} height={2} />
          <TwentyGrid x={200} y={400} height={3} />
          <TwentyGrid x={300} y={300} height={4} />
          <TwentyGrid x={400} y={200} height={5} />
          <TwentyGrid x={500} y={100} height={5} />
          <EightBlock x={500} y={600} />
          <EightGrid x={600} height={7} />
        </svg>
      ),
    },
    // O
    {
      width: 800,
      height: 800,
      svg: () => (
        <svg>
          <EightGrid width={8} />
          <TwentyGrid y={100} height={6} />
          <TwentyGrid x={700} y={100} height={6} />
          <TwentyGrid y={700} width={8} />
        </svg>
      ),
    },
    // +
    {
      width: 800,
      height: 800,
      svg: () => (
        <svg>
          <TwentyGrid y={300} width={8} height={2} />
          <EightGrid x={300} width={2} height={4} />
          <TwentyGrid x={300} y={500} width={2} height={3} />
        </svg>
      ),
    },
    // 7x4 (calendar)
    {
      width: 700,
      height: 400,
      svg: () => (
        <svg>
          <TwentyGrid width={7} height={3} />
          <EightBlock x={600} y={200} />
          <EightGrid y={300} width={7} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_EIGHT
