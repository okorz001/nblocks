import * as Color from 'color'
import { createBlock, createGrid, NBlock } from './common'

export const EIGHTY_COLORS = {
  primary: new Color('#F9A2D9'),
}

export const EightyBlock = createBlock('Eighty', EIGHTY_COLORS.primary)
export const EightyGrid = createGrid('Eighty', EightyBlock)

export const EIGHTY: NBlock = {
  number: 80,
  forms: [
    // 8x10
    {
      width: 800,
      height: 1000,
      svg: () => (
        <svg>
          <EightyGrid width={8} height={10} />
        </svg>
      ),
    },
    // man
    {
      width: 1000,
      height: 1600,
      svg: () => (
        <svg>
          <EightyGrid x={400} width={2} height={12} />
          <EightyGrid x={300} y={100} width={4} />
          <EightyGrid y={300} width={10} />
          <EightyGrid y={400} height={7} />
          <EightyGrid x={200} y={400} width={6} height={4} />
          <EightyGrid x={900} y={400} height={7} />
          <EightyGrid x={300} y={1000} height={6} />
          <EightyGrid x={600} y={1000} height={6} />
          <EightyGrid x={200} y={1400} height={2} />
          <EightyGrid x={700} y={1400} height={2} />
        </svg>
      ),
    },
    // dino
    {
      width: 1600,
      height: 1500,
      svg: () => (
        <svg>
          <EightyGrid x={1100} width={5} />
          <EightyGrid x={1100} y={100} width={2} />
          <EightyGrid x={1100} y={200} width={5} />
          <EightyGrid x={1100} y={300} width={3} height={2} />
          <EightyGrid x={1000} y={500} width={4} height={2} />
          <EightyGrid x={900} y={700} width={7} />
          <EightyGrid x={800} y={800} width={6} />
          <EightyGrid x={600} y={900} width={10} />
          <EightyGrid y={1000} width={14} />
          <EightyGrid x={700} y={1100} width={7} />
          <EightyGrid x={800} y={1200} width={6} />
          <EightyGrid x={900} y={1300} height={2} />
          <EightyGrid x={1300} y={1300} height={2} />
        </svg>
      ),
    },
    // spider
    {
      width: 1200,
      height: 1700,
      svg: () => (
        <svg>
          <EightyGrid x={200} width={2} />
          <EightyGrid x={800} width={2} />
          <EightyGrid x={200} y={100} height={3} />
          <EightyGrid x={900} y={100} height={3} />
          <EightyGrid y={300} height={3} />
          <EightyGrid x={500} y={300} width={2} height={8} />
          <EightyGrid x={1100} y={300} height={3} />
          <EightyGrid x={200} y={400} width={8} />
          <EightyGrid y={600} width={12} />
          <EightyGrid x={100} y={800} width={10} />
          <EightyGrid x={100} y={900} height={4} />
          <EightyGrid x={1000} y={900} height={4} />
          <EightyGrid x={300} y={1000} width={6} />
          <EightyGrid x={300} y={1100} height={7} />
          <EightyGrid x={800} y={1100} height={7} />
        </svg>
      ),
    },
    // O
    {
      width: 900,
      height: 900,
      svg: () => (
        <svg>
          <EightyGrid width={9} height={4} />
          <EightyGrid y={400} width={4} />
          <EightyGrid x={500} y={400} width={4} />
          <EightyGrid y={500} width={9} height={4} />
        </svg>
      ),
    },
  ],
}

export default EIGHTY
