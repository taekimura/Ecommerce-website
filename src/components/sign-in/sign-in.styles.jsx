import styled from 'styled-components';

export const SignInContainer = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  width: 380px;
  margin-top:90px;
  display: flex;
  flex-direction: column;
  background-color:white;

  @media screen and (max-width: 520px) {
    width: 90%;
  }
  @media screen and (min-width: 521px) and (max-width: 800px) {
    width: 80%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 16px;
  }
  }
`;