import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 453px 1fr;
  gap: 32px;
  width: 100%;
`

export const Box = styled.div`
  &>div:first-child {
    margin-bottom: 24px;
  }
`
