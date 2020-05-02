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

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.backgrounds};
  height: 25px;
  width: ${props => props.width};
  align-self: center;
  border-radius: 12px;

  svg {
    margin: 0 6px;
    color: ${props => props.colors};
  }

  h2 {
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.colors};
    text-align: center;
  }
`;

export const Content = styled.div`
  min-width: 1200px;
  background: #f5f5f5;
  margin: 34px auto;
  min-height: 900px;

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
    grid-template-columns: 4% 24% 24% 14.66% 14.66% 13.6% 5.5%;
    margin-bottom: 14px;
  }
  strong {
    color: #444444;
    font-size: 16px;
    text-align: left;
    margin-left: 10px;
  }
`;

export const Encomenda = styled.li`
  display: grid;
  text-align: left;
  grid-template-columns: 4% 24% 24% 14.66% 14.66% 14.66% 4%;
  height: 90%;
  margin-bottom: 20px;
  background: blue;
  background: #ffffff;
  line-height: 57px;

  div.name-with-pic {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: #ffffff;
      margin-right: 5px;
    }
  }

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
