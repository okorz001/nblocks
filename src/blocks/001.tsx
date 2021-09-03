import * as Color from 'color'
import { createBlock } from './Block'
import NBlock from './NBlock'

export const ONE_COLORS = {
  primary: new Color('#E41C20'),
}

export const OneBlock = createBlock(ONE_COLORS.primary)

export const ONE: NBlock = {
  number: 1,
  forms: [
    {
      width: 100,
      height: 100,
      svg: () => (
        <svg>
          <OneBlock />
        </svg>
      ),
    },
  ],
}

export default ONE
