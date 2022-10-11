import { Campaign } from '@/pages/Campaign/Campaign'
import { Home } from '@/pages/Home/Home'

export const routes = [
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/campaign',
    element: <Campaign />,
    children: [],
  },
]
