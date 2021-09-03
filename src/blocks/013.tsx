import Grid from './Grid'
import NBlock from './NBlock'
import { ThreeBlock } from './003'
import { TenBlock } from './010'

export const THIRTEEN: NBlock = {
  number: 13,
  forms: [
    // comb-over
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <ThreeBlock x={100} />
          <Grid block={ThreeBlock} x={200} height={2} />
          <Grid block={TenBlock} y={100} width={2} height={5} />
        </svg>
      ),
    },
    // b
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={2} height={5} />
          <Grid block={ThreeBlock} x={200} y={200} height={3} />
        </svg>
      ),
    },
    // d, tall
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={200} />
          <Grid block={TenBlock} y={100} width={3} height={3} />
          <Grid block={ThreeBlock} y={400} width={3} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 700,
      svg: () => (
        <svg>
          <ThreeBlock x={100} />
          <Grid block={ThreeBlock} y={100} width={2} />
          <Grid block={TenBlock} y={200} width={2} height={5} />
        </svg>
      ),
    },
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <Grid block={TenBlock} height={10} />
          <Grid block={ThreeBlock} x={100} y={700} height={3} />
        </svg>
      ),
    },
    // lower left nub
    {
      width: 500,
      height: 300,
      svg: () => (
        <svg>
          <TenBlock y={200} />
          <Grid block={TenBlock} x={100} width={3} height={3} />
          <Grid block={ThreeBlock} x={400} height={3} />
        </svg>
      ),
    },
    // d, wide
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock x={300} />
          <Grid block={TenBlock} y={100} width={4} height={2} />
          <TenBlock y={300} />
          <Grid block={ThreeBlock} x={100} y={300} width={3} />
        </svg>
      ),
    },
    // jagged
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <ThreeBlock x={300} />
          <Grid block={ThreeBlock} x={200} y={100} width={2} />
          <Grid block={TenBlock} y={200} width={4} />
          <Grid block={TenBlock} x={100} y={300} width={3} height={2} />
        </svg>
      ),
    },
    // d and 3
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={TenBlock} y={200} height={2} />
          <Grid block={TenBlock} x={100} height={4} width={2} />
          <Grid block={ThreeBlock} x={300} height={3} />
        </svg>
      ),
    },
    // fifteen's minute of fame
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock />
          <Grid block={TenBlock} x={100} width={3} height={4} />
          <Grid block={ThreeBlock} x={200} width={2} />
          <ThreeBlock x={300} y={100} />
        </svg>
      ),
    },
  ],
}

export default THIRTEEN
