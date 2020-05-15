import React from 'react';
// import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { purchaseSuccess, purchaseFailure,clearCart } from '../../redux/cart/cart.actions';

const P_KEY=process.env.REACT_APP_API_KEY;

const StripeCheckoutButton = ({ price ,purchaseSuccess,clearCart, purchaseFailure}) => {
  const priceForStripe = price * 100;
  const publishableKey = P_KEY;
  

  const onToken = token => {
    // console.log(token);
    alert('Payment Succesful!');
    clearCart();
  };
  // const onToken = token => {
  //   axios({
  //     url: 'payment',
  //     method: 'post',
  //     data: {
  //       amount: priceForStripe,
  //       token
  //     }
  //   })
  //     .then(response => purchaseSuccess())
  //     .catch(error => {
  //       purchaseFailure()
  //       console.error(error)
  //     })
  // }

  return (
    <StripeCheckout
      label='Pay Now 💳'
      name='SOZAI. Ltd.'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  purchaseSuccess: () => dispatch(purchaseSuccess()),
  purchaseFailure: () => dispatch(purchaseFailure()),
  clearCart: () => dispatch(clearCart())
})

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton)