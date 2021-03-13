import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

const StyledSubtitle = styled.h2`
  color: ${props => props.theme.colors.purpleBlue};
`;

const StyledFormStepOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  > * {
    margin: 20px 0;
  }
`;

const FormStepOne: React.FC = () => {
  return (
    <StyledFormStepOne>
      <StyledSubtitle>What is your name?</StyledSubtitle>
      <Field type='text' name='name' placeholder='What is your name?' />
      <ErrorMessage name='name' />
    </StyledFormStepOne>
  );
};

export default FormStepOne;
