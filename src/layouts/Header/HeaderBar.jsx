import { localeAtom } from '@/global/localeState'
import { userSelector } from '@/global/userState'
import { useToggleLocalState } from '@/hooks/useToggleLocalState'
import { Avatar, Button, Dropdown, Menu, Space } from '@arco-design/web-react'
import {
  IconEdit,
  IconLanguage,
  IconMoon,
  IconSun,
  IconUser,
} from '@arco-design/web-react/icon'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import styles from './header.module.css'

const MenuItem = Menu.Item

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
  transform: 'translateY(1px)',
}

export const HeaderBar = () => {
  const nav = useNavigate()

  // 多语言切换
  const [, setSelectLanguage] = useRecoilState(localeAtom)
  // 多语言选项列表
  const LanguageOptions = (
    <Menu style={{ minWidth: 140 }}>
      <MenuItem
        key="0"
        onClick={() => {
          setSelectLanguage('en')
        }}
      >
        English
      </MenuItem>
      <MenuItem
        key="1"
        onClick={() => {
          setSelectLanguage('zh')
        }}
      >
        简体中文
      </MenuItem>
    </Menu>
  )

  // 主题切换
  const { active: isDarkTheme, toggle: handleThemeToggle } =
    useToggleLocalState('arco_admin_dark_theme')

  useEffect(() => {
    if (isDarkTheme) {
      // 设置为暗黑主题
      document.body.setAttribute('arco-theme', 'dark')
    } else {
      // 恢复亮色主题
      document.body.removeAttribute('arco-theme')
    }
  }, [isDarkTheme])

  // 用户设置
  const handleNav2Settings = useCallback(() => nav('/settings'), [nav])

  // 用户退出登录
  const handleLogout = useCallback(() => {}, [])

  // 点击用户菜单
  const userSettings = (
    <Menu style={{ minWidth: 140 }}>
      <MenuItem key="0" onClick={handleNav2Settings}>
        <IconEdit style={iconStyle} />
        Settings
      </MenuItem>
      <MenuItem key="1" onClick={handleLogout}>
        <IconUser style={iconStyle} />
        Log out
      </MenuItem>
    </Menu>
  )

  const userData = useRecoilValue(userSelector)
  console.log('userData: ', userData)

  return (
    <div className={styles.header}>
      <div className={styles.header__items}>
        <Space size="medium">
          <Dropdown droplist={LanguageOptions} trigger="click" position="br">
            <Button shape="circle" icon={<IconLanguage />} />
          </Dropdown>
          <Button
            shape="circle"
            type="default"
            icon={!isDarkTheme ? <IconMoon /> : <IconSun />}
            onClick={handleThemeToggle}
          />
          <Dropdown droplist={userSettings} trigger="click" position="bl">
            <Avatar className={styles.avatar}>{userData.name}</Avatar>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}
