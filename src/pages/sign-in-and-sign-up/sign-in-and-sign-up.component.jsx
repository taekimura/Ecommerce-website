import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Footer from '../../components/footer/footer.component';

import { SignInAndSignUpContainer ,BigContainer} from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <BigContainer>
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
  <Footer/>
  </BigContainer>
);

export default SignInAndSignUpPage;