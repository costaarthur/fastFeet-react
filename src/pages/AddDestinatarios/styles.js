import styled from 'styled-components';

import { Form } from '@rocketseat/unform';
import Select from 'react-select';

export const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 1350px;
  height: 100%;
`;

export const SelectForm = styled(Select)`
  width: 405px;
  height: 45px;
  padding-left: 15px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

export const PropForm = styled(Form)`
  background: #f5f5f5;
  width: 900px;
  margin: 0 auto;
  margin-top: 27px;

  div.edit-back-save {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }

    div.buttonss {
      display: flex;
      justify-content: space-between;
      width: 240px;

      button {
        color: #ffffff;
        height: 36px;
        width: 112px;
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
          color: #ffffff;
        }
      }
    }
  }
`;

export const Content = styled.div`
  /* max-width: 800px; */
  width: 900px;
  height: 400px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin: 34px auto;
  font-size: 24;

  div.email {
    /* margin: 0px 30px 16px; */
    width: 840px;
    display: flex;
    padding-top: 26px;
    width: 840px;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    /* margin: 0px 30px 9px; */

    strong {
      text-align: left;
      margin-bottom: 9px;
      color: #444444;
      z-index: 0;
      font-weight: none;
    }

    input {
      width: 840px;
      height: 45px;
      padding-left: 15px;
      margin-bottom: 9px;

      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;

      &::placeholder {
        color: #999999;
      }
    }
  }

  div.nome {
    width: 840px;
    display: flex;
    width: 840px;
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    strong {
      text-align: left;
      margin-bottom: 9px;
      color: #444444;
      z-index: 0;
      font-weight: none;
    }

    input {
      width: 840px;
      height: 45px;
      padding-left: 15px;
      margin-bottom: 9px;

      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;

      &::placeholder {
        color: #999999;
      }
    }
  }

  div.rua-num-comp {
    width: 840px;
    display: flex;
    flex-direction: row;
    margin: 0px 30px 9px;

    div.rua {
      display: flex;
      flex-direction: column;
      margin-right: 13.67px;

      strong {
        text-align: left;
        margin-bottom: 9px;
        color: #444444;
        z-index: 0;
        font-weight: none;
      }

      input {
        width: 524px;
        height: 45px;
        padding-left: 15px;

        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    div.numero {
      display: flex;
      flex-direction: column;
      margin-right: 13.67px;
      strong {
        text-align: left;
        margin-bottom: 9px;
        color: #444444;
        z-index: 0;
        font-weight: none;
      }

      input {
        width: 150px;
        height: 45px;
        padding-left: 15px;

        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    div.complemento {
      display: flex;
      flex-direction: column;
      strong {
        text-align: left;
        margin-bottom: 9px;
        color: #444444;
        z-index: 0;
        font-weight: none;
      }

      input {
        width: 140px;
        height: 45px;
        padding-left: 15px;

        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }
    }
  }

  div.cid-est-cep {
    width: 840px;
    display: flex;
    flex-direction: row;
    margin: 0px 30px 9px;

    div.cidade {
      display: flex;
      flex-direction: column;
      margin-right: 13.67px;
      strong {
        text-align: left;
        margin-bottom: 9px;
        color: #444444;
        z-index: 0;
        font-weight: none;
      }

      input {
        width: 275px;
        height: 45px;
        padding-left: 15px;

        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    div.estado {
      display: flex;
      flex-direction: column;
      margin-right: 13.67px;
      strong {
        text-align: left;
        margin-bottom: 9px;
        color: #444444;
        z-index: 0;
        font-weight: none;
      }

      input {
        width: 270px;
        height: 45px;
        padding-left: 15px;

        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    div.cep {
      display: flex;
      flex-direction: column;
      strong {
        text-align: left;
        margin-bottom: 9px;
        color: #444444;
        z-index: 0;
        font-weight: none;
      }

      input {
        width: 270px;
        height: 45px;
        padding-left: 15px;

        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }
    }
  }
`;
