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
          <FourBlock x={0} y= {0} />
          <FourBlock x={0} y= {100} />
          <FourBlock x={100} y= {0} />
          <FourBlock x={100} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={100} y= {500} />
          <TenBlock x={100} y= {600} />
        </svg>
      ),
    },
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={0} y= {700} />
          <TenBlock x={0} y= {800} />
          <TenBlock x={0} y= {900} />
          <FourBlock x={100} y= {600} />
          <FourBlock x={100} y= {700} />
          <FourBlock x={100} y= {800} />
          <FourBlock x={100} y= {900} />
        </svg>
      ),
    },
    // utah
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <FourBlock x={200} y= {100} />
          <FourBlock x={200} y= {200} />
          <FourBlock x={200} y= {300} />
          <FourBlock x={200} y= {400} />
        </svg>
      ),
    },
  ],
}

export default FOURTEEN
