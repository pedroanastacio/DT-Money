import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/fomatter'

import { SummaryCard, SummaryContainer } from './style'

export function Summary() {
  const summary = useSummary()

  const lastIncome = format(summary.lastIncome, "dd' de 'MMMM", {
    locale: ptBR,
  })

  const lastOutcome = format(summary.lastOutcome, "dd' de 'MMMM", {
    locale: ptBR,
  })

  const hasIncomes = summary.income > 0
  const hasOutcomes = summary.outcome > 0

  return (
    <SummaryContainer>
      <SummaryCard iconVariant="income">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>

        {hasIncomes && <span>Última entrada em {lastIncome}</span>}
      </SummaryCard>

      <SummaryCard iconVariant="outcome">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>

        {hasOutcomes && <span>Última saída em {lastOutcome}</span>}
      </SummaryCard>

      <SummaryCard variant="purple" iconVariant="total">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
