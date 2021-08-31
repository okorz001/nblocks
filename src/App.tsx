import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import NBLOCKS from './blocks'
import Button from './Button'
import Gallery from './Gallery'

const useStyles = createUseStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const App = () => {
  const classes = useStyles()
  const [number, setNumber] = useState(0)
  const decrement = () => { setNumber(number - 1) }
  const increment = () => { setNumber(number + 1) }
  return (
    <div className={classes.app}>
      <Button label={"−"} onClick={decrement} disabled={number == 0}/>
      <Gallery number={number}/>
      <Button label={"+"} onClick={increment} disabled={number == NBLOCKS.length - 1}/>
    </div>
  )
}

export default App
