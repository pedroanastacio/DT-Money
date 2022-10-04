import { useContextSelector } from 'use-context-selector'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/fomatter'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsList,
  TransactionsTable,
} from './styles'
import { CalendarBlank, TagSimple } from 'phosphor-react'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={`transaction-${transaction.id}`}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>

        <TransactionsList>
          {transactions.map((transaction) => {
            return (
              <li key={`transaction-${transaction.id}`}>
                <header>
                  <span>{transaction.description}</span>
                  <strong>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </strong>
                </header>

                <div>
                  <span>
                    <TagSimple size={16} /> {transaction.category}
                  </span>
                  <span>
                    <CalendarBlank size={16} />
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </span>
                </div>
              </li>
            )
          })}
        </TransactionsList>
      </TransactionsContainer>
    </div>
  )
}
