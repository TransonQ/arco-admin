import { ConfigProvider } from '@arco-design/web-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import './App.css'
import { localeAtom, localeSelector } from './global/localeState'
import { useStoreLocalAtom } from './hooks/useStoreLocalAtom'
import { Main } from './layouts/Main'
import { Login } from './pages/Login'
import { Redirect } from './pages/Redirect'

function App() {
  const language = useRecoilValue(localeSelector)
  // 多语言本地存储
  useStoreLocalAtom('arco_admin_lang', localeAtom)

  return (
    <ConfigProvider locale={language}>
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
