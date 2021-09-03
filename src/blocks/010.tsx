import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const TEN_COLORS = {
  primary: new Color('#F0F0F0'),
}

export const TenBlock = createBlock('Ten', TEN_COLORS.primary)
export const TenGrid = createGrid('Ten', TenBlock)

export const TEN: NBlock = {
  number: 10,
  forms: [
    // tall
    {
      width: 100,
      height: 1000,
      svg: () => (
        <svg>
          <TenGrid height={10} />
        </svg>
      ),
    },
    // even
    {
      width: 200,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid width={2} height={5} />
        </svg>
      ),
    },
    // step
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock y={300} />
          <TenGrid x={100} y={200} height={2} />
          <TenGrid x={200} y={100} height={3} />
          <TenGrid x={300} height={4} />
        </svg>
      ),
    },
    // tap
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenGrid width={4} height={2} />
          <TenGrid x={200} y={200} width={2} />
        </svg>
      ),
    },
    // upside down T
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenGrid x={100} width={2} />
          <TenGrid y={100} width={4} height={2} />
        </svg>
      ),
    },
    // 0
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid height={4} />
          <TenBlock x={100} />
          <TenBlock x={100} y={300} />
          <TenGrid x={200} height={4} />
        </svg>
      ),
    },
    // lower left nub
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenBlock x={0} y={200} />
          <TenGrid x={100} width={3} height={3} />
        </svg>
      ),
    },
    // d
    {
      width: 300,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid y={200} height={2} />
          <TenGrid x={100} width={2} height={4} />
        </svg>
      ),
    },
    // fifteen's minute of fame
    {
      width: 400,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid width={2} />
          <TenGrid x={100} y={100} width={2} />
          <TenGrid x={100} y={200} width={3} height={2} />
        </svg>
      ),
    },
    // cursive v
    {
      width: 500,
      height: 400,
      svg: () => (
        <svg>
          <TenBlock y={100} />
          <TenGrid x={100} y={100} height={3} />
          <TenBlock x={200} y={300} />
          <TenGrid x={300} height={4} />
          <TenBlock x={400} />
        </svg>
      ),
    },
    // TODO: very similar to 16, there's also a C version
    // n
    {
      width: 400,
      height: 300,
      svg: () => (
        <svg>
          <TenGrid width={4} height={2} />
          <TenBlock x={0} y={200} />
          <TenBlock x={300} y={200} />
        </svg>
      ),
    },
    // seahorse
    {
      width: 300,
      height: 600,
      svg: () => (
        <svg>
          <TenGrid height={4} />
          <TenGrid x={100} y={100} height={5} />
          <TenBlock x={200} y={100} />
        </svg>
      ),
    },
  ],
}

export default TEN
