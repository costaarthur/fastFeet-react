import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 24px;
  /* background: red; */
  height: 188px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 148px;
      height: 148px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      margin-top: 29px;
      /* display: none; */
    }
  }

  input {
    display: none;
  }
`;

export const InputFileButton = styled.button`
    background-color: #fff;
    border: 1px dashed #dddddd;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-top: 28px;
    z-index: -1;

    /* display: none; */
    display: ${props => (props.hidden ? 'none' : 'unset')};

    svg {
      width: 40px;
      height: 40px;
      color: #dddddd;
    }

    h6 {
      color: #dddddd;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
