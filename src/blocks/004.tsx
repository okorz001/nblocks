import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const FOUR_COLORS = {
  primary: new Color('#46CD2E'),
}

export const FourBlock = createBlock(FOUR_COLORS.primary)
export const FourGrid = createGrid(FourBlock)

export const FOUR: NBlock = {
  number: 4,
  forms: [
    // square
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <FourGrid width={2} height={2} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 400,
      svg: () => (
        <svg>
        <FourGrid height={4} />
        </svg>
      ),
    },
    // L
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FourGrid height={3} />
          <FourBlock x={100} y={200} />
        </svg>
      ),
    },
    // T
    {
      width: 300,
      height: 200,
      svg: () => (
        <svg>
          <FourGrid width={3} />
          <FourBlock x={100} y={100} />
        </svg>
      ),
    },
    // S
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FourGrid height={2} />
          <FourGrid x={100} y={100} height={2} />
        </svg>
      ),
    },
    // flat
    {
      width: 400,
      height: 100,
      svg: () => (
        <svg>
        <FourGrid width={4} />
        </svg>
      ),
    },
  ],
}

export default FOUR
