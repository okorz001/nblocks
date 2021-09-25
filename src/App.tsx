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
          // fullscreen
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}>
          <TopBar />
          <Gallery sx={{
            // fill remaining space under topbar, but do not overflow
            flex: 'auto',
            minHeight: '0',
          }} />
        </Box>
      </DarkMode>
    </ServiceWorker>
  )
}
