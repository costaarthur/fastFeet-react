import styled from 'styled-components';

export const Container = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: auto;

  div {
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
    }

    div {
      background: orange;
      display: flex;
      justify-content: space-between;

      input {
        background: #ffffff 0% 0% no-repeat padding-box;
        width: 237px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid #dddddd;
      }

      button {
        color: #ffffff;
        height: 36px;
        width: 142px;
        border-radius: 4px;
        background: #7d40e7 0% 0% no-repeat padding-box;
      }
    }
  }

  div.ul-header {
    background: pink;
    display: grid;
    /* display: flex; */
    /* flex-direction: row; */
    text-align: left;
    grid-template-columns: 4% 24% 24% 14.66% 14.66% 13.6% 5.5%;
    strong {
      color: #444444;
      font-size: 16px;
    }
  }

  ul {
    /* background: #ffffff; */
    li {
      /* margin-left: 25px; */
      /* height: 57px; */
      display: grid;
      /* display: flex; */
      /* flex-direction: row; */
      text-align: left;
      grid-template-columns: 4% 24% 24% 14.66% 14.66% 14.66% 4%;
      height: 90%;
      padding: 40 0px;
      margin-bottom: 20px;
      background: blue;
      background: #ffffff;
      h1 {
        color: #666666;
        font-size: 16px;
        /* color: #ffffff; */
      }
    }

    hr {
      margin-top: 10px;
      /* border: solid 1px #444444; */
      padding-bottom: 10px;
      background: #f5f5f5;
    }
  }
`;
