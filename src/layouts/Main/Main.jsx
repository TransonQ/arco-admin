import { ErrorFallback } from '@/components/ErrorFallback/ErrorFallback'
import { FreshPage } from '@/components/FreshPage/FreshPage'
import { routes } from '@/configs/routes'
import { Layout } from '@arco-design/web-react'
import { IconCaretLeft, IconCaretRight } from '@arco-design/web-react/icon'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useRoutes } from 'react-router-dom'
import { HeaderBar } from '../Header'
import { LeftBar } from '../LeftMenu'
import './main.css'

const Sider = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content

export const Main = () => {
  const elements = useRoutes(routes)

  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => setCollapsed((b) => !b)

  // useMount(async () => {
  //   const data = await getUser()
  //   console.log('data: ', data)
  // })

  return (
    <Suspense fallback={<FreshPage />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Layout className="layout_frame">
          <Sider
            collapsed={collapsed}
            onCollapse={handleCollapsed}
            collapsible
            trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
            breakpoint="xl"
          >
            <div className="logo"></div>
            <LeftBar />
          </Sider>
          <Layout>
            <Header>
              <HeaderBar />
            </Header>
            <Layout style={{ padding: '24px' }}>
              <Content>{elements}</Content>
            </Layout>
          </Layout>
        </Layout>
      </ErrorBoundary>
    </Suspense>
  )
}
