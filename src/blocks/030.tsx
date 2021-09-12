import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const THIRTY_COLORS = {
  primary: new Color('#FCFCBA'),
}

export const ThirtyBlock = createBlock('Thirty', THIRTY_COLORS.primary)
export const ThirtyGrid = createGrid('Thirty', ThirtyBlock)

export const THIRTY: NBlock = {
  number: 30,
  forms: [
    // 3x10
    {
      width: 300,
      height: 1000,
      svg: () => (
        <svg>
          <ThirtyGrid width={3} height={10} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 1500,
      svg: () => (
        <svg>
          <ThirtyGrid width={2} height={15} />
        </svg>
      ),
    },
    // calendar
    {
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <ThirtyGrid width={7} height={4} />
          <ThirtyGrid y={400} width={2} />
        </svg>
      ),
    },
    // 6x5
    {
      width: 600,
      height: 500,
      svg: () => (
        <svg>
          <ThirtyGrid width={6} height={5} />
        </svg>
      ),
    },
  ],
}

export default THIRTY
