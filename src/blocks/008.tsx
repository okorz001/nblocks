import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const EIGHT_COLORS = {
  primary: new Color('#EB27A1'),
}

export const EightBlock = createBlock('Eight', EIGHT_COLORS.primary)
export const EightGrid = createGrid('Eight', EightBlock)

export const EIGHT: NBlock = {
  number: 8,
  forms: [
    // even
    {
      tags: ['even', '2x', 'x4'],
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <EightGrid width={2} height={4} />
        </svg>
      ),
    },
    // tall
    {
      tags: ['1x'],
      width: 100,
      height: 800,
      svg: () => (
        <svg>
          <EightGrid height={8} />
        </svg>
      ),
    },
    // 4x2
    {
      tags: ['4x', 'x2'],
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <EightGrid width={4} height={2} />
        </svg>
      ),
    },
    // wide
    {
      tags: ['x1'],
      width: 800,
      height: 100,
      svg: () => (
        <svg>
          <EightGrid width={8} />
        </svg>
      ),
    },
    // O
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <EightGrid height={3} />
          <EightBlock x={100} />
          <EightBlock x={100} y={200} />
          <EightGrid x={200} height={3} />
        </svg>
      ),
    },
    // cross
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <EightGrid x={100} height={6} />
          <EightGrid y={100} width={3} />
        </svg>
      ),
    },
    // tickler
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <EightGrid x={300} height={5} />
          <EightGrid y={100} width={3} />
        </svg>
      ),
    },
    // wrench
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <EightBlock y={200} />
          <EightBlock x={100} />
          <EightGrid x={100} y={200} height={3} />
          <EightGrid x={200} height={3} />
        </svg>
      ),
    },
    // rugby
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <EightGrid y={100} height={2} />
          <EightGrid x={100} width={2} height={2} />
          <EightGrid x={300} y={100} height={2} />
        </svg>
      ),
    },
    // U
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <EightGrid height={3} />
          <EightGrid x={300} height={3} />
          <EightGrid x={100} y={200} width={2} />
        </svg>
      ),
    },
    // almost square
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <EightGrid width={2} height={3} />
          <EightGrid x={200} y={100} height={2} />
        </svg>
      ),
    },
    // +
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <EightGrid x={100} height={4} />
          <EightGrid y={100} width={3} height={2} />
        </svg>
      ),
    },
    // bolt
    {
      width: 200,
      height: 700,
      svg: () => (
        <svg>
          <EightGrid y={300} height={4} />
          <EightGrid x={100} height={4} />
        </svg>
      ),
    },
    // zig zag
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <EightGrid height={2} />
          <EightGrid x={100} y={100} height={2} />
          <EightGrid x={200} y={200} height={2} />
          <EightGrid x={300} y={300} height={2} />
        </svg>
      ),
    },
    // ?
    {
      width: 300,
      height: 550,
      svg: () => (
        <svg>
          <EightGrid width={3} />
          <EightGrid x={100} y={200} height={2} />
          <EightGrid x={200} y={100} height={2} />
          <EightBlock x={100} y={450} />
        </svg>
      ),
    },
    // check mark
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <EightGrid x={200} height={6} />
          <EightGrid y={500} width={2} />
        </svg>
      ),
    },
    // 2
    {
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <EightBlock />
          <EightGrid x={100} height={3} />
          <EightGrid y={200} height={3} />
          <EightBlock x={100} y={400} />
        </svg>
      ),
    },
    // C / pac-man
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <EightBlock x={100} />
          <EightGrid y={100} width={3} />
          <EightBlock y={200} />
          <EightGrid y={300} width={3} />
        </svg>
      ),
    },
  ],
}

export default EIGHT
