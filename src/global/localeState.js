import enUS from '@arco-design/web-react/es/locale/en-US'
import zhCN from '@arco-design/web-react/es/locale/zh-CN'
import { atom, selector } from 'recoil'

export const localeAtom = atom({
  key: 'localeAtom',
  default: 'en-US',
})

export const localeSelector = selector({
  key: 'localeSelector',
  get: ({ get }) => {
    const locale = get(localeAtom)
    // default locale object of Arco design
    switch (locale) {
      case 'zh-CN':
        return zhCN
      case 'en-US':
      default:
        return enUS
    }
  },
})
