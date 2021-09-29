import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const FORTY_COLORS = {
  primary: new Color('#BBFEB1'),
}

export const FortyBlock = createBlock('Forty', FORTY_COLORS.primary)
export const FortyGrid = createGrid('Forty', FortyBlock)

export const FORTY: NBlock = {
  number: 40,
  forms: [
    // 4x10
    {
      tags: ['4x', 'x10'],
      width: 400,
      height: 1000,
      svg: () => (
        <svg>
          <FortyGrid width={4} height={10} />
        </svg>
      ),
    },
    // 8x5
    {
      tags: ['5x'],
      width: 500,
      height: 800,
      svg: () => (
        <svg>
          <FortyGrid width={5} height={8} />
        </svg>
      ),
    },
    // 8x5
    {
      tags: ['x5'],
      width: 800,
      height: 500,
      svg: () => (
        <svg>
          <FortyGrid width={8} height={5} />
        </svg>
      ),
    },
    // 10x4
    {
      tags: ['10x', 'x4'],
      width: 1000,
      height: 400,
      svg: () => (
        <svg>
          <FortyGrid width={10} height={4} />
        </svg>
      ),
    },
    // horn
    {
      width: 300,
      height: 2000,
      svg: () => (
        <svg>
          <FortyGrid x={100} height={10} />
          <FortyGrid y={1000} width={3} height={10} />
        </svg>
      ),
    },
  ],
}

export default FORTY
