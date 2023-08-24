import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesProviderContext } from './contexts/IssuesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssuesProviderContext>
          <Router />
        </IssuesProviderContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
