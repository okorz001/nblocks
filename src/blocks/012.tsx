import { NBlock } from './common'
import { TwoGrid } from './002'
import { TenGrid } from './010'

export const TWELVE: NBlock = {
  number: 12,
  forms: [
    // 3x4
    {
      tags: ['3x', 'x4'],
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid width={3} height={4} />
          <TwoGrid x={100} y={100} height={2} />
        </svg>
      ),
    },
    // even
    {
      tags: ['even', '2x'],
      width: 200,
      height: 600,
      svg: () => (
        <svg>
          <TwoGrid width={2} />
          <TenGrid y={100} width={2} height={5} />
        </svg>
      ),
    },
    // 4x3
    {
      tags: ['4x', 'x3'],
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenGrid width={4} height={3} />
          <TwoGrid x={100} y={100} width={2} />
        </svg>
      ),
    },
    // 6x2
    {
      tags: ['x2'],
      width: 600,
      height: 200,
      svg: () => (
        <svg>
          <TenGrid width={5} height={2} />
          <TwoGrid x={500} height={2} />
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
          <TwoGrid x={100} y={800} height={2} />
        </svg>
      ),
    },
    // O
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid height={4} />
          <TwoGrid x={100} width={2} />
          <TenGrid x={100} y={300} width={2} />
          <TenGrid x={300} height={4} />
        </svg>
      ),
    },
    // b
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid width={2} height={5} />
          <TwoGrid x={200} y={300} height={2} />
        </svg>
      ),
    },
    // moose
    {
      width: 600,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid x={100} height={2} />
          <TenGrid x={400} height={2} />
          <TenGrid y={200} width={6} />
          <TwoGrid x={200} y={300} width={2} />
        </svg>
      ),
    },
  ],
}

export default TWELVE
