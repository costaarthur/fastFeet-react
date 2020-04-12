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
  width: 120px;
  left: calc(50% - 70px);
  top: 40px;
  padding: 5px;
  box-shadow: 0px 0px 2px #00000026;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #ffffff;
  /*position: relative;
  flex-direction: column;

  display: block;
  height: 100px;
  display: ${props => (props.visible ? 'block' : 'none')}; */
`;

export const Option = styled.div`
  margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 18px;
    color: #999999;

    & + p {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 10px;
    padding-top: 10px;
  }
`;
