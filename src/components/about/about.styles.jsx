import styled from 'styled-components';

export const DaiContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  
`;

export const CheckoutItemContainer = styled.div`
  font-family: 'Bellota Text', cursive;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderImg = styled.img.attrs({
    src: 'https://i.ibb.co/F60gqL5/banner.png'
})`
margin-top: 60px;
`

export const TextContainer = styled.span`
  color:#c1bfb2;
  width: 100%;
  font-size:18px;
  text-align:center;
  margin-top: 50px
`;