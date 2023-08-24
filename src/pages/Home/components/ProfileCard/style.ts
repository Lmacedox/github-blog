import styled from 'styled-components'

export const ProfileCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 54rem;
  width: 100%;
  height: 13.25rem;

  margin: 0 auto;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  gap: 2rem;

  padding: 32px 32px 32px 40px;
`

export const ProfileWrapperInformations = styled.div`
  width: 100%;
`

export const ProfileCardImage = styled.img`
  border-radius: 8px;
  object-fit: cover;

  max-width: 148px;
  max-height: 148px;

  width: 100%;
  height: 100%;
`

export const ProfileCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const ProfileCardInformation = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

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
