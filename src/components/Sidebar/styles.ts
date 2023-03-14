import styled from 'styled-components'

export const Container = styled.div`
  min-width: 200px;
  display: block;
  padding-top: 38px;
`

export const Logo = styled.img`
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 30px;
`

export const List = styled.div`
  display: block;

  a {
    display: flex;
    align-items: center;
    height: 48px;
    text-decoration: none;
    padding-left: 20px;
    border-bottom: 1px solid #F5F5F5;
    position: relative;
    transition: all 0.2s;

    &:first-child {
      border-top: 1px solid #F5F5F5;
    }

    img {
      width: 24px;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      color: #323232;
      margin: 0;
      margin-left: 8px;
    }

    &.active {
      background: #F5FFFE;
      box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.08);
      &::before {
        content: '';
        display: block;
        width: 4px;
        height: 100%;
        background: #E6242C;
        position: absolute;
        left: 0;
      }

      p {
        font-weight: 700;
      }
    }
  }
`
