import { NBlock } from './common'

import { EightGrid } from './008'
import { TenGrid } from './010'

export const EIGHTEEN: NBlock = {
  number: 18,
  forms: [
    // 3x6
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <EightGrid width={3} height={6} />
          <TenGrid width={2} height={5} />
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
          <EightGrid x={100} y={200} height={8} />
        </svg>
      ),
    },
  ],
}

export default EIGHTEEN
