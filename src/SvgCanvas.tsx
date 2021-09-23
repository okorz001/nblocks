interface SvgCanvasProps {
  x?: number,
  y?: number,
  width: number,
  height: number,
  scale?: number,
}

const SvgCanvas: React.FC<SvgCanvasProps> = (props) => {
  return (
    <svg
      viewBox={`${props.x || 0} ${props.y || 0} ${props.width} ${props.height}`}
      preserveAspectRatio="xMidYMid meet"
      css={{
        width: '100%',
        height: '100%',
        maxWidth: (props.scale || 1) * props.width,
        maxHeight: (props.scale || 1) * props.height,
      }}
    >
      {props.children}
    </svg>
  )
}

export default SvgCanvas
