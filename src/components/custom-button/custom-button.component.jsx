import React from 'react';

import { ButtonSpinner, CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ isLoading, children, ...props }) => (
  <CustomButtonContainer disabled={isLoading} {...props}>
    {isLoading ? <ButtonSpinner /> : children}
  </CustomButtonContainer>
);

export default CustomButton;
