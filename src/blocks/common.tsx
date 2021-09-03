import * as Color from 'color'
import * as React from 'react'

/**
 * Sets the display name of a React functional component.
 * @param name The display name.
 * @param fc The functional component.
 * @returns The same functional component.
 */
function withDisplayName<P>(name: string, fc: React.FC<P>): React.FC<P> {
  fc.displayName = name
  return fc
}

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

export function createBlock(namePrefix: string, color: Color): React.FC<BlockProps> {
  return withDisplayName(namePrefix + 'Block', (props) => <Block color={color} {...props} />)
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

export function createGrid(namePrefix: string, block: typeof Block): React.FC<GridProps> {
  return withDisplayName(namePrefix + 'Grid', (props) => <Grid block={block} {...props} />)
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
