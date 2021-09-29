import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const TWO_COLORS = {
  primary: new Color('#E09025'),
}

export const TwoBlock = createBlock('Two', TWO_COLORS.primary)
export const TwoGrid = createGrid('Two', TwoBlock)

export const TWO: NBlock = {
  number: 2,
  forms: [
    // tall
    {
      tags: ['1x', 'x2'],
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
      tags: ['even', '2x', 'x1'],
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
