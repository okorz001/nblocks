import * as Color from 'color'

interface BlockProps {
  x?: number
  y?: number
}

interface BlockColors {
  primary: Color,
  shadow: Color,
}

interface BlockPropsWithColor extends BlockProps {
  colors: BlockColors,
}

const Block: React.FC<BlockPropsWithColor> = (props) => {
  return (
    <svg x={props.x} y={props.y}>
      <rect x="0" y="0" width="100" height="100" rx="5" ry="5"
            fill={props.colors.shadow.toString()} />
      <rect x="2.5" y="2.5" width="95" height="95" rx="2.5" ry="2.5"
            fill={props.colors.primary.toString()} />
    </svg>
  )
}

// allow extra properties as a convenience
export function createBlock<C extends BlockColors>(colors: C): React.FC<BlockProps> {
  return (props) => <Block colors={colors} {...props} />
}

export default Block
