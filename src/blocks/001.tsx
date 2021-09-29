import * as Color from 'color'
import { createBlock, NBlock } from './common'

export const ONE_COLORS = {
  primary: new Color('#E41C20'),
}

export const OneBlock = createBlock('One', ONE_COLORS.primary)

export const ONE: NBlock = {
  number: 1,
  forms: [
    {
      tags: ['square', 'step', 'odd', '1x', 'x1'],
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
