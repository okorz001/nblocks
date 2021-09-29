import { IconButton, Menu } from "@mui/material";
import { useState } from "react";

export default function DropMenu(props: {
  icon: React.ReactNode,
  children: React.ReactNode,
}) {
  const [anchorEl, setAnchorEl] = useState<Element>(null)
  const showMenu = (event: React.MouseEvent) => setAnchorEl(event.currentTarget)
  const hideMenu = () => setAnchorEl(null)

  return (
    <>
      <IconButton
        color="inherit"
        onClick={showMenu}
      >
        {props.icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={anchorEl !== null}
        onClick={hideMenu}
        onClose={hideMenu}
        PaperProps={{
          sx: {
            minWidth: '24ch',
          },
        }}
      >
        {props.children}
      </Menu>
    </>
  )
}
