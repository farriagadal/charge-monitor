import styled from 'styled-components'

type ContainerProps = {
  percetage: number
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: max-content;
  height: 54px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 24px;
    height: ${({ percetage }) => percetage * 45 / 100}px;
    background: #87E0A5;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 3px;
  }

  img {
    position: relative;
    height: 56px;
  }
`
