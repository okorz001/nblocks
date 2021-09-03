import { NBlock } from './common'

import { NineLightGrid, NineMediumGrid, NineDarkGrid } from './009'
import { TenGrid } from './010'

export const NINETEEN: NBlock = {
  number: 19,
  forms: [
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TenGrid height={10} />
          <NineDarkGrid x={100} y={100} height={3} />
          <NineMediumGrid x={100} y={400} height={3} />
          <NineLightGrid x={100} y={700} height={3} />
        </svg>
      ),
    },
  ],
}

export default NINETEEN
