import { localeAtom } from '@/global/localeState'
import { localeLanguage } from '@/locale/locale'
import { useRecoilState } from 'recoil'

export const useLocale = () => {
  const [lang] = useRecoilState(localeAtom)
  return localeLanguage[lang]
}
