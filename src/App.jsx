import {
  Avatar,
  Button,
  Layout,
  Menu,
  Message,
  Space,
} from '@arco-design/web-react'
import {
  IconCalendar,
  IconCaretLeft,
  IconCaretRight,
  IconHome,
  IconMoon,
  IconSun,
} from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'

import './App.css'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const Sider = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => setCollapsed((b) => !b)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const handleChangeTheme = () => setIsDarkTheme((b) => !b)

  useEffect(() => {
    if (isDarkTheme) {
      // 设置为暗黑主题
      document.body.setAttribute('arco-theme', 'dark')
    } else {
      // 恢复亮色主题
      document.body.removeAttribute('arco-theme')
    }
  }, [isDarkTheme])

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
        <Menu
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['0_3']}
          onClickMenuItem={(key) =>
            Message.info({
              content: `You select ${key}`,
              showIcon: true,
            })
          }
          style={{ width: '100%' }}
        >
          <MenuItem key="0_1" disabled>
            <IconHome />
            Menu 1
          </MenuItem>
          <MenuItem key="0_2">
            <IconCalendar />
            Menu 2
          </MenuItem>
          <MenuItem key="0_3">
            <IconCalendar />
            Menu 3
          </MenuItem>
          <SubMenu
            key="1"
            title={
              <span>
                <IconCalendar />
                Navigation 1
              </span>
            }
          >
            <MenuItem key="1_1">Menu 1</MenuItem>
            <MenuItem key="1_2">Menu 2</MenuItem>
            <SubMenu key="2" title="Navigation 2">
              <MenuItem key="2_1">Menu 1</MenuItem>
              <MenuItem key="2_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="3" title="Navigation 3">
              <MenuItem key="3_1">Menu 1</MenuItem>
              <MenuItem key="3_2">Menu 2</MenuItem>
              <MenuItem key="3_3">Menu 3</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="4"
            title={
              <span>
                <IconCalendar />
                Navigation 4
              </span>
            }
          >
            <MenuItem key="4_1">Menu 1</MenuItem>
            <MenuItem key="4_2">Menu 2</MenuItem>
            <MenuItem key="4_3">Menu 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            paddingLeft: 20,
          }}
        >
          <div className="layout_header">
            <div className="items">
              <Space size="medium">
                <Button
                  shape="circle"
                  type="default"
                  style={{ backgroundColor: 'transparent' }}
                  icon={!isDarkTheme ? <IconMoon /> : <IconSun />}
                  onClick={handleChangeTheme}
                />
                <Avatar>A</Avatar>
              </Space>
            </div>
          </div>
        </Header>
        <Layout style={{ padding: '0 24px' }}>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
