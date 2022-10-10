import { Avatar, Button, Space } from '@arco-design/web-react'
import { IconMoon, IconSun } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'

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
          <Avatar>A</Avatar>
        </Space>
      </div>
    </div>
  )
}
