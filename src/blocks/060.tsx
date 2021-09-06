import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const SIXTY_COLORS = {
  primary: new Color('#9E79D6'),
}

export const SixtyBlock = createBlock('Sixty', SIXTY_COLORS.primary)
export const SixtyGrid = createGrid('Sixty', SixtyBlock)

export const SIXTY: NBlock = {
  number: 60,
  forms: [
    // 6x10
    {
      width: 600,
      height: 1000,
      svg: () => (
        <svg>
          <SixtyGrid width={6} height={10} />
        </svg>
      ),
    },
  ],
}

export default SIXTY
