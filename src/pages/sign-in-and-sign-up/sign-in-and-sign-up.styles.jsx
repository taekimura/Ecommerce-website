import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  background-color:white;

@media screen and (max-width: 800px) {
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem auto;
}
@media screen and (max-width: 450px) {
  width: 370px;
}
`;

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`;

