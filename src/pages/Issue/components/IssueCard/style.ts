import styled from 'styled-components'

export const IssueCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 54rem;
  width: 100%;
  height: 13.25rem;

  margin: 0 auto;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  gap: 1.25rem;

  padding: 32px 32px 32px 40px;
`

export const IssueCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  width: 100%;
`

export const IssueWrapperInformations = styled.div`
  width: 100%;
`

export const IssueCardBody = styled.body`
  background: inherit;
  width: 100%;
`

export const IssueCardInformation = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  background-color: inherit;

  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      line-height: 0;
    }
  }
`
