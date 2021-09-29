import { NBlock } from './common'
import { OneBlock } from './001'
import { TwoBlock } from './002'
import { ThreeBlock } from './003'
import { FourBlock } from './004'
import { FiveBlock } from './005'
import { SixBlock } from './006'
import { SevenBlock } from './007'
import { TwentyGrid } from './020'

export const TWENTY_SEVEN: NBlock = {
  number: 27,
  forms: [
    // 3x9
    {
      tags: ['3x'],
      width: 300,
      height: 900,
      svg: () => (
        <svg>
          <TwentyGrid width={3} height={9} />
          <SevenBlock x={100} y={100} />
          <SixBlock x={100} y={200} />
          <FiveBlock x={100} y={300} />
          <FourBlock x={100} y={400} />
          <ThreeBlock x={100} y={500} />
          <TwoBlock x={100} y={600} />
          <OneBlock x={100} y={700} />
        </svg>
      ),
    },
    // 3x9
    {
      tags: ['x3'],
      width: 900,
      height: 300,
      svg: () => (
        <svg>
          <TwentyGrid width={9} height={3} />
          <OneBlock x={100} y={100} />
          <TwoBlock x={200} y={100} />
          <ThreeBlock x={300} y={100} />
          <FourBlock x={400} y={100} />
          <FiveBlock x={500} y={100} />
          <SixBlock x={600} y={100} />
          <SevenBlock x={700} y={100} />
        </svg>
      ),
    },
    // composite
    {
      width: 300,
      height: 1000,
      svg: () => (
        <svg>
          <TwentyGrid width={2} height={10} />
          <SevenBlock x={200} y={300} />
          <SixBlock x={200} y={400} />
          <FiveBlock x={200} y={500} />
          <FourBlock x={200} y={600} />
          <ThreeBlock x={200} y={700} />
          <TwoBlock x={200} y={800} />
          <OneBlock x={200} y={900} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 1400,
      svg: () => (
        <svg>
          <FiveBlock y={100} />
          <ThreeBlock y={200} />
          <OneBlock y={300} />
          <SevenBlock x={100} />
          <SixBlock x={100} y={100} />
          <FourBlock x={100} y={200} />
          <TwoBlock x={100} y={300} />
          <TwentyGrid y={400} width={2} height={10} />
        </svg>
      ),
    },
  ],
}

export default TWENTY_SEVEN
