import { ArrowBack, ArrowForward, Transform as TransformIcon } from '@mui/icons-material'
import { Box, Divider, IconButton, Stack, Tooltip, useMediaQuery } from '@mui/material'
import { NBlock } from './blocks'
import { ifDarkMode } from './DarkMode'
import SvgCanvas from './SvgCanvas'

export default function Gallery(props: {
  blocks: NBlock[],
  block: number,
  setBlock: (block: number) => void,
  form: number,
  setForm: (form: number) => void,
}) {
  const nblock = props.blocks[props.block]
  const forms = nblock.forms
  const form = forms[props.form]

  const previousBlock = () => {
    props.setBlock(props.block - 1)
  }
  const nextBlock = () => {
    props.setBlock(props.block + 1)
  }
  // wrap around from last form
  const nextForm = () => props.setForm((props.form + 1) % forms.length)

  // we only want to use landscape layout if the height is too small for regular layout
  // (orientation: landscape) can be true with huge viewports which is not desirable
  // this is a heuristic for a rotated phone -- 480px is a rough upper bound for mobile phone width
  // 428px is iPhone 12 Pro Max width
  const isLandscape = useMediaQuery('(max-height: 480px) and (min-width: 480px)')

  return (
    <Box
      component="main"
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
          // prevent overflow
          minWidth: '0px',
          minHeight: '0px',
          padding: 2,

          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          ...(isLandscape ? {
            // flex cross axis
            height: '100%',
            // keep content centered despite controls on the right side
            ml: 8,
          } : {
            // flex cross axis
            width: '100%',
          })
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
          <IconButton size="large" color="inherit" onClick={previousBlock} disabled={props.block == 0}>
            <ArrowBack />
          </IconButton>
        </Tooltip>

        <Tooltip title="Transform">
          <IconButton size="large" color="inherit" onClick={nextForm} disabled={forms.length == 1}>
            <TransformIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Next">
          <IconButton size="large" color="inherit" onClick={nextBlock} disabled={props.block == props.blocks.length - 1}>
            <ArrowForward />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  )
}
