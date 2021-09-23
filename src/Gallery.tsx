import { ArrowBack, ArrowForward, Transform as TransformIcon } from '@mui/icons-material'
import { Box, Divider, IconButton, Stack, Tooltip } from '@mui/material'
import { SxProps } from '@mui/system'
import { useState } from 'react'
import NBLOCKS from './blocks'
import { ifDarkMode } from './DarkMode'
import SvgCanvas from './SvgCanvas'

const PADDING = 20

export default function Gallery(props: {
  sx?: SxProps
}) {
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

  return (
    <Box
      sx={{
        ...props.sx,
        // flex
        display: 'flex',
        flexFlow: 'column nowrap',
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
        }}
      >
        <SvgCanvas scale={0.5} width={form.width} height={form.height}>
          <form.svg />
        </SvgCanvas>
      </Box>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          bgcolor: ifDarkMode('background.paper', 'primary.main'),
          color: ifDarkMode('text.primary', 'primary.contrastText'),
          borderRadius: 50,
          mb: 2,
          pl: 1.5,
          pr: 1.5,
        }}
        divider={<Divider orientation="vertical" flexItem />}
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
