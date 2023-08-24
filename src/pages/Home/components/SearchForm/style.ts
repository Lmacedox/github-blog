import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const SearchFormInputWrapper = styled.div`
  position: relative;

  input {
    border: none;
    padding: 12px 16px;

    width: 100%;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};

    outline: 0;

    &:focus {
      outline: solid;
      outline-color: #3294f8;
    }
  }

  button[type='submit'] {
    position: absolute;
    right: 20px;
    top: 16px;

    cursor: pointer;
  }
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`
