import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 453px 1fr;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Box = styled.div`
  &>div:first-child {
    margin-bottom: 24px;
  }
`
