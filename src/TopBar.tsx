import { Brightness4, FilterList, Settings, Update } from '@mui/icons-material'
import { AppBar, Divider, ListItemIcon, ListItemText, MenuItem, Switch, Toolbar, Typography } from "@mui/material"
import { useDarkMode } from './DarkMode'
import DropMenu from './DropMenu'
import { useServiceWorker } from './ServiceWorker'

export default function TopBar() {
  const { darkMode, setDarkMode } = useDarkMode()
  const { registration } = useServiceWorker()
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ pt: 'env(safe-area-inset-top)' }}>
        <DropMenu icon={<FilterList />}>
          <MenuItem>All</MenuItem>
          <Divider />
          <MenuItem>Squares</MenuItem>
          <MenuItem>Steps</MenuItem>
          <Divider />
          <MenuItem>Evens</MenuItem>
          <MenuItem>Odds</MenuItem>
          <Divider />
          <MenuItem>Ones</MenuItem>
          <MenuItem>Twos</MenuItem>
          <MenuItem>Threes</MenuItem>
          <MenuItem>Fours</MenuItem>
          <MenuItem>Fives</MenuItem>
          <MenuItem>Tens</MenuItem>
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
