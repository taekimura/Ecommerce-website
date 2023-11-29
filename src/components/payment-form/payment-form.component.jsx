import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import {
  purchaseSuccess,
  purchaseFailure,
  clearCart
} from '../../redux/cart/cart.actions';
import { PaymentFormContainer, FormContainer } from './payment-form.style';
import CustomButton from '../custom-button/custom-button.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const PaymentForm = ({
  price,
  purchaseSuccess,
  purchaseFailure,
  clearCart
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setProcessingPayment] = React.useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessingPayment(true);

    try {
      const response = await fetch(
        '/.netlify/functions/create-payment-intent',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount: price * 100 })
        }
      ).then((res) => res.json());

      const clientSecret = response.paymentIntent.client_secret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest'
          }
        }
      });

      if (paymentResult.error) {
        alert(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          purchaseSuccess();
        }
      }
    } catch (error) {
      console.log(error);
      purchaseFailure();
    } finally {
      setProcessingPayment(false);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment</h2>
        <CardElement />
        <CustomButton isLoading={isProcessingPayment}>Pay Now</CustomButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  purchaseSuccess: () => dispatch(purchaseSuccess()),
  purchaseFailure: () => dispatch(purchaseFailure()),
  clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(PaymentForm);
