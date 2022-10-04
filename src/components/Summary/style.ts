import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media only screen and (max-width: 992px) {
    overflow: auto;
    white-space: nowrap;

    ::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

const ICON_VARIANTS = {
  income: 'green-300',
  outcome: 'red-300',
  total: 'white',
} as const

interface SummaryCardProps {
  variant?: 'purple'
  iconVariant: keyof typeof ICON_VARIANTS
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  min-width: 17.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};

    svg {
      color: ${(props) => props.theme[ICON_VARIANTS[props.iconVariant]]};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
  }

  ${(props) =>
    props.variant === 'purple' &&
    css`
      background: ${props.theme['purple-700']};
    `}
`
