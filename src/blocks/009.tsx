import * as Color from 'color'
import { createBlock } from './Block'
import Grid from './Grid'
import NBlock from './NBlock'

export const NINE_COLORS = {
  dark: new Color('#8A8C8E'),
  medium: new Color('#A6AAAB'),
  light: new Color('#C4C8C9'),
}

export const NineDarkBlock = createBlock(NINE_COLORS.dark)
export const NineMediumBlock = createBlock(NINE_COLORS.medium)
export const NineLightBlock = createBlock(NINE_COLORS.light)

export const NINE: NBlock = {
  number: 9,
  forms: [
    // square
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={NineDarkBlock} width={3} />
          <Grid block={NineMediumBlock} y={100} width={3} />
          <Grid block={NineLightBlock} y={200} width={3} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 900,
      svg: () => (
        <svg>
          <Grid block={NineDarkBlock} height={3} />
          <Grid block={NineMediumBlock} y={300} height={3} />
          <Grid block={NineLightBlock} y={600} height={3} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <NineDarkBlock x={100} />
          <Grid block={NineDarkBlock} y={100} width={2} />
          <Grid block={NineMediumBlock} y={200} width={2} />
          <NineLightBlock y={300} />
          <NineMediumBlock x={100} y={300} />
          <Grid block={NineLightBlock} y={400} width={2} />
        </svg>
      ),
    },
    // swirl
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={NineLightBlock} height={2} />
          <NineLightBlock x={100} />
          <NineMediumBlock x={200} />
          <NineDarkBlock x={200} y={300} />
          <Grid block={NineMediumBlock} x={300} height={2} />
          <Grid block={NineDarkBlock} x={300} y={200} height={2} />
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
          <Grid block={NineLightBlock} x={100} height={2} />
          <Grid block={NineMediumBlock} x={200} height={3} />
          <Grid block={NineDarkBlock} x={300} height={2} />
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
          <Grid block={NineLightBlock} height={3} />
          <Grid block={NineMediumBlock} x={100} y={100} height={3} />
          <Grid block={NineDarkBlock} x={200} height={3} />
        </svg>
      ),
    },
  ],
}

export default NINE
