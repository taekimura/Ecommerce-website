import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    font-family: 'Julius Sans One', sans-serif;
    height: 50px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1;
    justify-content: space-between;
    margin-bottom: 0px;
    margin: 0;
    background-color:white;
    @media screen and (max-width: 800px) {
    width: 100%;
    height: 60px;
    margin: unset;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    padding: 17px 0 0 20px;
    @media screen and (max-width: 800px) {
        left: 1rem;
        top: 0;
        width: 50px;
        height: 100%;
      }
    @media screen and (max-width: 400px) {
        left: 0rem;
        padding: 17px 0 0 5px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 800px) {
        width: 100%;
        padding-right: 0px;
      }
`;

export const OptionLink = styled(Link)`
    padding: 0px 15px;
    cursor: pointer;
    &:hover {
    color: #9F5752;
    }
    @media screen and (max-width: 400px) {
    font-size: 15px;
    }
    @media screen and (min-width: 401px) and (max-width: 800px) {
    font-size: 16px;
    }
`;