import Grid from './Grid'
import NBlock from './NBlock'
import { FourBlock } from './004'
import { TenBlock } from './010'

export const FOURTEEN: NBlock = {
  number: 14,
  forms: [
    // even
    {
      width: 200,
      height: 700,
      svg: () => (
        <svg>
          <Grid block={FourBlock} width={2} height={2} />
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
          <Grid block={FourBlock} x={100} y={600} height={4} />
        </svg>
      ),
    },
    // utah
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={2} height={5} />
          <Grid block={FourBlock} x={200} y={100} height={4} />
        </svg>
      ),
    },
  ],
}

export default FOURTEEN
