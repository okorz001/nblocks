import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const SIX_COLORS = {
  primary: new Color('#5829BD'),
}

export const SixBlock = createBlock('Six', SIX_COLORS.primary)
export const SixGrid = createGrid('Six', SixBlock)

export const SIX: NBlock = {
  number: 6,
  forms: [
    // even
    {
      tags: ['even', '2x', 'x3'],
      width: 200,
      height: 300,
      svg: () => (
        <svg>
          <SixGrid width={2} height={3} />
        </svg>
      ),
    },
    // tall
    {
      tags: ['1x', 'x6'],
      width: 100,
      height: 600,
      svg: () => (
        <svg>
          <SixGrid height={6} />
        </svg>
      ),
    },
    // step
    {
      tags: ['step'],
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <SixBlock y={200} />
          <SixGrid x={100} y={100} height={2} />
          <SixGrid x={200} height={3} />
        </svg>
      ),
    },
    // 3x2
    {
      tags: ['3x', 'x2'],
      width: 300,
      height: 200,
      svg: () => (
        <svg>
          <SixGrid width={3} height={2} />
        </svg>
      ),
    },
    // wide
    {
      tags: ['6x', 'x1'],
      width: 600,
      height: 100,
      svg: () => (
        <svg>
          <SixGrid width={6} />
        </svg>
      ),
    },
    // pipe
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <SixGrid width={2} />
          <SixGrid y={100} width={4} />
        </svg>
      ),
    },
    // bolt
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <SixGrid y={100} height={3} />
          <SixGrid x={100} height={3} />
        </svg>
      ),
    },
    // backwards 4
    {
      width: 300,
      height: 300,
      svg: () => (
        <svg>
          <SixGrid height={3} />
          <SixBlock x={100} y={100} />
          <SixGrid x={200} height={2} />
        </svg>
      ),
    },
    // zig-zag
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <SixGrid width={2} />
          <SixGrid x={100} y={100} width={2} />
          <SixGrid x={200} y={200} width={2} />
        </svg>
      ),
    },
    // upside down T
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <SixGrid x={100} width={2} />
          <SixGrid y={100} width={4} />
        </svg>
      ),
    },
    // ??? scoop?
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <SixGrid y={200} height={2} />
          <SixBlock x={100} y={200} />
          <SixGrid x={200} height={3} />
        </svg>
      ),
    },
    // U
    {
      width: 400,
      height: 200,
      svg: () => (
        <svg>
          <SixBlock />
          <SixBlock x={300} />
          <SixGrid y={100} width={4} />
        </svg>
      ),
    },
    // 7
    {
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <SixBlock />
          <SixGrid x={100} height={5} />
        </svg>
      ),
    },
    // split plus
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <SixBlock y={100} />
          <SixGrid x={100} height={4} />
          <SixBlock x={200} y={200} />
        </svg>
      ),
    },
    // upside down F
    {
      width: 200,
      height: 400,
      svg: () => (
        <svg>
          <SixGrid height={4} />
          <SixBlock x={100} y={100} />
          <SixBlock x={100} y={300} />
        </svg>
      ),
    },
  ],
}

export default SIX
