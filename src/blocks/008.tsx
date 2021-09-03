import * as Color from 'color'
import { createBlock } from './Block'
import Grid from './Grid'
import NBlock from './NBlock'

export const EIGHT_COLORS = {
  primary: new Color('#EB27A1'),
}

export const EightBlock = createBlock(EIGHT_COLORS.primary)

export const EIGHT: NBlock = {
  number: 8,
  forms: [
    // even
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={EightBlock} width={2} height={4} />
        </svg>
      ),
    },
    // tall
    {
      width: 100,
      height: 800,
      svg: () => (
        <svg>
          <Grid block={EightBlock} height={8} />
        </svg>
      ),
    },
    // O
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={EightBlock} height={3} />
          <EightBlock x={100} />
          <EightBlock x={100} y={200} />
          <Grid block={EightBlock} x={200} height={3} />
        </svg>
      ),
    },
    // cross
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <Grid block={EightBlock} x={100} height={6} />
          <Grid block={EightBlock} y={100} width={3} />
        </svg>
      ),
    },
    // tickler
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={EightBlock} x={300} height={5} />
          <Grid block={EightBlock} y={100} width={3} />
        </svg>
      ),
    },
    // wrench
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <EightBlock y={200} />
          <EightBlock x={100} />
          <Grid block={EightBlock} x={100} y={200} height={3} />
          <Grid block={EightBlock} x={200} height={3} />
        </svg>
      ),
    },
    // rugby
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={EightBlock} y={100} height={2} />
          <Grid block={EightBlock} x={100} width={2} height={2} />
          <Grid block={EightBlock} x={300} y={100} height={2} />
        </svg>
      ),
    },
    // U
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={EightBlock} height={3} />
          <Grid block={EightBlock} x={300} height={3} />
          <Grid block={EightBlock} x={100} y={200} width={2} />
        </svg>
      ),
    },
    // almost square
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <Grid block={EightBlock} width={2} height={3} />
          <Grid block={EightBlock} x={200} y={100} height={2} />
        </svg>
      ),
    },
    // +
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={EightBlock} x={100} height={4} />
          <Grid block={EightBlock} y={100} width={3} height={2} />
        </svg>
      ),
    },
    // bolt
    {
      width: 200,
      height: 700,
      svg: () => (
        <svg>
          <Grid block={EightBlock} y={300} height={4} />
          <Grid block={EightBlock} x={100} height={4} />
        </svg>
      ),
    },
    // zig zag
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={EightBlock} height={2} />
          <Grid block={EightBlock} x={100} y={100} height={2} />
          <Grid block={EightBlock} x={200} y={200} height={2} />
          <Grid block={EightBlock} x={300} y={300} height={2} />
        </svg>
      ),
    },
    // ?
    {
      width: 300,
      height: 550,
      svg: () => (
        <svg>
          <Grid block={EightBlock} width={3} />
          <Grid block={EightBlock} x={100} y={200} height={2} />
          <Grid block={EightBlock} x={200} y={100} height={2} />
          <EightBlock x={100} y={450} />
        </svg>
      ),
    },
  ],
}

export default EIGHT
