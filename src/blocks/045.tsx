import { NBlock } from './common'
import { FiveGrid } from './005'
import { FortyBlock, FortyGrid } from './040'

export const FORTY_FIVE: NBlock = {
  number: 45,
  forms: [
    // step
    {
      tags: ['step'],
      width: 900,
      height: 900,
      svg: () => (
        <svg>
          <FortyBlock y={800} />
          <FortyGrid x={100} y={700} height={2} />
          <FortyGrid x={200} y={600} height={3} />
          <FortyGrid x={300} y={500} height={4} />
          <FortyGrid x={400} y={400} height={5} />
          <FortyGrid x={500} y={300} height={6} />
          <FortyGrid x={600} y={200} height={7} />
          <FortyGrid x={700} y={100} height={8} />
          <FiveGrid x={800} height={5} />
          <FortyGrid x={800} y={500} height={4} />
        </svg>
      ),
    },
    // 5x9
    {
      tags: ['5x'],
      width: 500,
      height: 900,
      svg: () => (
        <svg>
          <FiveGrid width={5} />
          <FortyGrid y={100} width={5} height={8} />
        </svg>
      ),
    },
    // 9x5
    {
      tags: ['x5'],
      width: 900,
      height: 500,
      svg: () => (
        <svg>
          <FortyGrid width={8} height={5} />
          <FiveGrid x={800} height={5} />
        </svg>
      ),
    },
    // composite
    {
      width: 500,
      height: 1000,
      svg: () => (
        <svg>
          <FortyGrid width={4} height={10} />
          <FiveGrid x={400} y={500} height={5} />
        </svg>
      ),
    },
  ],
}

export default FORTY_FIVE
