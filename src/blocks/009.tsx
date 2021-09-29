import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const NINE_COLORS = {
  dark: new Color('#8A8C8E'),
  medium: new Color('#A6AAAB'),
  light: new Color('#C4C8C9'),
}

export const NineDarkBlock = createBlock('NineDark', NINE_COLORS.dark)
export const NineDarkGrid = createGrid('NineDark', NineDarkBlock)

export const NineMediumBlock = createBlock('NineMedium', NINE_COLORS.medium)
export const NineMediumGrid = createGrid('NineMedium', NineMediumBlock)

export const NineLightBlock = createBlock('NineLight', NINE_COLORS.light)
export const NineLightGrid = createGrid('NineLight', NineLightBlock)

export const NINE: NBlock = {
  number: 9,
  forms: [
    // square
    {
      tags: ['square', '3x', 'x3'],
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <NineDarkGrid width={3} />
          <NineMediumGrid y={100} width={3} />
          <NineLightGrid y={200} width={3} />
        </svg>
      ),
    },
    // tall
    {
      tags: ['1x'],
      width: 100,
      height: 900,
      svg: () => (
        <svg>
          <NineDarkGrid height={3} />
          <NineMediumGrid y={300} height={3} />
          <NineLightGrid y={600} height={3} />
        </svg>
      ),
    },
    // odd
    {
      tags: ['odd'],
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <NineDarkBlock x={100} />
          <NineDarkGrid y={100} width={2} />
          <NineMediumGrid y={200} width={2} />
          <NineLightBlock y={300} />
          <NineMediumBlock x={100} y={300} />
          <NineLightGrid y={400} width={2} />
        </svg>
      ),
    },
    // wide
    {
      tags: ['x1'],
      width: 900,
      height: 100,
      svg: () => (
        <svg>
          <NineLightGrid width={3} />
          <NineMediumGrid x={300} width={3} />
          <NineDarkGrid x={600} width={3} />
        </svg>
      ),
    },
    // swirl
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <NineLightGrid height={2} />
          <NineLightBlock x={100} />
          <NineMediumBlock x={200} />
          <NineDarkBlock x={200} y={300} />
          <NineMediumGrid x={300} height={2} />
          <NineDarkGrid x={300} y={200} height={2} />
        </svg>
      ),
    },
    // triangle
    {
      width: 500,
      height: 300,
      svg: () => (
        <svg>
          <NineLightBlock />
          <NineLightGrid x={100} height={2} />
          <NineMediumGrid x={200} height={3} />
          <NineDarkGrid x={300} height={2} />
          <NineDarkBlock x={400} />
        </svg>
      ),
    },
    // fork
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <NineLightGrid height={3} />
          <NineMediumGrid x={100} y={100} height={3} />
          <NineDarkGrid x={200} height={3} />
        </svg>
      ),
    },
    // +
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <NineDarkGrid y={200} width={5} />
          <NineMediumGrid x={100} y={200} width={3} />
          <NineDarkBlock x={200} />
          <NineMediumBlock x={200} y={100} />
          <NineLightGrid x={200} y={200} height={3} />
        </svg>
      ),
    },
  ],
}

export default NINE
