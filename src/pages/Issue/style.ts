import styled from 'styled-components'

export const IssueMainWrapper = styled.main`
  width: 100%;
  max-width: 846px;
`

export const IssueCardSection = styled.section`
  margin-top: -5rem;
  position: relative;
`

export const IssueBodySection = styled.section`
  h1,
  h2,
  h3 {
    font-family: 'Nunito';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Nunito';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  padding: 40px 32px;
`
