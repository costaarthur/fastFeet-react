import styled from 'styled-components';
import { darken } from 'polished';

export const Page = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  top: 225px;
  left: 540px;
  width: 360px;
  height: 425px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;

  text-align: center;
  /* margin: 0 auto; */

  /* margin: auto auto; */
  img {
    height: 44px;
    width: 260px;

    margin-top: 65px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    strong {
      text-align: left;
      margin-left: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: #444444;
      opacity: 1;
      margin-top: 15px;
    }

    input {
      width: 300px;
      height: 45px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;

      /* margin-bottom: 15px; */
      align-self: center;
      padding-left: 15px;

      &::placeholder {
        color: #999999;
        text-align: left;
        font-size: 16px;
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin-left: 30px;
      margin-top: 3px;
    }

    button {
      top: 545px;
      left: 570px;
      width: 300px;
      height: 45px;

      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      margin-top: 15px;

      font-size: 16px;
      align-self: center;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#7d40e7')};
      }
    }
  }
`;
