import styled from 'styled-components';

import Modal from 'react-modal';

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;

  /* height: 110px;
  display: flex;
  flex-direction: column; */
  /* background: #fffb10; */
`;

export const ThreeDots = styled.button`
  position: absolute;
  top: 17px;
  right: 17px;
  height: 30px;
  border: none;
  background-color: #ffffff;
`;

export const OptionList = styled.div`
  background: #ffffff;
  position: absolute;
  z-index: 1;
  height: 90px;
  width: 150px;
  left: calc(50% - 70px);
  top: 40px;
  /* padding: 5px; */
  box-shadow: 0px 0px 2px #00000026;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    left: calc(50% - 1px);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #ffffff;
  }
  /*position: relative;
  flex-direction: column;

  display: block;
  height: 100px;
  display: ${props => (props.visible ? 'block' : 'none')}; */
`;

export const Option = styled.div`
  margin-top: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  }
  button {
    font-size: 14px;
    line-height: 18px;
    border: none;
    color: #999999;
    background-color: #ffffff;

    margin: 11px 0px;

    text-align: left;

    svg {
      margin-right: 5px;
      align-self: left;
    }

    & + button {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    z-index: 2;
    /* margin-top: 10px; */
    /* padding-top: 10px; */
  }
`;

export const EncOptModal = styled(Modal)`
  position: absolute;

  background: #ffffff;
  width: 450px;
  height: 353px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  /* display: inline-block;
  vertical-align: middle; */

  div.modal-square {
    width: 450px;
    height: 353px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;

    align-self: center;

    div.info-enc {
      margin-bottom: 21px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 12px;

      strong {
        color: #444444;
        font-size: 14px;
        font-weight: bold;
        /* margin-bottom: 4px; */
        /* margin-top: 25px; */
      }
      h5 {
        color: #666666;
        font-size: 16px;
        margin-bottom: 4px;
      }
    }

    div.datas {
      margin-bottom: 21px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 12px;

      display: flex;
      flex-direction: column;

      strong {
        color: #444444;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
        /* margin-top: 21px; */
      }
      h4 {
        color: #666666;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        margin-bottom: 4px;
      }

      h5 {
        color: #666666;
        font-size: 16px;
      }
    }

    div.sign-group {
      display: flex;
      flex-direction: column;

      strong {
        color: #444444;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
        /* margin-top: 21px; */
      }

      & + strong {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 11;
      }

      img {
        width: 234px;
        height: 36px;
        align-self: center;
        margin-top: 23px;
      }
    }
  }
`;
