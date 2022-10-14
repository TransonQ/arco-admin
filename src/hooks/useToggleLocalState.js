import { useLocalStorageState } from 'ahooks'
import { useCallback } from 'react'

export const useToggleLocalState = (key, defaultValue = false) => {
  const [active, setActive] = useLocalStorageState(key, {
    defaultValue,
  })

  const toggle = useCallback(() => setActive((active) => !active), [setActive])

  return { active, setActive, toggle }
}
