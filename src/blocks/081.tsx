import { NBlock } from './common'
import { OneBlock } from './001'
import { EightyGrid } from './080'

export const EIGHTY_ONE: NBlock = {
  number: 81,
  forms: [
    // square
    {
      width: 900,
      height: 900,
      svg: () => (
        <svg>
          <EightyGrid width={9} height={9} />
          <OneBlock x={400} y={400} />
        </svg>
      ),
    },
    // composite
    {
      width: 900,
      height: 1000,
      svg: () => (
        <svg>
          <EightyGrid width={8} height={10} />
          <OneBlock x={800} y={900} />
        </svg>
      ),
    },
  ],
}

export default EIGHTY_ONE
