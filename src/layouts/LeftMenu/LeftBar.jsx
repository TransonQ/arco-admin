import { Menu } from '@arco-design/web-react'
import { IconCalendar, IconHome } from '@arco-design/web-react/icon'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

export const LeftBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  console.log('pathname: ', pathname)

  const handleClick = useCallback((key) => navigate(key), [navigate])

  return (
    <Menu
      defaultOpenKeys={['/']}
      defaultSelectedKeys={[pathname]}
      onClickMenuItem={handleClick}
      style={{ width: '100%' }}
    >
      <MenuItem key="/">
        <IconHome />
        Home
      </MenuItem>
      <MenuItem key="/campaign">
        <IconCalendar />
        camapign
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
  )
}
