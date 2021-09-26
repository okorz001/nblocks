import { ArrowBack, ArrowForward, Transform as TransformIcon } from '@mui/icons-material'
import { Box, Divider, IconButton, Stack, Tooltip, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import NBLOCKS from './blocks'
import { ifDarkMode } from './DarkMode'
import SvgCanvas from './SvgCanvas'

const PADDING = 20

export default function Gallery() {
  const [blockNumber, setBlockNumber] = useState(0)
  const [formNumber, setFormNumber] = useState(0)
  const nblock = NBLOCKS[blockNumber]
  const forms = nblock.forms
  const form = forms[formNumber]

  // reset form when changing blocks
  const previousBlock = () => {
    setBlockNumber(blockNumber - 1)
    setFormNumber(0)
  }
  const nextBlock = () => {
    setBlockNumber(blockNumber + 1)
    setFormNumber(0)
  }
  // wrap around after reaching end of list
  const nextForm = () => setFormNumber((formNumber + 1) % forms.length)

  // we only want to use landscape layout if the height is too small for regular layout
  // (orientation: landscape) can be true with huge viewports which is not desirable
  // this is a heuristic for a rotated phone -- 480px is a rough upper bound for mobile phone width
  const isLandscape = useMediaQuery('(max-height: 480px) and (min-width: 480px)')

  return (
    <Box
      sx={{
        // fill remaining space under topbar, but do not overflow
        flex: 'auto',
        minHeight: '0',

        // flex
        display: 'flex',
        flexFlow: `${isLandscape ? 'row' : 'column'} nowrap`,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Box
        sx={{
          flex: 'auto',
          maxWidth: '500px',
          height: `calc(100% - ${2 * PADDING}px)`,
          padding: `${PADDING}px`,

          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          ...(isLandscape ? {
            // keep content centered despite controls on the right side
            ml: 8,
          } : {})
        }}
      >
        <SvgCanvas scale={0.5} width={form.width} height={form.height}>
          <form.svg />
        </SvgCanvas>
      </Box>

      <Stack
        direction={isLandscape ? "column" : "row"}
        spacing={1.5}
        sx={{
          bgcolor: ifDarkMode('background.paper', 'primary.main'),
          color: ifDarkMode('text.primary', 'primary.contrastText'),
          borderRadius: 50,
          ...(isLandscape ? {
            mr: 2,
          } : {
            mb: 'max(16px, env(safe-area-inset-bottom))',
            px: 1.5,
          })
        }}
        divider={<Divider orientation={isLandscape? "horizontal" : "vertical"} flexItem />}
      >
        <Tooltip title="Previous">
          <IconButton size="large" color="inherit" onClick={previousBlock} disabled={blockNumber == 0}>
            <ArrowBack />
          </IconButton>
        </Tooltip>

        <Tooltip title="Transform">
          <IconButton size="large" color="inherit" onClick={nextForm} disabled={forms.length == 1}>
            <TransformIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Next">
          <IconButton size="large" color="inherit" onClick={nextBlock} disabled={blockNumber == NBLOCKS.length - 1}>
            <ArrowForward />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  )
}
