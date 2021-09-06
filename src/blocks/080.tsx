import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const EIGHTY_COLORS = {
  primary: new Color('#F9A2D9'),
}

export const EightyBlock = createBlock('Eighty', EIGHTY_COLORS.primary)
export const EightyGrid = createGrid('Eighty', EightyBlock)

export const EIGHTY: NBlock = {
  number: 80,
  forms: [
    // 8x10
    {
      width: 800,
      height: 1000,
      svg: () => (
        <svg>
          <EightyGrid width={8} height={10} />
        </svg>
      ),
    },
  ],
}

export default EIGHTY
