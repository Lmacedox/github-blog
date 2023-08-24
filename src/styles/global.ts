import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Nunito';
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        background: none;
        border: none;
        &:hover{
          cursor: pointer;
          transition: 0.4s
        }

        &:not(:hover){ 
           transition: 0.4s 
        }
    }
    
    input, textarea{
        background: ${(props) => props.theme['base-input']};
    }

    a{
        text-decoration: none;
    }



    .title-L{
        font-family: 'Nunito';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; 
        color: ${(props) => props.theme['base-title']} 
    }

    .title-M{
        font-family: Nunito;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; 
        color: ${(props) => props.theme['base-title']} 
    }

    .title-S{
        font-family: Nunito;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; 
        color: ${(props) => props.theme['base-title']} 
    }

    .link{
        font-family: 'Nunito';
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;
        color: ${(props) => props.theme.blue};
    }

    .text-M{
        font-family: 'Nunito';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: ${(props) => props.theme['base-text']};
    }

    .text-S{
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
        color: ${(props) => props.theme['base-span']};
    }
`
