import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  display: flex;
  flex-direction: column;
  margin : 0 20px 0 30px;
  @media screen and (max-width: 800px) {
    margin : 0 20px 0 30px;
  }
  @media screen and (max-width: 450px) {
    margin : 0 10px;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 25px;
  margin: 40px auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1px;
  }
`;