import { NBlock } from './common'
import { NineDarkGrid, NineMediumGrid, NineLightGrid } from './009'
import { FortyGrid } from './040'

export const FORTY_NINE: NBlock = {
  number: 49,
  forms: [
    // square
    {
      width: 700,
      height: 700,
      svg: () => (
        <svg>
          <FortyGrid width={7} height={7} />
          <NineDarkGrid x={200} y={200} width={3} />
          <NineMediumGrid x={200} y={300} width={3} />
          <NineLightGrid x={200} y={400} width={3} />
        </svg>
      ),
    },
    // composite
    {
      width: 500,
      height: 1000,
      svg: () => (
        <svg>
          <FortyGrid width={4} height={10} />
          <NineDarkGrid x={400} y={100} height={3} />
          <NineMediumGrid x={400} y={400} height={3} />
          <NineLightGrid x={400} y={700} height={3} />
        </svg>
      ),
    },
  ],
}

export default FORTY_NINE
