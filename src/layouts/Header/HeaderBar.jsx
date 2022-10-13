import { Avatar, Button, Dropdown, Menu, Space } from '@arco-design/web-react'
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

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
  transform: 'translateY(1px)',
}

export const HeaderBar = () => {
  const nav = useNavigate()

  // 主题切换
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

  // 点击个人设置
  const handleNav2Settings = useCallback(() => nav('/settings'), [nav])

  // 下拉菜单
  const menuList = (
    <Menu style={{ minWidth: 140 }}>
      <MenuItem key="0" onClick={handleNav2Settings}>
        <IconEdit style={iconStyle} />
        Settings
      </MenuItem>
      <MenuItem key="1">
        <IconUser style={iconStyle} />
        Log out
      </MenuItem>
    </Menu>
  )

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
          <Dropdown droplist={menuList} trigger="click" position="bl">
            <Avatar className={styles.avatar}>A</Avatar>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}
