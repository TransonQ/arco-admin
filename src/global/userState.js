import { getUser } from '@/api/user'
import { selector } from 'recoil'

export const userSelector = selector({
  key: 'userSelector--1',
  get: async () => {
    const { data } = await getUser()
    return data
  },
})
