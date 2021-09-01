import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const TWO_COLORS = {
  primary: new Color('#E09025'),
}

export const TwoBlock = createBlock(TWO_COLORS.primary)

export const TWO: NBlock = {
  number: 2,
  forms: [
    // tall
    {
      width: 100,
      height: 200,
      svg: () => (
        <svg>
          <TwoBlock x={0} y= {0} />
          <TwoBlock x={0} y= {100} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 100,
      svg: () => (
        <svg>
          <TwoBlock x={0} y= {0} />
          <TwoBlock x={100} y= {0} />
        </svg>
      ),
    },
  ],
}

export default TWO
