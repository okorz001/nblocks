import { NBlock } from './common'
import { NineDarkBlock, NineDarkGrid, NineMediumBlock, NineMediumGrid, NineLightBlock, NineLightGrid } from './009'
import { TwentyGrid } from './020'

export const TWENTY_NINE: NBlock = {
  number: 29,
  forms: [
    // composite
    {
      width: 300,
      height: 1000,
      svg: () => (
        <svg>
          <TwentyGrid width={2} height={10} />
          <NineDarkGrid x={200} y={100} height={3} />
          <NineMediumGrid x={200} y={400} height={3} />
          <NineLightGrid x={200} y={700} height={3} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 1500,
      svg: () => (
        <svg>
          <NineDarkBlock x={100} />
          <NineDarkGrid y={100} width={2} />
          <NineMediumGrid y={200} width={2} />
          <NineLightBlock y={300} />
          <NineMediumBlock x={100} y={300} />
          <NineLightGrid y={400} width={2} />
          <TwentyGrid y={500} width={2} height={10} />
        </svg>
      ),
    },
    // calendar
    {
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <TwentyGrid width={7} height={3} />
          <NineDarkBlock x={600} y={200} />
          <NineLightGrid y={300} width={2} />
          <NineMediumGrid x={200} y={300} width={3} />
          <NineDarkGrid x={500} y={300} width={2} />
          <NineLightBlock y={400} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_NINE
