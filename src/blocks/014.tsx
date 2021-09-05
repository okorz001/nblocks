import { NBlock } from './common'
import { FourGrid } from './004'
import { TenGrid } from './010'

export const FOURTEEN: NBlock = {
  number: 14,
  forms: [
    // even
    {
      width: 200,
      height: 700,
      svg: () => (
        <svg>
          <FourGrid width={2} height={2} />
          <TenGrid y={200} width={2} height={5} />
        </svg>
      ),
    },
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TenGrid height={10} />
          <FourGrid x={100} y={600} height={4} />
        </svg>
      ),
    },
    // utah
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid width={2} height={5} />
          <FourGrid x={200} y={100} height={4} />
        </svg>
      ),
    },
    // one-horn
    {
      width: 500,
      height: 800,
      svg: () => (
        <svg>
          <TenGrid x={200} height={200} />
          <TenGrid y={200} width={5} />
          <TenGrid x={100} y={300} width={3} />
          <FourGrid x={200} y={400} height={4} />
        </svg>
      ),
    },
  ],
}

export default FOURTEEN
