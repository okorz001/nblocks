import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const FIFTY_COLORS = {
  primary: new Color('#A1E8F3'),
}

export const FiftyBlock = createBlock('Fifty', FIFTY_COLORS.primary)
export const FiftyGrid = createGrid('Fifty', FiftyBlock)

export const FIFTY: NBlock = {
  number: 50,
  forms: [
    // 5x10
    {
      width: 500,
      height: 1000,
      svg: () => (
        <svg>
          <FiftyGrid width={5} height={10} />
        </svg>
      ),
    },
  ],
}

export default FIFTY
