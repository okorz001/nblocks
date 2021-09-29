import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'
import { TwentyGrid } from './020'
import { ThirtyGrid } from './030'
import { FortyGrid } from './040'
import { FiftyGrid } from './050'
import { SixtyGrid } from './060'

export const SEVENTY_COLORS = {
  primary: new Color('#C194E8'),
  // should this be on 10?
  red: new Color('#F9A39B')
}

export const SeventyBlock = createBlock('Seventy', SEVENTY_COLORS.primary)
export const SeventyGrid = createGrid('Seventy', SeventyBlock)

export const SeventyRedBlock = createBlock('SeventyRed', SEVENTY_COLORS.red)
export const SeventyRedGrid = createGrid('SeventyRed', SeventyRedBlock)

export const SEVENTY: NBlock = {
  number: 70,
  forms: [
    // 7x10
    {
      tags: ['x10'],
      width: 700,
      height: 1000,
      svg: () => (
        <svg>
          <SeventyRedGrid height={10} />
          <TwentyGrid x={100} height={10} />
          <ThirtyGrid x={200} height={10} />
          <FortyGrid x={300} height={10} />
          <FiftyGrid x={400} height={10} />
          <SixtyGrid x={500} height={10} />
          <SeventyGrid x={600} height={10} />
        </svg>
      ),
    },
  ],
}

export default SEVENTY
