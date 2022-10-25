import { localeAtom } from '@/global/localeState'
import { localeLanguage } from '@/locale/locale'
import { useRecoilValue } from 'recoil'

export const useLocale = () => {
  const lang = useRecoilValue(localeAtom)
  return localeLanguage[lang]
}
