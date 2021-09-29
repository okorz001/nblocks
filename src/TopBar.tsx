import { Brightness4, Check, FilterList, Settings, Update } from '@mui/icons-material'
import { AppBar, Divider, ListItemIcon, ListItemText, MenuItem, Switch, Toolbar, Typography } from "@mui/material"
import { useDarkMode } from './DarkMode'
import DropMenu from './DropMenu'
import { useServiceWorker } from './ServiceWorker'

export default function TopBar(props: {
  group: string,
  setGroup: (group: string) => void,
}) {
  const { darkMode, setDarkMode } = useDarkMode()
  const { registration } = useServiceWorker()
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ pt: 'env(safe-area-inset-top)' }}>
        <DropMenu icon={<FilterList />}>
          <MenuItem onClick={() => props.setGroup('all')}>
            <ListItemText>All</ListItemText>
            {props.group === 'all' && <Check/>}
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => props.setGroup('squares')}>
            <ListItemText>Squares</ListItemText>
            {props.group === 'squares' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('steps')}>
            <ListItemText>Steps</ListItemText>
            {props.group === 'steps' && <Check/>}
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => props.setGroup('evens')}>
            <ListItemText>Evens</ListItemText>
            {props.group === 'evens' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('odds')}>
            <ListItemText>Odds</ListItemText>
            {props.group === 'odds' && <Check/>}
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => props.setGroup('ones')}>
            <ListItemText>Ones</ListItemText>
            {props.group === 'ones' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('twos')}>
            <ListItemText>Twos</ListItemText>
            {props.group === 'twos' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('threes')}>
            <ListItemText>Threes</ListItemText>
            {props.group === 'threes' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('fours')}>
            <ListItemText>Fours</ListItemText>
            {props.group === 'fours' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('fives')}>
            <ListItemText>Fives</ListItemText>
            {props.group === 'fives' && <Check/>}
          </MenuItem>

          <MenuItem onClick={() => props.setGroup('tens')}>
            <ListItemText>Tens</ListItemText>
            {props.group === 'tens' && <Check/>}
          </MenuItem>
        </DropMenu>

        <Typography variant="h6" sx={{ flex: 'auto', px: 2 }}>
          NBlocks
        </Typography>

        <DropMenu icon={<Settings />}>
          <MenuItem onClick={() => setDarkMode(!darkMode)}>
            <ListItemIcon>
              <Brightness4 />
            </ListItemIcon>
            <ListItemText>Dark Mode</ListItemText>
            <Switch checked={darkMode} />
          </MenuItem>

          <Divider />

          <MenuItem disabled={!registration} onClick={() => registration.update()}>
            <ListItemIcon>
              <Update />
            </ListItemIcon>
            <ListItemText>Check for Updates</ListItemText>
          </MenuItem>
        </DropMenu>
      </Toolbar>
    </AppBar>
  )
}
