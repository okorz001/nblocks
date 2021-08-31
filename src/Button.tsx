import * as Color from 'color'
import { createUseStyles } from 'react-jss'

interface ButtonProps {
  label: string,
  onClick: React.MouseEventHandler,
  disabled?: boolean,
}

const buttonColor = Color('#2E8BC0')

const useStyles = createUseStyles({
  button: {
    flex: 'none',
    width: '40px',
    height: '40px',
    margin: '5px',

    border: 'none',
    borderRadius: '50%',
    
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    transition: '100ms all ease-in-out',
  },
  disabled: {
    extend: 'button',
    backgroundColor: 'lightgray',
  },
  enabled: {
    extend: 'button',
    backgroundColor: buttonColor.string(),
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.20)',
    '&:hover': {
      backgroundColor: buttonColor.lighten(0.20).string(),
    },
    '&:active': {
      backgroundColor: buttonColor.darken(0.20).string(),
      boxShadow: 'none',
    },
  },
  label: {
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '24px',
  },
})

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles()
  return (
    <button className={props.disabled ? classes.disabled : classes.enabled}
            disabled={props.disabled}
            onClick={props.onClick}>
      <span className={classes.label}>{props.label}</span>
    </button>
  )
}

export default Button
