import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  font-family: 'Julius Sans One', sans-serif;
  display: flex;
  flex-direction: column;
  margin : 0 20px 0 20px;
`;

export const TitleContainer = styled.h1`
  font-size: 20px;
  margin-top:60px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;