import { atom, selector } from 'recoil'
import locale_en from '../locale/locale_en'
import locale_zh from '../locale/locale_zh'

export const localeAtom = atom({
  key: 'localeAtom',
  default: 'en',
})

export const localeSelector = selector({
  key: 'localeSelector',
  get: ({ get }) => {
    const locale = get(localeAtom)

    switch (locale) {
      case 'en':
        return locale_en
      case 'zh':
        return locale_zh
      default:
        return locale_en
    }
  },
})
