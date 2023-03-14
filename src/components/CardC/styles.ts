import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &>div {
    width: 100%;
    margin-left: 16px;
  }
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #323232;
  margin: 0;
  margin-bottom: 15px;
`

export const Divider = styled.div`
  height: 2px;
  background: #F5F5F5;
  margin: 40px 0;
`

export const Content = styled.div`
  padding-bottom: 50px;
`
