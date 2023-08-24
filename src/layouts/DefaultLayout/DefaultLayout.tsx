import { Header } from '../../components'
import { LayoutContainer, LayoutContent } from './DefaultLayout.style'

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Header />
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}
