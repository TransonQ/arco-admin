import { Layout } from '@arco-design/web-react'
import { IconCaretLeft, IconCaretRight } from '@arco-design/web-react/icon'
import { useState } from 'react'

import './App.css'
import { HeaderBar } from './layouts/HeaderBar'
import { LeftBar } from './layouts/LeftBar'

const Sider = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => setCollapsed((b) => !b)

  return (
    <Layout className="layout_frame">
      <Sider
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint="xl"
      >
        <div className="logo" />
        <LeftBar />
      </Sider>
      <Layout>
        <Header>
          <HeaderBar />
        </Header>
        <Layout style={{ padding: '24px' }}>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
