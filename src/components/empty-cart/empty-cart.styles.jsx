import styled from 'styled-components';

export const EmptyCartcontainer = styled.div`
display: flex;
height:50vh;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const EmptyCartText = styled.div`
font-size: 24px;
color: rgb(218, 63, 36);
margin: 25px 0;

@media screen and (max-width: 1024px) {
font-size: 20px;
}
`;