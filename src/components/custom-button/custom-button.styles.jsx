import styled, { css } from 'styled-components';
import { SpinnerContainer } from '../with-spinner/with-spinner.styles';

const buttonStyles = css`
  background-color: #766456;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: #766456;
    border: 1px solid #766456;
  }
  align-item: center;
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #766456;
  border: 1px solid #766456;
  &:hover {
    background-color: #766456;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
  margin: 6px;
`;
