import { ReactElement } from 'react'
import Block from "./Block"

interface GridProps {
  block: typeof Block
  x?: number
  y?: number
  width?: number
  height?: number
}

export const Grid: React.FC<GridProps> = (props) => {
  const blocks: ReactElement[] = []
  const x = props.x || 0
  const y = props.y || 0
  const width = props.width || 1
  const height = props.height || 1
  let key = 0
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      blocks.push(
        <props.block key={key++} x={x + i * 100} y={y + j * 100} />
      )
    }
  }
  return <svg>{blocks}</svg>
}

export default Grid
