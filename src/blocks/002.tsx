import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const TWO_COLORS = {
  primary: new Color('#E09025'),
}

export const TwoBlock = createBlock(TWO_COLORS.primary)
export const TwoGrid = createGrid(TwoBlock)

export const TWO: NBlock = {
  number: 2,
  forms: [
    // tall
    {
      width: 100,
      height: 200,
      svg: () => (
        <svg>
          <TwoGrid height={2} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 100,
      svg: () => (
        <svg>
          <TwoGrid width={2} />
        </svg>
      ),
    },
  ],
}

export default TWO
