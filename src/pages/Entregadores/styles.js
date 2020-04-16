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

    div.find-cadastro {
      background: #f5f5f5;
      display: flex;
      justify-content: space-between;

      input {
        background: #ffffff 0% 0% no-repeat padding-box;
        width: 237px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        margin-bottom: 22px;
        padding-left: 8px;
      }


    }
  }

  div.ul-header {
    background: #f5f5f5;
    display: grid;
    /* display: flex; */
    /* flex-direction: row; */
    text-align: left;
    grid-template-columns: 20% 22.5% 26% 26% 5.5%;
    margin-bottom: 14px;
  }
    strong {
      color: #444444;
      font-size: 16px;
      text-align: left;
      margin-left: 10px;
    }
  }
  `;

export const Entregador = styled.li`
  display: grid;
  text-align: left;
  grid-template-columns: 20% 22.5% 26% 26% 5.5%;
  height: 90%;
  margin-bottom: 20px;
  background: blue;
  background: #ffffff;
  line-height: 57px;

  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: #ffffff;
    margin-left: 10px;
    align-self: center;
  }

  h1 {
    color: #666666;
    font-size: 16px;
    /* color: #ffffff; */
    margin-left: 10px;
  }
`;
