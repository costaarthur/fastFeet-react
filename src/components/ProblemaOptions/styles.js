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
  z-index: 11;
  height: 95px;
  width: 200px;
  left: calc(50% - 116px);
  top: 47px;
  box-shadow: 0px 0px 2px #00000026;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Option = styled.div`
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
    padding-top: 8px;
    width: 180px;
    margin: 3px 0px;
    text-align: left;

    svg {
      margin-right: 5px;
      align-self: left;
      position: relative;
      top: 2.5px;
    }

    & + button {
      border-top: 1px solid #eeeeee;
      padding-bottom: 5px;
      margin-right: 10px;
      height: 45px;
  }
`;

export const ProbOptModal = styled(Modal)`
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

  div.modal-square {
    width: 450px;
    height: 353px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 25px;

    align-self: center;

    div.info-prob {
      margin-bottom: 21px;
      padding-bottom: 12px;

      strong {
        color: #444444;
        font-size: 14px;
        font-weight: bold;
      }
      h5 {
        color: #666666;
        font-size: 16px;
        margin-bottom: 4px;
        margin-top: 8px;
      }
    }
  }
`;
