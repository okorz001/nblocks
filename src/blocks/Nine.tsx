import * as Color from 'color'
import { createBlock } from './Block'
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
          <NineDarkBlock x={0} y= {0} />
          <NineDarkBlock x={100} y= {0} />
          <NineDarkBlock x={200} y= {0} />
          <NineMediumBlock x={0} y= {100} />
          <NineMediumBlock x={100} y= {100} />
          <NineMediumBlock x={200} y= {100} />
          <NineLightBlock x={0} y= {200} />
          <NineLightBlock x={100} y= {200} />
          <NineLightBlock x={200} y= {200} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 900,
      svg: () => (
        <svg>
          <NineDarkBlock x={0} y= {0} />
          <NineDarkBlock x={0} y= {100} />
          <NineDarkBlock x={0} y= {200} />
          <NineMediumBlock x={0} y= {300} />
          <NineMediumBlock x={0} y= {400} />
          <NineMediumBlock x={0} y= {500} />
          <NineLightBlock x={0} y= {600} />
          <NineLightBlock x={0} y= {700} />
          <NineLightBlock x={0} y= {800} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <NineDarkBlock x={100} y= {0} />
          <NineDarkBlock x={0} y= {100} />
          <NineDarkBlock x={100} y= {100} />
          <NineMediumBlock x={0} y= {200} />
          <NineMediumBlock x={100} y= {200} />
          <NineMediumBlock x={100} y= {300} />
          <NineLightBlock x={0} y= {300} />
          <NineLightBlock x={0} y= {400} />
          <NineLightBlock x={100} y= {400} />
        </svg>
      ),
    },
    // swirl
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <NineLightBlock x={0} y= {100} />
          <NineLightBlock x={0} y= {0} />
          <NineLightBlock x={100} y= {0} />
          <NineMediumBlock x={200} y= {0} />
          <NineMediumBlock x={300} y= {0} />
          <NineMediumBlock x={300} y= {100} />
          <NineDarkBlock x={300} y= {200} />
          <NineDarkBlock x={300} y= {300} />
          <NineDarkBlock x={200} y= {300} />
        </svg>
      ),
    },
    // triangle
    {
      width: 500,
      height: 300,
      svg: () => (
        <svg>
          <NineLightBlock x={0} y= {0} />
          <NineLightBlock x={100} y= {0} />
          <NineLightBlock x={100} y= {100} />
          <NineMediumBlock x={200} y= {0} />
          <NineMediumBlock x={200} y= {100} />
          <NineMediumBlock x={200} y= {200} />
          <NineDarkBlock x={300} y= {0} />
          <NineDarkBlock x={300} y= {100} />
          <NineDarkBlock x={400} y= {0} />
        </svg>
      ),
    },
    // fork
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <NineLightBlock x={0} y= {0} />
          <NineLightBlock x={0} y= {100} />
          <NineLightBlock x={0} y= {200} />
          <NineMediumBlock x={100} y= {100} />
          <NineMediumBlock x={100} y= {200} />
          <NineMediumBlock x={100} y= {300} />
          <NineDarkBlock x={200} y= {0} />
          <NineDarkBlock x={200} y= {100} />
          <NineDarkBlock x={200} y= {200} />
        </svg>
      ),
    },
  ],
}

export default NINE
