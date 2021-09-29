import { NBlock } from './common'

import { EightGrid } from './008'
import { TenGrid } from './010'

export const EIGHTEEN: NBlock = {
  number: 18,
  forms: [
    // 3x6
    {
      tags: ['3x'],
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <EightGrid width={3} height={6} />
          <TenGrid width={2} height={5} />
        </svg>
      ),
    },
    // even
    {
      tags: ['even', '2x'],
      width: 200,
      height: 900,
      svg: () => (
        <svg>
          <EightGrid width={2} height={4} />
          <TenGrid y={400} width={2} height={5} />
        </svg>
      ),
    },
    // 6x3
    {
      tags: ['x3'],
      width: 600,
      height: 300,
      svg: () => (
        <svg>
          <EightGrid width={6} height={3} />
          <TenGrid y={100} width={5} height={2} />
        </svg>
      ),
    },
    // 9x2
    {
      tags: ['x2'],
      width: 900,
      height: 200,
      svg: () => (
        <svg>
          <TenGrid width={5} height={2} />
          <EightGrid x={500} width={4} height={2} />
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
    // two-horn
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <EightGrid x={100} height={3} />
          <EightGrid x={200} y={200} height={2} />
          <EightGrid x={300} height={3} />
          <TenGrid y={300} width={5} />
          <TenGrid x={100} y={400} width={3} />
          <TenGrid x={200} y={500} height={2} />
        </svg>
      ),
    },
    // 7x3 - 3
    {
      width: 700,
      height: 300,
      svg: () => (
        <svg>
          <TenGrid y={100} width={7} height={2} />
          <EightGrid width={4} height={2} />
        </svg>
      ),
    },
  ],
}

export default EIGHTEEN
