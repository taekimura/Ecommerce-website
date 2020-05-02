import React from 'react';
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';

import {
    AboutContainer,
    DaiContainer,
  } from './about.styles';
  

const AboutPage = () => {
    return(
    <DaiContainer>
    <AboutContainer>
        <About/>
    </AboutContainer>
    <Footer/>
    </DaiContainer>) };

export default AboutPage;