import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const TWENTY_COLORS = {
  primary: new Color('#F9DEA6'),
}

export const TwentyBlock = createBlock('Twenty', TWENTY_COLORS.primary)
export const TwentyGrid = createGrid('Twenty', TwentyBlock)

export const TWENTY: NBlock = {
  number: 20,
  forms: [
    // even
    {
      tags: ['even', '2x', 'x10'],
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TwentyGrid width={2} height={10} />
        </svg>
      ),
    },
    // 4x5
    {
      tags: ['4x', 'x5'],
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <TwentyGrid width={4} height={5} />
        </svg>
      ),
    },
    // 5x4
    {
      tags: ['5x', 'x4'],
      width: 500,
      height: 400,
      svg: () => (
        <svg>
          <TwentyGrid width={5} height={4} />
        </svg>
      ),
    },
    // 10x2
    {
      tags: ['10x', 'x2'],
      width: 1000,
      height: 200,
      svg: () => (
        <svg>
          <TwentyGrid width={10} height={2} />
        </svg>
      ),
    },
    // O
    {
      width: 600,
      height: 600,
      svg: () => (
        <svg>
          <TwentyGrid width={6} />
          <TwentyGrid y={100} height={4} />
          <TwentyGrid x={500} y={100} height={4} />
          <TwentyGrid y={500} width={6} />
        </svg>
      ),
    },
  ],
}

export default TWENTY
