import { ThemeProvider } from 'styled-components'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/Themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
