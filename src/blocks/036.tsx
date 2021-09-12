import { NBlock } from './common'
import { SixBlock, SixGrid } from './006'
import { ThirtyGrid } from './030'

export const THIRTY_SIX: NBlock = {
  number: 36,
  forms: [
    // square
    {
      width: 600,
      height: 600,
      svg: () => (
        <svg>
          <ThirtyGrid width={6} height={5} />
          <SixGrid y={500} width={6} />
        </svg>
      ),
    },
    // step
    {
      width: 800,
      height: 800,
      svg: () => (
        <svg>
          <ThirtyGrid y={700} width={8} />
          <ThirtyGrid x={100} y={600} width={7} />
          <ThirtyGrid x={200} y={500} width={6} />
          <ThirtyGrid x={300} y={400} width={5} />
          <ThirtyGrid x={400} y={300} width={4} />
          <SixGrid x={500} y={200} width={3} />
          <SixGrid x={600} y={100} width={2} />
          <SixBlock x={700} />
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
          <SixGrid x={300} y={400} height={6} />
        </svg>
      ),
    },
    // 4x9
    {
      width: 400,
      height: 900,
      svg: () => (
        <svg>
          <SixGrid width={4} height={2} />
          <ThirtyGrid y={100} height={8} />
          <ThirtyGrid x={100} y={200} width={2} height={7} />
          <ThirtyGrid x={300} y={100} height={8} />
        </svg>
      ),
    },
    // 9x4
    {
      width: 900,
      height: 400,
      svg: () => (
        <svg>
          <ThirtyGrid width={9} height={4} />
          <SixGrid x={300} width={3} height={2} />
        </svg>
      ),
    },
    // O
    {
      width: 1000,
      height: 1000,
      svg: () => (
        <svg>
          <ThirtyGrid width={10} />
          <SixGrid x={200} width={6} />
          <ThirtyGrid y={100} height={8} />
          <ThirtyGrid x={900} y={100} height={8} />
          <ThirtyGrid y={900} width={10} />
        </svg>
      ),
    },
  ],
}

export default THIRTY_SIX
