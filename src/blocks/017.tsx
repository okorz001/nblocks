import { NBlock } from './common'

import { OneBlock } from './001'
import { TwoBlock } from './002'
import { ThreeBlock } from './003'
import { FourBlock } from './004'
import { FiveBlock } from './005'
import { SixBlock } from './006'
import { SevenBlock } from './007'
import { TenGrid } from './010'

export const SEVENTEEN: NBlock = {
  number: 17,
  forms: [
    // hair
    {
      width: 400,
      height: 700,
      svg: () => (
        <svg>
          <ThreeBlock y={100} />
          <TwoBlock y={200} />
          <OneBlock y={300} />
          <FourBlock x={100} y={100} />
          <FiveBlock x={200} y={100} />
          <SevenBlock x={300} />
          <SixBlock x={300} y={100} />
          <TenGrid x={100} y={200} width={2} height={5} />
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
          <SevenBlock x={100} y={300} />
          <SixBlock x={100} y={400} />
          <FiveBlock x={100} y={500} />
          <FourBlock x={100} y={600} />
          <ThreeBlock x={100} y={700} />
          <TwoBlock x={100} y={800} />
          <OneBlock x={100} y={900} />
        </svg>
      ),
    },
  ],
}

export default SEVENTEEN
