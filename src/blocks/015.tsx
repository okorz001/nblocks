import Grid from './Grid'
import NBlock from './NBlock'
import { FiveBlock } from './005'
import { TenBlock } from './010'

export const FIFTEEN: NBlock = {
  number: 15,
  forms: [
    // step
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={FiveBlock} x={400} height={5} />
          <Grid block={TenBlock} x={300} y={100} height={4} />
          <Grid block={TenBlock} x={200} y={200} height={3} />
          <Grid block={TenBlock} x={100} y={300} height={2} />
          <TenBlock y={400}/>
        </svg>
      ),
    },
    // 3x5
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={2} height={5} />
          <Grid block={FiveBlock} x={200} height={5} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 800,
      svg: () => (
        <svg>
          <FiveBlock x={100} />
          <Grid block={FiveBlock} y={100} width={2} height={2} />
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
          <Grid block={FiveBlock} x={100} y={500} height={5} />
        </svg>
      ),
    },
    // tree
    {
      width: 300,
      height: 900,
      svg: () => (
        <svg>
          <TenBlock x={100} />
          <Grid block={TenBlock} y={100} width={3} height={3} />
          <Grid block={FiveBlock} x={100} y={400} height={5} />
        </svg>
      ),
    },
  ],
}

export default FIFTEEN
