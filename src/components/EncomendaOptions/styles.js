import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  /* height: 110px;
  display: flex;
  flex-direction: column; */
  /* background: #fffb10; */
`;

export const ThreeDots = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  padding-top: 7px;
`;

export const OptionList = styled.div`
  background: #21ff53;
  position: absolute;
  width: 120px;
  left: calc(50% - 70px);
  top: calc(100% + 1px);
  padding: 5px;
  box-shadow: 0px 0px 2px #00000026;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #21ff53;
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
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
