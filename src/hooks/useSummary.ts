import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        const createdAt = new Date(transaction.createdAt)

        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price

          if (createdAt > acc.lastIncome) {
            acc.lastIncome = createdAt
          }
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price

          if (createdAt > acc.lastOutcome) {
            acc.lastOutcome = createdAt
          }
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
        lastIncome: new Date(0),
        lastOutcome: new Date(0),
      },
    )
  }, [transactions])

  return summary
}
