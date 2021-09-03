import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const THREE_COLORS = {
  primary: new Color('#E0CF16'),
}

export const ThreeBlock = createBlock('Three', THREE_COLORS.primary)
export const ThreeGrid = createGrid('Three', ThreeBlock)

export const THREE: NBlock = {
  number: 3,
  forms: [
    // tall
    {
      width: 100,
      height: 300,
      svg: () => (
        <svg>
          <ThreeGrid height={3} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <ThreeBlock x={100} />
          <ThreeGrid y={100} width={2} />
        </svg>
      ),
    },
    // flat
    {
      width: 300,
      height: 100,
      svg: () => (
        <svg>
          <ThreeGrid width={3} />
        </svg>
      ),
    },
    // top right
    {
      width: 200,
      height: 200,
      svg: () => (
        <svg>
          <ThreeBlock />
          <ThreeGrid x={100} height={2} />
        </svg>
      ),
    },
  ],
}

export default THREE
