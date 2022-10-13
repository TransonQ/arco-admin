import { ConfigProvider } from '@arco-design/web-react'
import enUS from '@arco-design/web-react/es/locale/en-US'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './layouts/Main'
import { Login } from './pages/Login'
import { Redirect } from './pages/Redirect'

function App() {
  return (
    <ConfigProvider locale={enUS}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
