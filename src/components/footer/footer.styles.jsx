import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    font-family: 'Julius Sans One', sans-serif;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    background-color:white;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const OptionLink = styled(Link)`
    padding: 0px 50px 0px 0px;
    cursor: pointer;
`;