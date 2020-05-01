import styled from 'styled-components';
// //
export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 1350px;
`;

export const CadastroButton = styled.button`
  color: #ffffff;
  height: 36px;
  width: 142px;
  border-radius: 4px;
  background: #7d40e7;

  display: flex;
  align-items: row;

  svg {
    align-self: center;
    margin-right: 7px;
    margin-left: 21px;
  }

  h3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    justify-self: center;
    margin-top: 4px;
  }
`;

export const Content = styled.div`
    min-width: 1200px;
    background: #f5f5f5;
    margin: 34px auto;

    header {
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      color: #444444;
      margin-bottom: 34px;
    }

    div.find-cadastro {
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;

    div.search-input {
      width: 237px;
      height: 36px;
      display: flex;
      flex-direction: row;
      /* margin-bottom: 22px; */
      border-radius: 4px;
      border: 1px solid #dddddd;

      div {
        background: #ffffff;
        width: 40px;

        svg {
          width: 16px;
          height: 16px;
          margin: 10px 0;
          color: #999999;
        }
      }

      input {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: none;
        width: 197px;
      }
    }

    button.filter {
      color: #ffffff;
      height: 36px;
      width: 142px;
      border-radius: 4px;
      background: #7d40e7;
      align-items: center;
      display: flex;
      flex-direction: row;

      position: relative;
      right: 330px;

      svg {
        align-self: center;
        margin-right: 7px;
        margin-left: 32px;
        /* height: 40px; */
      }

      h3 {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        justify-content: center;
        justify-self: center;
        margin-top: 4px;
      }
    }
  }

  div.filter-error {
    align-content: left;
    text-align: left;
    margin-top: 4px;
    margin-bottom: 22px;
    span {
      color: #de3b3b;
      font-size: 14px;
      margin-left: 10px;
    }
  }

  div.ul-header {
    background: #f5f5f5;
    display: grid;
    text-align: left;
    margin-bottom: 14px;
    grid-template-columns: 10% 22.5% 62% 5.5%;
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
      grid-template-columns: 10% 22.5% 62% 5.5%;


      h1 {
        color: #666666;
        font-size: 16px;
        margin-left: 10px;
      }
    }

  `;

export const Destinatario = styled.li`
  display: grid;
  text-align: left;
  height: 90%;
  margin-bottom: 20px;
  background: blue;
  background: #ffffff;
  line-height: 57px;
  grid-template-columns: 20% 22.5% 26% 26% 5.5%;
  h1 {
    color: #666666;
    font-size: 16px;
    /* color: #ffffff; */
    margin-left: 10px;
  }
`;

export const Pagination = styled.div`
  margin-top: 40px;

  button {
    border-style: none;
    background-color: #7d40e7;
    color: #ffffff;
  }

  input {
    position: relative;
    top: -6px;
    width: 24px;
    height: 28px;
    text-align: center;
    margin: 0 10px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    background: #ffffff 0% 0% no-repeat padding-box;
    color: #666666;
    font-size: 15px;
    font-weight: bold;
  }
`;
