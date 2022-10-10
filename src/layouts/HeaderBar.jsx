import { Avatar, Button, Menu, Space, Trigger } from '@arco-design/web-react'
import { IconApps, IconMoon, IconSun } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'

const MenuItem = Menu.Item

export const HeaderBar = () => {
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
          <Trigger popup={() => <Popup />} trigger="click" position="bottom">
            <Avatar style={{ cursor: 'pointer' }}>A</Avatar>
          </Trigger>
        </Space>
      </div>
    </div>
  )
}

function Popup() {
  return (
    <Menu>
      <MenuItem key="0">
        <IconApps />
        Navigation 1
      </MenuItem>
      <MenuItem key="0">
        <IconApps />
        Navigation 2
      </MenuItem>
    </Menu>
  )
}
