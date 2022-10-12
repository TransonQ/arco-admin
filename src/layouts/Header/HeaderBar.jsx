import { Avatar, Button, Menu, Space, Trigger } from '@arco-design/web-react'
import {
  IconEdit,
  IconMoon,
  IconSun,
  IconUser,
} from '@arco-design/web-react/icon'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './header.module.css'

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
    <div className={styles.header}>
      <div className={styles.header__items}>
        <Space size="medium">
          <Button
            shape="circle"
            type="default"
            style={{ backgroundColor: 'transparent' }}
            icon={!isDarkTheme ? <IconMoon /> : <IconSun />}
            onClick={handleChangeTheme}
          />
          <Trigger popup={() => <Popup />} trigger="click" position="bottom">
            <Avatar className={styles.avatar}>A</Avatar>
          </Trigger>
        </Space>
      </div>
    </div>
  )
}

function Popup() {
  const nav = useNavigate()

  const handleNav2Settings = useCallback(() => nav('/settings'), [nav])
  return (
    <Menu style={{ minWidth: 140 }}>
      <MenuItem key="0" onClick={handleNav2Settings}>
        <IconEdit />
        Settings
      </MenuItem>
      <MenuItem key="1">
        <IconUser />
        Log out
      </MenuItem>
    </Menu>
  )
}
