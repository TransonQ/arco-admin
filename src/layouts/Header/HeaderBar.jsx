import { localeAtom } from '@/global/localeState'
import { userSelector } from '@/global/userState'
import { useToggleLocalState } from '@/hooks/useToggleLocalState'
import { changeTheme } from '@/utils/changeTheme'
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
import styles from './header.module.less'

const MenuItem = Menu.Item

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
  transform: 'translateY(1px)',
}

export const HeaderBar = () => {
  const nav = useNavigate()

  // 多语言切换
  const [selectLanguage, setSelectLanguage] = useRecoilState(localeAtom)

  // 多语言选项列表
  const LanguageOptions = (
    <Menu
      style={{ minWidth: 80 }}
      selectedKeys={[selectLanguage]}
      onClickMenuItem={setSelectLanguage}
    >
      <MenuItem key="en-US">English</MenuItem>
      <MenuItem key="zh-CN">简体中文</MenuItem>
    </Menu>
  )

  // 主题切换
  const { active: isDarkTheme, toggle: handleThemeToggle } =
    useToggleLocalState('arco_admin_dark_theme')

  useEffect(() => {
    changeTheme(isDarkTheme)
  }, [isDarkTheme])

  // 用户设置
  const handleNav2Settings = useCallback(() => nav('/settings'), [nav])

  // 用户退出登录
  const handleLogout = useCallback(() => {}, [])

  // 点击用户菜单
  const userSettings = (
    <Menu style={{ minWidth: 120 }}>
      <MenuItem
        key="Settings"
        onClick={handleNav2Settings}
      >
        <IconEdit style={iconStyle} />
        Settings
      </MenuItem>
      <MenuItem
        key="Log out"
        onClick={handleLogout}
      >
        <IconUser style={iconStyle} />
        Log out
      </MenuItem>
    </Menu>
  )

  const userData = useRecoilValue(userSelector)

  return (
    <div className={styles.header}>
      <div className={styles.header_items}>
        <Space size="medium">
          <Dropdown
            droplist={LanguageOptions}
            trigger="click"
            position="br"
          >
            <Button
              shape="circle"
              icon={<IconLanguage />}
            />
          </Dropdown>
          <Button
            shape="circle"
            type="default"
            icon={!isDarkTheme ? <IconMoon /> : <IconSun />}
            onClick={handleThemeToggle}
          />
          <Dropdown
            droplist={userSettings}
            trigger="click"
            position="bl"
          >
            <Avatar className={styles.avatar}>{userData.name}</Avatar>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}
