import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const FIVE_COLORS = {
  primary: new Color('#2AACC7'),
}

export const FiveBlock = createBlock(FIVE_COLORS.primary)
export const FiveGrid = createGrid(FiveBlock)

export const FIVE: NBlock = {
  number: 5,
  forms: [
    // tall
    {
      width: 100,
      height: 500,
      svg: () => (
        <svg>
          <FiveGrid height={5} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock x={100} />
          <FiveGrid y={100} width={2} height={2} />
        </svg>
      ),
    },
    // Γ
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <FiveGrid height={4} />
          <FiveBlock x={100} />
        </svg>
      ),
    },
    // +
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveGrid x={100} height={3} />
          <FiveGrid y={100} width={3} />
        </svg>
      ),
    },
    // C
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <FiveGrid height={3} />
          <FiveBlock x={100} />
          <FiveBlock x={100} y={200} />
        </svg>
      ),
    },
    // T
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveGrid width={3} />
          <FiveGrid x={100} y={100} height={2} />
        </svg>
      ),
    },
    // Z
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock />
          <FiveGrid x={100} height={3} />
          <FiveBlock x={200} y={200} />
        </svg>
      ),
    },
    // stampolines
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveBlock y={100} />
          <FiveGrid x={100} height={3} />
          <FiveBlock x={200} />
        </svg>
      ),
    },
    // top right
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <FiveGrid width={3} />
          <FiveGrid x={200} y={100} height={2} />
        </svg>
      ),
    },
  ],
}

export default FIVE
