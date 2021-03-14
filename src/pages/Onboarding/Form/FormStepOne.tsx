import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

const StyledSubtitle = styled.h2`
  align-self: center;
  color: ${props => props.theme.colors.purpleBlue};
`;

const StyledFormStepOne = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  > * {
    margin: 20px 0;
  }
  input {
    width: 100%;
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
