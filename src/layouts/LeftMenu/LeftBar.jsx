import { Menu } from '@arco-design/web-react'
import {
  IconCalendar,
  IconFormula,
  IconHome,
} from '@arco-design/web-react/icon'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

export const LeftBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = useCallback((key) => navigate(key), [navigate])

  return (
    <Menu
      // defaultOpenKeys={[pathname]}
      // defaultSelectedKeys={[pathname]}
      selectedKeys={[pathname]} // 受控模式
      onClickMenuItem={handleClick}
      style={{ width: '100%' }}
    >
      <MenuItem key="/">
        <IconHome />
        Home
      </MenuItem>
      <MenuItem key="/influencer">
        <IconCalendar />
        Influencer
      </MenuItem>
      <SubMenu
        key="/campaign"
        title={
          <span>
            <IconCalendar />
            Campaign
          </span>
        }
      >
        <MenuItem key="/campaign">Campaign</MenuItem>
        <MenuItem key="/campaign/2">not found</MenuItem>
      </SubMenu>
      <MenuItem key="/analytics">
        <IconFormula />
        Analytics
      </MenuItem>
    </Menu>
  )
}
