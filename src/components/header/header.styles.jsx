import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    font-family: 'Julius Sans One', sans-serif;
    height: 50px;
    width: 100%;
    display: flex;
    position:fixed;
    z-index:99;
    justify-content: space-between;
    margin-bottom: 0px;
    margin-top: 0;
    background-color:white;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    padding: 17px 0 0 20px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 0px 15px;
    cursor: pointer;
`;