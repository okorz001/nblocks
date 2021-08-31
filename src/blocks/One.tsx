import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const ONE_COLORS = {
  primary: new Color('#E41C20'),
  shadow: new Color('#BA121C'),
}

export const OneBlock = createBlock(ONE_COLORS)

export const ONE: NBlock = {
  number: 1,
  forms: [
    {
      width: 100,
      height: 100,
      svg: () => (
        <svg>
          <OneBlock x={0} y= {0} />
        </svg>
      ),
    },
  ],
}

export default ONE
