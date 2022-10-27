export const changeTheme = (isDarkTheme) => {
  if (isDarkTheme) {
    // 设置为暗黑主题
    document.body.setAttribute('arco-theme', 'dark')
  } else {
    // 恢复亮色主题
    document.body.removeAttribute('arco-theme')
  }
}
