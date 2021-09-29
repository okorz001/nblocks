import { NBlock } from './common'
import { FourGrid } from './004'
import { SixtyGrid } from './060'

export const SIXTY_FOUR: NBlock = {
  number: 64,
  forms: [
    // square
    {
      tags: ['square'],
      width: 800,
      height: 800,
      svg: () => (
        <svg>
          <SixtyGrid width={8} height={8} />
          <FourGrid x={300} y={300} width={2} height={2} />
        </svg>
      ),
    },
    // composite
    {
      width: 700,
      height: 1000,
      svg: () => (
        <svg>
          <SixtyGrid width={6} height={10} />
          <FourGrid x={600} y={600} height={4} />
        </svg>
      ),
    },
  ],
}

export default SIXTY_FOUR
