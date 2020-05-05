import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
    EmptyCartcontainer,
    EmptyCartText,
  } from './empty-cart.styles';
  

const EmptyCart = ({ history }) => {
  return (
    <EmptyCartcontainer>
      <EmptyCartText>Your cart is empty</EmptyCartText>
      <CustomButton
        inverted
        onClick={() => {
          history.push('/shop')
        }}
      >
        Back to Shop page
      </CustomButton>
    </EmptyCartcontainer>
  )
}

export default withRouter(EmptyCart)