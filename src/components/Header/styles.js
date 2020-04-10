import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border: solid 1px #dddddd;
  padding-left: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    height: 26px;
    padding: 0 30px;
    margin-right: 30px;
    border-right: 1px solid #eee;
  }

  a {
    font-weight: bold;
    color: #999999;
    /* color: #444444; */
    font-size: 15px;
    font-weight: bold;
    margin-right: 20px;
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      margin-right: 30px;

      strong {
        display: block;
        font-weight: bold;
        font-size: 14px;
        color: #666666;
      }

      a {
        display: block;
        margin-top: 2px;
        font-size: 14px;
        color: #de3b3b;
      }
    }
  }
`;
