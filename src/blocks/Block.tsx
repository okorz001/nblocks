import * as Color from 'color'

interface BlockProps {
  color?: Color
  x?: number
  y?: number
}

const Block: React.FC<BlockProps> = (props) => {
  const color = props.color || new Color("#FFFFFF")
  return (
    <svg x={props.x || 0} y={props.y || 0}>
      <rect x="0" y="0" width="100" height="100" rx="5" ry="5"
            fill={color.darken(0.25).toString()} />
      <rect x="2.5" y="2.5" width="95" height="95" rx="2.5" ry="2.5"
            fill={color.toString()} />
    </svg>
  )
}

// TODO: set display name
export function createBlock(color: Color): React.FC<BlockProps> {
  return (props) => <Block color={color} {...props} />
}

export default Block
