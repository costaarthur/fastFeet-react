import styled from 'styled-components';
// //
export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* max-width: 1200px; */
  width: auto;
`;

export const Content = styled.div`
    max-width: 1140px;
    width: 1200px;
    /* background: green; */
    background: #f5f5f5;
    margin: 34px auto;
    font-size: 24;
    /* padding: 0 120px; */

    header {
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      color: #444444;
      margin-bottom: 34px;
    }

    button {
      width: 40px;
      height: 40px;
    }

  }

  div.ul-header {
    background: #f5f5f5;
    display: grid;
    text-align: left;
    margin-bottom: 14px;
    grid-template-columns: 10% 84.5% 5.5%;
  }
    strong {
      color: #444444;
      font-size: 16px;
      text-align: left;
      margin-left: 10px;
    }
  }

  ul {
    /* background: #ffffff; */
    li {
      display: grid;
      text-align: left;
      height: 90%;
      margin-bottom: 20px;
      background: blue;
      background: #ffffff;
      line-height: 57px;
      grid-template-columns: 10% 84.5% 5.5%;
      h1 {
        color: #666666;
      font-size: 16px;
      margin-left: 10px;
      }
    }
  }
  `;

export const Problema = styled.li`
  display: grid;
  text-align: left;
  height: 90%;
  margin-bottom: 20px;
  background: blue;
  background: #ffffff;
  line-height: 57px;
  grid-template-columns: 10% 84.5% 5.5%;

  h1 {
    color: #666666;
    font-size: 16px;
    /* color: #ffffff; */
    margin-left: 10px;
  }
`;
