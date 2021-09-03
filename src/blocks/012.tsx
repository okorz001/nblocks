import Grid from './Grid'
import NBlock from './NBlock'
import { TwoBlock } from './002'
import { TenBlock } from './010'

export const TWELVE: NBlock = {
  number: 12,
  forms: [
    // 3x4
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={3} height={4} />
          <Grid block={TwoBlock} x={100} y={100} height={2} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 600,
      svg: () => (
        <svg>
          <Grid block={TwoBlock} width={2} />
          <Grid block={TenBlock} y={100} width={2} height={5} />
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
          <Grid block={TwoBlock} x={100} y={800} height={2} />
        </svg>
      ),
    },
    // O
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <Grid block={TenBlock} height={4} />
          <Grid block={TwoBlock} x={100} width={2} />
          <Grid block={TenBlock} x={100} y={300} width={2} />
          <Grid block={TenBlock} x={300} height={4} />
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
          <Grid block={TwoBlock} x={200} y={300} height={2} />
        </svg>
      ),
    },
  ],
}

export default TWELVE
