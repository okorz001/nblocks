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
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}>
          <TopBar />
          <Gallery />
        </Box>
      </DarkMode>
    </ServiceWorker>
  )
}
