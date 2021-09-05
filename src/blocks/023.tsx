import { NBlock } from './common'
import { ThreeGrid } from './003'
import { TwentyGrid } from './020'

export const TWENTY_THREE: NBlock = {
  number: 23,
  forms: [
    // composite
    {
      width: 300,
      height: 1000,
      svg: () => (
        <svg>
          <TwentyGrid width={2} height={10} />
          <ThreeGrid x={200} y={700} height={3} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_THREE
