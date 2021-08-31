import { render } from 'react-dom'
import App from './App'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

require('reset-css')
render(<App/>, document.getElementById('app'))
