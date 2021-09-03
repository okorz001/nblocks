import Grid from './Grid'
import NBlock from './NBlock'
import { OneBlock } from './001'
import { TenBlock } from './010'

export const ELEVEN: NBlock = {
  number: 11,
  forms: [
    // odd
    {
      width: 200,
      height: 600,
      svg: () => (
        <svg>
          <OneBlock x={100} y={0} />
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
          <OneBlock x={100} y={900} />
        </svg>
      ),
    },
    // spiral
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <OneBlock x={200} />
          <Grid block={TenBlock} y={100} width={3} height={3} />
          <TenBlock y={400} />
        </svg>
      ),
    },
    // wide
    {
      width: 500,
      height: 300,
      svg: () => (
        <svg>
          <OneBlock x={400} y={0} />
          <Grid block={TenBlock} y={100} width={5} height={2} />
        </svg>
      ),
    },
    // b, wide
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock />
          <OneBlock x={100} />
          <Grid block={TenBlock} y={100} width={3} height={3} />
        </svg>
      ),
    },
    // b, tall
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <Grid block={TenBlock} width={2} height={5} />
          <OneBlock x={200} y={400} />
        </svg>
      ),
    },
  ],
}

export default ELEVEN
