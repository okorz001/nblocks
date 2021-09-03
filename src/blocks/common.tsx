import * as Color from 'color'

export interface BlockProps {
  color?: Color
  x?: number
  y?: number
}

export const Block: React.FC<BlockProps> = (props) => {
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

export interface GridProps {
  block?: typeof Block
  x?: number
  y?: number
  width?: number
  height?: number
}

export const Grid: React.FC<GridProps> = (props) => {
  const blocks: React.ReactNode[] = []
  const GridBlock = props.block || Block
  const x = props.x || 0
  const y = props.y || 0
  const width = props.width || 1
  const height = props.height || 1
  let key = 0
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      blocks.push(
        <GridBlock key={key++} x={x + i * 100} y={y + j * 100} />
      )
    }
  }
  return <svg children={blocks} />
}

// TODO: set display name
export function createGrid(block: typeof Block): React.FC<GridProps> {
  return (props) => <Grid block={block} {...props} />
}

export interface Form {
  width: number,
  height: number,
  svg: React.ElementType,
  tags?: string[],
}

export interface NBlock {
  number: number,
  forms: Form[],
}
