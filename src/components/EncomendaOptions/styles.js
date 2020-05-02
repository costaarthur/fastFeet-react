import styled from 'styled-components';

import Modal from 'react-modal';

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
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
  height: 120px;
  width: 150px;
  left: calc(50% - 70px);
  top: 40px;
  box-shadow: 0px 0px 2px #00000026;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Option = styled.div`
  margin-top: 2px;
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

    margin: 6px 0px;
    padding-top: 4px;
    text-align: left;

    svg {
      margin-right: 5px;
      align-self: left;
      position: relative;
      top: 2px;
    }

    & + button {
    border-top: 1px solid #eeeeee;
    height: 13px;
    padding: 10px 0px;
    margin-right: 10px;
    margin-bottom: 11px;
  }
`;

export const EncOptModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  width: 450px;
  height: 353px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  margin: auto auto;

  div.modal-square {
    width: 450px;
    height: 353px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;

    align-self: center;

    div.info-enc {
      margin-bottom: 12px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 12px;

      display: flex;
      flex-direction: column;

      strong {
        color: #444444;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
      }
      h5 {
        color: #666666;
        font-size: 16px;
        margin-bottom: 4px;
        font-weight: normal;
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
      }

      div.data-groups {
        display: flex;
        flex-direction: row;
        h4 {
          color: #666666;
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 4px;
          margin-right: 4px;
        }

        h5 {
          color: #666666;
          font-size: 16px;
          font-weight: normal;
        }
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
