import '@arco-design/web-react/dist/css/arco.css'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
