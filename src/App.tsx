import { Box, CssBaseline } from '@mui/material'
import DarkMode from './DarkMode'
import Gallery from './Gallery'
import ServiceWorker from './ServiceWorker'
import TopBar from './TopBar'

export default function App() {
  return (
    <ServiceWorker script="/service-worker.js">
      <DarkMode>
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
          <TopBar />
          <Gallery />
        </Box>
      </DarkMode>
    </ServiceWorker>
  )
}
