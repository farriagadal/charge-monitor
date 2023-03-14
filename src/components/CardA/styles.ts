import styled from 'styled-components'

export const Container = styled.div`
`

export const Box = styled.div`
  &>p {
    margin-bottom: 10px;
  }
  width: 50%;
  &:first-child {
    margin-right: 26px;
    /* width: 50%; */
  }
`
export const Energy = styled.div`
  border: 1px solid #CCCCCC;
  border-radius: 16px;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  color: #179087;
  height: fit-content;
  padding: 0 20px;
  margin-left: auto;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;

  p {
    width: 144px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #323232;
    margin: 0;
  }
`

export const Address = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  border-top: 2px solid #F5F5F5;
  color: #5F6368;
  margin-top: 24px;
  padding-top: 8px;
`
