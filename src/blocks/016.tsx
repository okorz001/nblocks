import { NBlock } from './common'
import { SixBlock, SixGrid } from './006'
import { TenBlock, TenGrid } from './010'

export const SIXTEEN: NBlock = {
  number: 16,
  forms: [
    // square
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid width={4} height={3} />
          <SixGrid x={100} y={200} width={2} />
          <SixGrid y={300} width={4} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 800,
      svg: () => (
        <svg>
          <SixGrid width={2} height={3} />
          <TenGrid y={300} width={2} height={5} />
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
          <SixGrid x={100} y={400} height={6} />
        </svg>
      ),
    },
    // bowl cut
    {
      width: 400,
      height: 600,
      svg: () => (
        <svg>
          <SixGrid width={4} height={2} />
          <TenGrid x={100} y={100} width={2} height={5} />
        </svg>
      ),
    },
    // fork
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid y={100} width={2} height={3} />
          <TenGrid x={100} y={200} width={2} height={3} />
          <SixGrid x={300} width={2} height={3} />
        </svg>
      ),
    },
    // crazy hair
    {
      width: 800,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid width={3} />
          <SixGrid x={500} width={3} />
          <TenGrid x={100} y={100} width={3} />
          <SixGrid x={400} y={100} width={3} />
          <TenGrid x={300} y={200} width={2} height={2} />
        </svg>
      ),
    },
    // mushroom
    {
      width: 600,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid x={100} width={4} />
          <TenGrid y={100} width={6} />
          <SixGrid x={200} y={200} width={2} height={3} />
        </svg>
      ),
    },
    // pac-man ghost
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid x={100} width={2} />
          <TenGrid y={100} width={4} height={2} />
          <SixGrid y={300} width={4} />
          <SixBlock y={400} />
          <SixBlock x={200} y={400} />
        </svg>
      ),
    },
    // O
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <SixGrid width={5} />
          <SixBlock y={100} />
          <TenGrid x={400} y={100} height={3} />
          <TenGrid y={200} height={2} />
          <TenGrid y={400} width={5} />
        </svg>
      ),
    },
    // triangle
    {
      width: 700,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock y={300} />
          <TenGrid x={100} y={200} height={2} />
          <TenGrid x={200} y={100} height={3} />
          <TenGrid x={300} height={4} />
          <SixGrid x={400} y={100} height={3} />
          <SixGrid x={500} y={200} height={2} />
          <SixBlock x={600} y={300} />
        </svg>
      ),
    },
  ],
}

export default SIXTEEN
