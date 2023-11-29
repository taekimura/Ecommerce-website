import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  min-width: 80%;
  height: 400px;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  margin-top: 30px;

  .StripeElement {
    margin-top: 20px;
    padding: 20px 10px !important;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 100%;
`;
