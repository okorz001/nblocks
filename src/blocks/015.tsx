import NBlock from './NBlock'
import { FiveBlock } from './005'
import { TenBlock } from './010'

export const FOURTEEN: NBlock = {
  number: 15,
  forms: [
    // step
    {
      width: 500,
      height: 500,
      svg: () => (
        <svg>
          <FiveBlock x={400} y= {0}/>
          <FiveBlock x={400} y= {100}/>
          <FiveBlock x={400} y= {200}/>
          <FiveBlock x={400} y= {300}/>
          <FiveBlock x={400} y= {400}/>
          <TenBlock x={300} y= {100}/>
          <TenBlock x={300} y= {200}/>
          <TenBlock x={300} y= {300}/>
          <TenBlock x={300} y= {400}/>
          <TenBlock x={200} y= {200}/>
          <TenBlock x={200} y= {300}/>
          <TenBlock x={200} y= {400}/>
          <TenBlock x={100} y= {300}/>
          <TenBlock x={100} y= {400}/>
          <TenBlock x={0} y= {400}/>
        </svg>
      ),
    },
    // 3x5
    {
      width: 300,
      height: 500,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={100} y= {0} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <FiveBlock x={200} y= {0} />
          <FiveBlock x={200} y= {100} />
          <FiveBlock x={200} y= {200} />
          <FiveBlock x={200} y= {300} />
          <FiveBlock x={200} y= {400} />
        </svg>
      ),
    },
    // odd
    {
      width: 200,
      height: 800,
      svg: () => (
        <svg>
        <FiveBlock x={100} y= {0} />
          <FiveBlock x={0} y= {100} />
          <FiveBlock x={0} y= {200} />
          <FiveBlock x={100} y= {100} />
          <FiveBlock x={100} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={0} y= {700} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={100} y= {400} />
          <TenBlock x={100} y= {500} />
          <TenBlock x={100} y= {600} />
          <TenBlock x={100} y= {700} />
        </svg>
      ),
    },
    // composite
    {
      width: 200,
      height: 1000,
      svg: () => (
        <svg>
          <TenBlock x={0} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={0} y= {400} />
          <TenBlock x={0} y= {500} />
          <TenBlock x={0} y= {600} />
          <TenBlock x={0} y= {700} />
          <TenBlock x={0} y= {800} />
          <TenBlock x={0} y= {900} />
          <FiveBlock x={100} y= {500} />
          <FiveBlock x={100} y= {600} />
          <FiveBlock x={100} y= {700} />
          <FiveBlock x={100} y= {800} />
          <FiveBlock x={100} y= {900} />
        </svg>
      ),
    },
    // tree
    {
      width: 300,
      height: 900,
      svg: () => (
        <svg>
          <TenBlock x={100} y= {0} />
          <TenBlock x={0} y= {100} />
          <TenBlock x={100} y= {100} />
          <TenBlock x={200} y= {100} />
          <TenBlock x={0} y= {200} />
          <TenBlock x={100} y= {200} />
          <TenBlock x={200} y= {200} />
          <TenBlock x={0} y= {300} />
          <TenBlock x={100} y= {300} />
          <TenBlock x={200} y= {300} />
          <FiveBlock x={100} y= {400} />
          <FiveBlock x={100} y= {500} />
          <FiveBlock x={100} y= {600} />
          <FiveBlock x={100} y= {700} />
          <FiveBlock x={100} y= {800} />
        </svg>
      ),
    },
  ],
}

export default FOURTEEN
