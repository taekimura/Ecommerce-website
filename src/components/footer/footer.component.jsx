import React from 'react';

import {FooterContainer, OptionsContainer, OptionLink} from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <OptionsContainer>
        <OptionLink>
        &copy;2020 developed by Tae
        </OptionLink>
        <OptionLink to="/about">
            F&amp;Q
        </OptionLink>
        <OptionLink to="/about">
            SUPPORT
        </OptionLink>    
        <OptionLink to='./about'>
            Privacy&amp;Policy
        </OptionLink>
        </OptionsContainer>
    </FooterContainer>
);

export default Footer;