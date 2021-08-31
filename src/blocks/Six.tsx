import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const SIX_COLORS = {
  primary: new Color('#5829BD'),
  shadow: new Color('#361283'),
}

export const SixBlock = createBlock(SIX_COLORS)

export const SIX: NBlock = {
  number: 6,
  forms: [
    // even
    {
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={100} y= {0} />
          <SixBlock x={100} y= {100} />
          <SixBlock x={100} y= {200} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 600,
      svg: () => (
        <svg>
          <SixBlock x={0} y= {0} />
          <SixBlock x={0} y= {100} />
          <SixBlock x={0} y= {200} />
          <SixBlock x={0} y= {300} />
          <SixBlock x={0} y= {400} />
          <SixBlock x={0} y= {500} />
        </svg>
      ),
    },
  ],
}

export default SIX
