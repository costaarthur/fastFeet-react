import styled from 'styled-components';

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
  height: 120px;
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
