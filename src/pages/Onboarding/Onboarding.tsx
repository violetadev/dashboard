import Basic from '@layouts/Basic';
import React, { useState } from 'react';
import Wrapper from '@layouts/Wrapper';
import styled from 'styled-components';
import OnboardingForm from './Form/Form';

const StyledWrapper = styled(Wrapper)`
  display: flex;
  margin: 20px;
`;

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const isLastStep = currentStep === 3;

  const updateStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <Basic>
      <StyledWrapper>
        {isLastStep ? (
          <div>finished</div>
        ) : (
          <OnboardingForm currentStep={currentStep} updateStep={updateStep} />
        )}
      </StyledWrapper>
    </Basic>
  );
};

export default Onboarding;
