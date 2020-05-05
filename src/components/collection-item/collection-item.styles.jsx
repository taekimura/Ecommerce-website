import styled from 'styled-components';
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 80px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 45vw;
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    top: 235px;
  }
`;

export const OptionLink = styled(Link)`
  width: 80%;
  font-size:30px;
  opacity: 1;
  position: absolute;
  top: 150px;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 12%;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: 18px;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  font-size: 20px;
`;