import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-right: 24px;
  height: 105px;

  h2 {
    font-weight: 300;
    font-size: 32px;
    color: #323232;
  }
`
export const Icons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;


  img {
    margin-right: 18px;
  }
`
export const Profile = styled.div`
  display: flex;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #323232;
    margin-left: 8px;
    margin-right: 10px;
  }
`
export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(58, 58, 58, 0.12);
  border-radius: 46px;
`
