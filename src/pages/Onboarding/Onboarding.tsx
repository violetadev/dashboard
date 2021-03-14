import Basic from '@layouts/Basic';
import React, { useState } from 'react';
import Wrapper from '@layouts/Wrapper';
import styled from 'styled-components';
import OnboardingForm from './Form/Form';
import Image from '../../assets/drawkit-transport-scene-5.svg';

const StyledWrapper = styled(Wrapper)`
  display: flex;
  margin: 20px;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  margin: 40px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-self: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    flex-flow: row wrap;
  }
`;

const StyledTitle = styled.h1`
  flex: 1 0 100%;
  margin-bottom: 45px;
  text-align: center;
`;

const StyledImage = styled.img`
  max-height: 800px;
  max-width: 100%;
  flex: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    max-width: 50%;
  }
`;

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const updateStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <Basic>
      <StyledWrapper>
        <StyledFormWrapper>
          <StyledTitle>Welcome to your Dashboard</StyledTitle>
          <StyledImage src={Image} alt='' />
          <OnboardingForm currentStep={currentStep} updateStep={updateStep} />
        </StyledFormWrapper>
      </StyledWrapper>
    </Basic>
  );
};

export default Onboarding;
