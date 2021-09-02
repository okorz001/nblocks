import { createUseStyles } from 'react-jss'

interface SvgCanvasProps {
  x?: number,
  y?: number,
  width: number,
  height: number,
  scale?: number,
}

type SvgCanvasRules = 'canvas'

const useStyles = createUseStyles<SvgCanvasRules, SvgCanvasProps>({
  canvas: {
    maxWidth: props => (props.scale || 1) * props.width,
    maxHeight: props => (props.scale || 1) * props.height,
    width: '100%',
    height: '100%',
  },
})

const SvgCanvas: React.FC<SvgCanvasProps> = (props) => {
  const classes = useStyles(props)
  const viewBox = `${props.x || 0} ${props.y || 0} ${props.width} ${props.height}`
  return (
    <svg className={classes.canvas} viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
      {props.children}
    </svg>
  )
}

export default SvgCanvas
