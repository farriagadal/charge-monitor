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

export const CardBattery = styled.div`
  border: 1px solid #323232;
  max-width: 70px;
  border-radius: 8px;
  box-shadow: 0px 3px 9px rgb(0 0 0 / 25%);
  display: grid;
  justify-items: center;
  padding: 12px;

  &>p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #000000;
    margin-bottom: 0;
  }
`
type ListProps = {
  columns: number
}

export const List = styled.div<ListProps>`
  display: grid;
  gap: 25px;
  margin: auto;
  width: max-content;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  padding: 24px 0;
  border-top: 2px solid rgb(245, 245, 245);
  border-bottom: 2px solid rgb(245, 245, 245);

  p {
    width: 144px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #323232;
    margin: 0;
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
  margin-left: 20px;
  white-space: nowrap;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px 10px;

  &>div {
    display: flex;
    align-items: center;

    p {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      color: #000000;
      margin: 0;
      margin-left: 8px;
    }
  }
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin: 0;
  margin-bottom: 10px;
`
