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
      width: 400,
      height: 1000,
      svg: () => (
        <svg>
          <FortyGrid width={4} height={10} />
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
