import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  margin: 0 auto;
  padding: 0 0 9.81rem 0rem;

  background: ${(props) => props.theme['base-background']};
`

export const LayoutContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
