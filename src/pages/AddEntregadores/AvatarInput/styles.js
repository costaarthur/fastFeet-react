import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 24px;

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
    }

    input {
      display: none;
    }
  }
  button.circle {
    background-color: #fff;
    border: 1px dashed #dddddd;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    /* -moz-border-radius: 50%;
    -webkit-border-radius: 50%; */
    margin-top: 28px;

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
