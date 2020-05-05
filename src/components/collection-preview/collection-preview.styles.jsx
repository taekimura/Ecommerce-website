import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  display: flex;
  flex-direction: column;
  margin : 0 20px 0 20px;
  @media screen and (max-width: 800px) {
    margin : 5;
  }
  @media screen and (max-width: 450px) {
    margin : 0;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 20px;
  margin-top:40px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3px;
  }
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4px;
  }
`;