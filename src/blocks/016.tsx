import Grid from './Grid'
import NBlock from './NBlock'
import { SixBlock } from './006'
import { TenBlock } from './010'

export const SIXTEEN: NBlock = {
  number: 16,
  forms: [
    // square
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={4} height={3} />
          <Grid block={SixBlock} x={100} y={200} width={2} />
          <Grid block={SixBlock} y={300} width={4} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 800,
      svg: () => (
        <svg>
          <Grid block={SixBlock} width={2} height={3} />
          <Grid block={TenBlock} y={300} width={2} height={5} />
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
          <Grid block={SixBlock} x={100} y={400} height={6} />
        </svg>
      ),
    },
    // bowl cut
    {
      width: 400,
      height: 600,
      svg: () => (
        <svg>
          <Grid block={SixBlock} width={4} height={2} />
          <Grid block={TenBlock} x={100} y={100} width={2} height={5} />
        </svg>
      ),
    },
    // fork
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={TenBlock} y={100} width={2} height={3} />
          <Grid block={TenBlock} x={100} y={200} width={2} height={3} />
          <Grid block={SixBlock} x={300} width={2} height={3} />
        </svg>
      ),
    },
    // crazy hair
    {
      width: 800,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={3} />
          <Grid block={SixBlock} x={500} width={3} />
          <Grid block={TenBlock} x={100} y={100} width={3} />
          <Grid block={SixBlock} x={400} y={100} width={3} />
          <Grid block={TenBlock} x={300} y={200} width={2} height={2} />
        </svg>
      ),
    },
    // mushroom
    {
      width: 600,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={TenBlock} x={100} width={4} />
          <Grid block={TenBlock} y={100} width={6} />
          <Grid block={SixBlock} x={200} y={200} width={2} height={3} />
        </svg>
      ),
    },
  ],
}

export default SIXTEEN
