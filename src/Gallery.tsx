import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import NBLOCKS from './blocks'
import SvgCanvas from './SvgCanvas'

interface GalleryProps {
  number: number,
}

const useStyles = createUseStyles({
  gallery: {
    flex: 'auto',
    maxWidth: '500px',
    height: '100%',
    
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Gallery: React.FC<GalleryProps> = (props) => {
  const classes = useStyles()
  let [formNumber, setFormNumber] = useState(0)

  // reset formNumber on prop change
  const [prevNumber, setPrevNumber] = useState(props.number)
  if (props.number != prevNumber) {
    setPrevNumber(props.number)
    setFormNumber(0)
    formNumber = 0
  }

  const nblock = NBLOCKS[props.number]
  const form = nblock.forms[formNumber]
  const nextForm = () => setFormNumber((formNumber + 1) % nblock.forms.length)
  return (
    <div className={classes.gallery} onClick={nextForm}>
      <SvgCanvas width={form.width} height={form.height}>
        <form.svg />
      </SvgCanvas>
    </div>
  )
}

export default Gallery
