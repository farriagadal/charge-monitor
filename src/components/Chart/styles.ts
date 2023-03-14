import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-left: 30px;
  padding-bottom: 30px;
`

export const LabelY = styled.div`
  position: absolute;
  left: 0px;
  top: 50%;
  transform: rotate(-90deg) translate(50%, -40px);
`

export const LabelX = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`
