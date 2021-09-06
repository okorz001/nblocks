import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const THIRTY_COLORS = {
  primary: new Color('#FCFCBA'),
}

export const ThirtyBlock = createBlock('Thirty', THIRTY_COLORS.primary)
export const ThirtyGrid = createGrid('Thirty', ThirtyBlock)

export const THIRTY: NBlock = {
  number: 30,
  forms: [
    // 3x10
    {
      width: 300,
      height: 1000,
      svg: () => (
        <svg>
          <ThirtyGrid width={3} height={10} />
        </svg>
      ),
    },
  ],
}

export default THIRTY
