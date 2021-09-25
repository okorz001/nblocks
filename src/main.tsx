import { render } from 'react-dom'
import App from './App'
import { initInnerHeight } from './inner-height'

initInnerHeight()
render(<App/>, document.getElementById('app'))
