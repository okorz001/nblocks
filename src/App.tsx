import { Box, CssBaseline } from '@mui/material'
import { useReducer } from 'react'
import { getNBlocks, NBlock } from './blocks'
import { DarkModeProvider } from './DarkMode'
import Gallery from './Gallery'
import { ServiceWorkerProvider } from './ServiceWorker'
import TopBar from './TopBar'

export interface NBlocksState {
  blocks: NBlock[],
  group: string,
  block: number,
  form: number,
}

export type NBlocksAction = {
  type: 'setGroup',
  value: string,
} | {
  type: 'setBlock' | 'setForm',
  value: number,
}

function initState(group: string) {
  return {
    blocks: getNBlocks(group),
    group,
    block: 0,
    form: 0,
  }
}

function reducer(state: NBlocksState, action: NBlocksAction): NBlocksState {
  switch (action.type) {
    case 'setGroup':
      return initState(action.value)
    case 'setBlock':
      return {
        ...state,
        block: action.value,
        form: 0,
      }
    case 'setForm':
      return {
        ...state,
        form: action.value,
      }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 'all', initState)
  const setGroup = (value: string) => dispatch({ type: 'setGroup', value })
  const setBlock = (value: number) => dispatch({ type: 'setBlock', value })
  const setForm = (value: number) => dispatch({ type: 'setForm', value })

  return (
    <ServiceWorkerProvider script="/service-worker.js">
      <DarkModeProvider>
        <CssBaseline />
        <Box sx={{
          width: '100%',
          height: 'calc(100% + env(safe-area-inset-top))',
          // 280px is Galaxy Fold width
          // 320px is iPhone 5 width
          minWidth: '280px',
          minHeight: '280px',

          backgroundImage: 'url(/assets/background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',

          display: 'flex',
          flexFlow: 'column nowrap',

          // disable text selection
          userSelect: 'none',
        }}>
          <TopBar group={state.group} setGroup={setGroup} />
          <Gallery
            blocks={state.blocks}
            block={state.block}
            setBlock={setBlock}
            form={state.form}
            setForm={setForm}
          />
        </Box>
      </DarkModeProvider>
    </ServiceWorkerProvider>
  )
}
