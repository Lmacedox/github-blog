import backgroundCover from '../../assets/background-header.svg'
import { HeaderWrapper } from './style'

export function Header() {
  return (
    <HeaderWrapper>
      <img src={backgroundCover} alt="" />
    </HeaderWrapper>
  )
}
