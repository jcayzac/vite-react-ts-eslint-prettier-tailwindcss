/* @jsxImportSource fre */
import { render } from 'fre'
import '~/index.css'
import App from '~/App'

const root = document.getElementById('root')

if (root !== null) {
  render(<App />, root)
}
