import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem 1.5rem 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const TransactionsList = styled.ul`
  margin-top: 1.5rem;

  li {
    border-radius: 6px;
    padding: 1.25rem;
    background-color: ${(props) => props.theme['gray-700']};

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    header {
      > span {
        color: ${(props) => props.theme['gray-300']};
      }

      strong {
        display: block;
        margin-top: 0.5rem;
        font-size: 1.25rem;
        line-height: 1.3;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme['gray-500']};
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }

  li + li {
    margin-top: 0.75rem;
  }

  @media (min-width: 576px) {
    display: none;
  }
`

const VARIANTS = {
  income: 'green-300',
  outcome: 'red-300',
} as const

interface PriceHighlightProps {
  variant: keyof typeof VARIANTS
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) => props.theme[VARIANTS[props.variant]]};
`
