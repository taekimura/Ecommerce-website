import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_ZYjLFheDRmo87WABiETBv6mS00v1hsaMbu';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout
            label ='Pay Now'
            name = 'Clothing Ltd.'
            billingAddress
            shippinhAddress
            image ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;