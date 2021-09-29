import * as Color from 'color'
import { BlockProps, createBlock, createGrid, NBlock } from './common'

export const ONE_HUNDRED_COLORS = {
  dark: new Color('#F86F6E'),
  light: new Color('#FF8484'),
}

export const OneHundredDarkBlock = createBlock('OneHundredDark', ONE_HUNDRED_COLORS.dark)
export const OneHundredLightBlock = createBlock('OneHundredMedium', ONE_HUNDRED_COLORS.light)

export const OneHundredCheckerboard: React.FC<BlockProps> = (props) => (
  <svg x={props.x || 0} y={props.y || 0}>
    <OneHundredDarkBlock />
    <OneHundredLightBlock x={100} />
    <OneHundredLightBlock y={100} />
    <OneHundredDarkBlock x={100} y={100} />
  </svg>
)

export const OneHundredCheckerboardGrid = createGrid('OneHundredCheckerboard', OneHundredCheckerboard, 200)

export const ONE_HUNDRED: NBlock = {
  number: 100,
  forms: [
    // square
    {
      tags: ['square', '10x', 'x10'],
      width: 1000,
      height: 1000,
      svg: () => (
        <svg>
          <OneHundredCheckerboardGrid width={5} height={5} />
        </svg>
      ),
    },
  ],
}

export default ONE_HUNDRED
