import { NBlock } from './common'
import { FiveGrid } from './005'
import { FiftyBlock, FiftyGrid } from './050'

export const FIFTY_FIVE: NBlock = {
  number: 55,
  forms: [
    // step
    {
      width: 1000,
      height: 1000,
      svg: () => (
        <svg>
          <FiftyBlock y={900} />
          <FiftyGrid x={100} y={800} height={2} />
          <FiftyGrid x={200} y={700} height={3} />
          <FiftyGrid x={300} y={600} height={4} />
          <FiftyGrid x={400} y={500} height={5} />
          <FiftyGrid x={500} y={400} height={6} />
          <FiftyGrid x={600} y={300} height={7} />
          <FiftyGrid x={700} y={200} height={8} />
          <FiftyGrid x={800} y={100} height={9} />
          <FiveGrid x={900} height={5} />
          <FiftyGrid x={900} y={500} height={5} />
        </svg>
      ),
    },
    // 11x5
    {
      width: 500,
      height: 1100,
      svg: () => (
        <svg>
          <FiveGrid width={5} />
          <FiftyGrid y={100} width={5} height={10} />
        </svg>
      ),
    },
    // composite
    {
      width: 600,
      height: 1000,
      svg: () => (
        <svg>
          <FiftyGrid width={5} height={10} />
          <FiveGrid x={500} y={500} height={5} />
        </svg>
      ),
    },
    // spaceship
    {
      width: 500,
      height: 2100,
      svg: () => (
        <svg>
          <FiveGrid x={200} height={5} />
          <FiftyGrid x={200} y={500} height={10} />
          <FiftyGrid x={100} y={800} height={10} />
          <FiftyGrid x={300} y={800} height={10} />
          <FiftyGrid y={1100} height={10} />
          <FiftyGrid x={400} y={1100} height={10} />
        </svg>
      ),
    },
  ],
}

export default FIFTY_FIVE
