import * as Color from 'color'

interface BlockProps {
  x?: number
  y?: number
}

interface BlockPropsWithColor extends BlockProps {
  color: Color,
}

const Block: React.FC<BlockPropsWithColor> = (props) => {
  return (
    <svg x={props.x} y={props.y}>
      <rect x="0" y="0" width="100" height="100" rx="5" ry="5"
            fill={props.color.darken(0.25).toString()} />
      <rect x="2.5" y="2.5" width="95" height="95" rx="2.5" ry="2.5"
            fill={props.color.toString()} />
    </svg>
  )
}

// allow extra properties as a convenience
export function createBlock(color: Color): React.FC<BlockProps> {
  return (props) => <Block color={color} {...props} />
}

export default Block
