import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const NINETY_COLORS = {
  dark: new Color('#A2A59E'),
  medium: new Color('#C3C6BD'),
  light: new Color('#EBE9DF'),
}

export const NinetyDarkBlock = createBlock('NinetyDark', NINETY_COLORS.dark)
export const NinetyDarkGrid = createGrid('NinetyDark', NinetyDarkBlock)

export const NinetyMediumBlock = createBlock('NinetyMedium', NINETY_COLORS.medium)
export const NinetyMediumGrid = createGrid('NinetyMedium', NinetyMediumBlock)

export const NinetyLightBlock = createBlock('NinetyLight', NINETY_COLORS.light)
export const NinetyLightGrid = createGrid('NinetyLight', NinetyLightBlock)

export const NINETY: NBlock = {
  number: 90,
  forms: [
    // 9x10
    {
      tags: ['x10'],
      width: 900,
      height: 1000,
      svg: () => (
        <svg>
          <NinetyLightGrid width={3} height={10} />
          <NinetyMediumGrid x={300} width={3} height={10} />
          <NinetyDarkGrid x={600} width={3} height={10} />
        </svg>
      ),
    },
  ],
}

export default NINETY
