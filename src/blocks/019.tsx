import { NBlock } from './common'

import { NineLightBlock, NineLightGrid, NineMediumBlock, NineMediumGrid, NineDarkBlock, NineDarkGrid } from './009'
import { TenBlock, TenGrid } from './010'

export const NINETEEN: NBlock = {
  number: 19,
  forms: [
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TenGrid height={10} />
          <NineDarkGrid x={100} y={100} height={3} />
          <NineMediumGrid x={100} y={400} height={3} />
          <NineLightGrid x={100} y={700} height={3} />
        </svg>
      ),
    },
    // odd
    {
      tags: ['odd'],
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <NineDarkBlock x={100} />
          <NineDarkGrid y={100} width={2} />
          <NineMediumGrid y={200} width={2} />
          <NineLightBlock y={300} />
          <NineMediumBlock x={100} y={300} />
          <NineLightGrid y={400} width={2} />
          <TenGrid y={500} width={2} height={5} />
        </svg>
      ),
    },
    // 3x6 + 1
    {
      width: 300,
      height: 700,
      svg: () => (
        <svg>
          <NineDarkGrid height={3} />
          <NineMediumGrid x={100} y={100} height={3} />
          <NineLightGrid x={200} y={100} height={3} />
          <TenBlock y={300} />
          <TenGrid y={400} width={3} height={3} />
        </svg>
      ),
    },
    // 4x5 - 1
    {
      width: 400,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid width={2} height={5} />
          <NineDarkBlock x={200} />
          <NineDarkGrid x={200} y={100} width={2} />
          <NineMediumGrid x={200} y={200} width={2} />
          <NineLightBlock x={200} y={300} />
          <NineMediumBlock x={300} y={300} />
          <NineLightGrid x={200} y={400} width={2} />
        </svg>
      ),
    },
    // diagonal
    {
      width: 700,
      height: 700,
      svg: () => (
        <svg>
          <NineDarkGrid x={500} width={2} height={2} />
          <NineMediumGrid x={400} y={100} width={2} height={2} />
          <NineLightGrid x={300} y={200} width={2} height={2} />
          <TenGrid x={200} y={300} width={2} height={2} />
          <TenGrid x={100} y={400} width={2} height={2} />
          <TenGrid y={500} width={2} height={2} />
        </svg>
      ),
    },
    // 5x4 - 1
    {
      width: 500,
      height: 400,
      svg: () => (
        <svg>
          <NineMediumGrid width={3} />
          <NineDarkBlock x={300} />
          <NineLightGrid y={100} width={3} />
          <NineDarkGrid x={300} y={100} width={2} />
          <TenGrid y={200} width={5} height={2} />
        </svg>
      ),
    },
    // 6x3 + 1
    {
      width: 600,
      height: 400,
      svg: () => (
        <svg>
          <NineDarkBlock />
          <NineDarkGrid y={100} width={2} />
          <NineMediumGrid x={200} y={100} width={3} />
          <NineLightBlock x={500} y={100} />
          <TenGrid y={200} width={4} />
          <NineLightGrid x={400} y={200} width={2} />
          <TenGrid y={300} width={6} />
        </svg>
      ),
    },
    // teapot
    {
      width: 700,
      height: 400,
      svg: () => (
        <svg>
          <TenGrid x={100} width={2} />
          <NineDarkGrid x={500} width={2} />
          <TenGrid y={100} width={4} height={3} />
          <NineDarkBlock x={500} y={100} />
          <NineLightGrid x={200} y={200} width={2} height={2} />
          <NineMediumGrid x={300} y={200} width={3} />
        </svg>
      ),
    },
    // elephant
    {
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <NineLightGrid x={200} width={2} height={2} />
          <NineMediumBlock x={400} />
          <TenGrid x={100} y={100} width={2} height={2} />
          <NineMediumGrid x={400} y={100} width={2} />
          <TenGrid y={200} height={3} />
          <TenGrid x={300} y={200} height={3} />
          <NineDarkGrid x={500} y={200} height={2} />
          <NineDarkBlock x={600} y={300} />
        </svg>
      ),
    },
    // diamond
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <NineMediumGrid x={100} width={3} />
          <NineLightGrid y={100} width={2} />
          <NineDarkGrid y={100} x={300} width={2} />
          <NineLightBlock y={200} />
          <NineDarkBlock x={400} y={200} />
          <TenGrid y={300} height={2} />
          <TenGrid x={400} y={300} height={2} />
          <TenGrid x={100} y={400} height={2} />
          <TenGrid x={300} y={400} height={2} />
          <TenGrid x={200} y={500} height={2} />
        </svg>
      ),
    },
    // hair
    {
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <NineLightBlock />
          <NineDarkBlock x={600} />
          <NineLightGrid y={100} width={2} />
          <NineMediumGrid x={200} y={100} width={3} />
          <NineDarkGrid x={500} y={100} width={2} />
          <TenGrid x={100} y={200} width={5} />
          <TenGrid x={200} y={300} width={3} />
          <TenBlock x={200} y={400} />
          <TenBlock x={400} y={400} />
        </svg>
      ),
    },
    // cactus
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <NineLightGrid height={2} />
          <NineLightBlock x={100} y={100} />
          <NineMediumGrid x={200} height={3} />
          <NineDarkBlock x={300} y={100} />
          <NineDarkGrid x={400} height={2} />
          <TenGrid y={300} height={2} />
          <TenBlock x={100} y={400} />
          <TenGrid x={200} y={300} height={4} />
          <TenBlock x={300} y={400} />
          <TenGrid x={400} y={300} height={2} />
        </svg>
      ),
    },
    // T (umbrella)
    {
      width: 900,
      height: 800,
      svg: () => (
        <svg>
          <NineLightGrid width={3} />
          <NineMediumGrid x={300} width={3} />
          <NineDarkGrid x={600} width={3} />
          <TenGrid x={400} y={100} height={7} />
          <TenBlock x={500} y={700} />
          <TenGrid x={600} y={600} height={2} />
        </svg>
      ),
    },
    // giraffe
    {
      width: 700,
      height: 1100,
      svg: () => (
        <svg>
          <NineDarkGrid x={500} width={2} />
          <NineDarkBlock x={500} y={100} />
          <NineMediumGrid x={500} y={200} height={3} />
          <NineLightGrid x={500} y={500} height={3} />
          <TenGrid y={800} width={6} />
          <TenGrid y={900} height={2} />
          <TenGrid x={500} y={900} height={2} />
        </svg>
      ),
    },
    // crane
    {
      width: 900,
      height: 900,
      svg: () => (
        <svg>
          <NineLightGrid width={3} />
          <NineMediumGrid x={300} width={3} />
          <NineDarkGrid x={600} width={3} />
          <TenGrid x={200} y={100} height={7} />
          <TenGrid x={100} y={800} width={3} />
        </svg>
      ),
    },
    // curly hair
    {
      width: 400,
      height: 900,
      svg: () => (
        <svg>
          <NineLightGrid width={2} />
          <NineLightBlock y={100} />
          <NineMediumBlock y={200} />
          <NineDarkBlock x={300} y={200} />
          <NineMediumGrid y={300} width={2} />
          <NineDarkGrid x={200} y={300} width={2} />
          <TenGrid y={400} width={2} height={5} />
        </svg>
      ),
    },
    // O
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <NineLightGrid height={3} />
          <NineMediumGrid x={100} width={3} />
          <NineDarkGrid x={400} height={3} />
          <TenGrid y={300} height={3} />
          <TenGrid x={400} y={300} height={3} />
          <TenGrid x={100} y={500} width={3} />
          <TenBlock x={200} y={600} />
        </svg>
      ),
    },
    // fork hair
    {
      width: 500,
      height: 800,
      svg: () => (
        <svg>
          <NineLightGrid y={200} height={2} />
          <NineLightBlock x={100} y={200} />
          <NineMediumGrid x={200} height={3} />
          <NineDarkGrid x={300} y={200} width={2} />
          <NineDarkBlock x={400} y={100} />
          <TenGrid x={200} y={300} width={2} height={5} />
        </svg>
      ),
    },
    // castle
    {
      width: 600,
      height: 500,
      svg: () => (
        <svg>
          <NineLightGrid height={2} />
          <NineLightBlock x={100} y={100} />
          <NineMediumBlock x={200} y={100} />
          <NineMediumGrid x={300} height={2} />
          <NineDarkBlock x={400} y={100} />
          <NineDarkGrid x={500} height={2} />
          <TenGrid y={200} height={3} />
          <TenGrid x={500} y={200} height={3} />
          <TenGrid x={100} y={400} width={4} />
        </svg>
      ),
    },
    // man
    {
      width: 500,
      height: 800,
      svg: () => (
        <svg>
          <TenGrid x={200} height={4} />
          <TenGrid y={200} height={2} />
          <TenBlock x={100} y={200} />
          <TenBlock x={300} y={200} />
          <TenGrid x={400} y={200} height={2} />
          <NineMediumGrid x={200} y={400} height={3} />
          <NineLightGrid y={600} height={2} />
          <NineLightBlock x={100} y={600} />
          <NineDarkBlock x={300} y={600} />
          <NineDarkGrid x={400} y={600} height={2} />
        </svg>
      ),
    },
    // spiral
    {
      width: 600,
      height: 500,
      svg: () => (
        <svg>
          <NineLightGrid height={3} />
          <NineMediumGrid x={100} width={3} />
          <NineDarkGrid x={300} y={100} height={2}/>
          <NineDarkBlock x={200} y={200} />
          <TenGrid x={500} y={100} height={3} />
          <TenBlock y={300} />
          <TenGrid y={400} width={6} />
        </svg>
      ),
    },
    // S
    {
      width: 600,
      height: 1000,
      svg: () => (
        <svg>
          <NineDarkBlock x={400} />
          <NineDarkGrid x={300} y={100} width={2} />
          <NineMediumGrid x={200} y={200} width={2} />
          <NineLightBlock x={100} y={300} />
          <NineMediumBlock x={200} y={300} />
          <NineLightGrid y={400} width={2} />
          <TenGrid x={100} y={500} width={2} />
          <TenGrid x={200} y={600} width={2} />
          <TenGrid x={300} y={700} width={2} />
          <TenGrid x={200} y={800} width={2} />
          <TenGrid x={100} y={900} width={2} />
        </svg>
      ),
    },
    // key/saw
    {
      width: 200,
      height: 1100,
      svg: () => (
        <svg>
          <NineDarkGrid height={2} />
          <NineDarkBlock x={100} />
          <NineMediumGrid y={200} height={2} />
          <NineMediumBlock x={100} y={200} />
          <NineLightGrid y={400} height={2} />
          <NineLightBlock x={100} y={400} />
          <TenGrid y={600} width={2} height={5} />
        </svg>
      ),
    },
    // horse thing ???
    {
      width: 800,
      height: 600,
      svg: () => (
        <svg>
          <TenGrid y={400} height={2} />
          <TenGrid x={100} y={400} width={2} />
          <TenGrid x={300} height={6} />
          <NineMediumGrid x={400} y={100} height={3} />
          <NineDarkGrid x={500} y={100} width={3} />
          <NineLightGrid x={500} y={300} width={3} />
        </svg>
      ),
    },
    // table
    {
      width: 900,
      height: 300,
      svg: () => (
        <svg>
          <NineLightGrid width={3} />
          <NineMediumGrid x={300} width={3} />
          <NineDarkGrid x={600} width={3} />
          <TenGrid y={100} width={8} />
          <TenBlock y={200} />
          <TenBlock x={700} y={200} />
        </svg>
      ),
    },
    // shovel
    {
      width: 300,
      height: 1100,
      svg: () => (
        <svg>
          <TenGrid width={3} />
          <TenGrid x={100} y={100} height={7} />
          <NineLightGrid y={800} width={3} />
          <NineMediumGrid y={900} width={3} />
          <NineDarkGrid y={1000} width={3} />
        </svg>
      ),
    },
    // hershey kiss
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={200} />
          <TenGrid x={100} y={100} width={3} />
          <TenGrid y={200} width={5} />
          <NineLightGrid y={300} width={2} height={2} />
          <NineMediumGrid x={200} y={200} height={3} />
          <NineDarkGrid x={300} y={300} width={2} height={2} />
          <TenBlock y={300} />
          <TenBlock x={400} y={300} />
        </svg>
      ),
    },
    // spiral fish thing ???
    {
      width: 800,
      height: 800,
      svg: () => (
        <svg>
          <TenGrid x={200} height={4} />
          <TenGrid y={200} width={4} />
          <TenGrid x={300} y={300} width={2} />
          <TenBlock x={300} y={400} />
          <NineMediumGrid x={400} y={400} height={2} />
          <NineMediumBlock x={500} y={400} />
          <NineDarkBlock x={600} y={400} />
          <NineDarkGrid x={700} y={400} height={2} />
          <NineLightBlock x={400} y={600} />
          <NineLightGrid x={400} y={700} width={2} />
        </svg>
      ),
    },
    // mountain
    {
      width: 800,
      height: 500,
      svg: () => (
        <svg>
          <NineDarkBlock x={400} />
          <NineDarkGrid x={300} y={100} width={2} />
          <NineLightGrid x={100} y={200} width={3} />
          <NineMediumGrid x={400} y={200} width={3} />
          <TenGrid x={100} y={300} width={6} />
          <TenGrid y={400} width={2} />
          <TenGrid x={600} y={400} width={2} />
        </svg>
      ),
    },
    // tree
    {
      width: 500,
      height: 600,
      svg: () => (
        <svg>
          <NineMediumGrid x={100} width={3} />
          <NineLightBlock y={100} />
          <NineLightGrid x={100} y={100} height={2} />
          <TenGrid x={200} y={100} height={3} />
          <NineDarkGrid x={300} y={100} height={2} />
          <NineDarkBlock x={400} y={100} />
          <TenGrid x={100} y={400} width={3} />
          <TenGrid y={500} width={2} />
          <TenGrid x={300} y={500} width={2} />
        </svg>
      ),
    },
    // fatman
    {
      width: 500,
      height: 600,
      svg: () => (
        <svg>
          <NineDarkGrid x={100} width={3} />
          <NineMediumGrid x={100} y={100} width={3} />
          <NineLightGrid x={100} y={200} width={3} />
          <TenGrid y={300} width={5} />
          <TenGrid x={100} y={400} width={3} />
          <TenBlock x={100} y={500} />
          <TenBlock x={300} y={500} />
        </svg>
      ),
    },
    // acorn
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <NineLightBlock y={200} />
          <NineLightGrid x={100} y={100} height={2} />
          <NineMediumGrid x={200} height={3} />
          <NineDarkGrid x={300} y={100} height={2} />
          <NineDarkBlock x={400} y={200} />
          <TenGrid x={100} y={300} width={3} height={3} />
          <TenBlock x={200} y={600} />
        </svg>
      ),
    },
    // two-horn
    {
      width: 500,
      height: 1000,
      svg: () => (
        <svg>
          <TenBlock x={100} />
          <TenBlock x={300} />
          <TenGrid x={100} y={100} width={3} />
          <TenGrid y={200} width={5} />
          <NineLightGrid x={100} y={300} width={3} />
          <NineMediumGrid x={200} y={400} height={3} />
          <NineDarkGrid x={200} y={700} height={3} />
        </svg>
      ),
    },
    // ninja
    {
      width: 500,
      height: 900,
      svg: () => (
        <svg>
          <NineDarkBlock x={300} />
          <NineMediumGrid x={100} y={100} width={2} height={2} />
          <NineDarkGrid x={300} y={100} width={2} />
          <NineLightGrid x={200} y={200} width={2} />
          <NineLightBlock x={200} y={300} />
          <TenGrid y={400} width={4} />
          <TenGrid x={200} y={500} height={3} />
          <TenGrid x={100} y={800} width={3} />
        </svg>
      ),
    },
    // hydrant
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <NineDarkBlock x={200} />
          <NineDarkGrid x={100} y={100} width={2} />
          <NineMediumBlock x={300} y={100} />
          <NineLightGrid y={200} width={3} />
          <NineMediumGrid x={300} y={200} width={2} />
          <TenGrid x={100} y={300} width={3} />
          <TenGrid y={400} width={5} />
          <TenGrid x={200} y={500} height={2} />
        </svg>
      ),
    },
    // flower pot / cowboy
    {
      width: 500,
      height: 700,
      svg: () => (
        <svg>
          <NineLightGrid y={100} height={2} />
          <NineLightBlock x={100} y={200} />
          <NineMediumGrid x={200} height={3} />
          <NineDarkBlock x={300} y={200} />
          <NineDarkGrid x={400} y={100} height={2} />
          <TenBlock x={200} y={300} />
          <TenGrid x={100} y={400} width={3} height={3} />
        </svg>
      ),
    },
    // helicopter
    {
      width: 700,
      height: 500,
      svg: () => (
        <svg>
          <TenGrid y={400} width={5} />
          <TenGrid x={200} y={200} width={3} height={2} />
          <NineLightGrid width={3} />
          <NineMediumGrid x={300} height={3} />
          <NineDarkGrid x={400} width={3} />
        </svg>
      ),
    },
    // horse
    {
      width: 700,
      height: 700,
      svg: () => (
        <svg>
          <TenGrid x={500} height={3} />
          <TenBlock x={600} y={100} />
          <TenGrid y={300} width={6} />
          <NineLightGrid x={100} y={400} height={3} />
          <NineMediumGrid x={200} y={400} width={3} />
          <NineDarkGrid x={500} y={400} height={3} />
        </svg>
      ),
    },
    // flag
    {
      width: 400,
      height: 1000,
      svg: () => (
        <svg>
          <TenGrid height={10} />
          <NineLightGrid x={100} height={3} />
          <NineMediumGrid x={200} height={3} />
          <NineDarkGrid x={300} height={3} />
        </svg>
      ),
    },
  ],
}

export default NINETEEN
