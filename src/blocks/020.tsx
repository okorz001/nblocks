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
    // 2x10
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TwentyGrid width={2} height={10} />
        </svg>
      ),
    },
    // 5x4
    {
      width: 500,
      height: 400,
      svg: () => (
        <svg>
          <TwentyGrid width={5} height={4} />
        </svg>
      ),
    },
  ],
}

export default TWENTY
