import { Spin } from '@arco-design/web-react'
import { useLocalStorageState } from 'ahooks'
import classNames from 'classnames'
import styles from './styles.module.css'

export const FreshPage = () => {
  const [isDarkTheme] = useLocalStorageState('arco_admin_dark_theme')

  return (
    <div
      className={classNames(
        styles.loadingPage,
        isDarkTheme ? styles.dark : styles.light
      )}
    >
      <Spin dot size={10} />
    </div>
  )
}
