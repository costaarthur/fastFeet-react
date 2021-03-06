import styled from 'styled-components';

import { Form } from '@rocketseat/unform';
import Select from 'react-select';
// //
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
  height: 224px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin: 34px auto;
  font-size: 24;

  div.dest-ent {
    width: 840px;
    display: flex;
    justify-content: space-between;
    margin: 0px 30px 16px;
    padding-top: 26px;

    div {
      strong {
        position: relative;
        left: -160px;
        text-align: left;
        margin-bottom: 90px;
        color: #444444;
        font-weight: bold;
      }
    }
  }

  div.prod {
    width: 840px;
    display: flex;
    flex-direction: column;
    margin: 25px 30px;

    strong {
      text-align: left;
      margin-bottom: 9px;
      color: #444444;
      z-index: 0;
      font-weight: bold;
    }

    input {
      width: 839px;
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
`;
