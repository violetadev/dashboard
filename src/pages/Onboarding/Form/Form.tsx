import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  setUserTopics,
  setUserName,
} from '../../../features/userSettings/userSettings.reducer';
import FormStepTwo from './FormStepTwo';
import FormStepOne from './FormStepOne';

const Button = styled.button`
  background: none;
  border: none;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-weight: ${props => props.theme.fonts.fontWeight.regular};
  font-size: 1.5rem;
  text-align: right;
  letter-spacing: 0px;
  color: ${props => props.theme.colors.purpleBlue};
  self-align: flex-end;
  &:disabled {
    color: ${props => props.theme.colors.grey};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin: 20px;
  flex: 1;
`;

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  checked: Yup.array().of(Yup.string()).required('Required'),
});

type FormProps = {
  currentStep: number;
  updateStep: () => void;
};

const Form: React.FC<FormProps> = ({ currentStep, updateStep }) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const dispatch = useDispatch();
  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;

  const handleFirstStep = (userName: string) => {
    dispatch(setUserName(userName));
    updateStep();
  };

  const handleTopicSelection = (topic: string) => {
    let newTopicsArray;
    if ((selectedTopics as Array<string | null>).indexOf(topic) > -1) {
      newTopicsArray = selectedTopics.filter(item => item !== topic);
    } else {
      newTopicsArray = [...selectedTopics, topic];
    }
    setSelectedTopics(newTopicsArray);
    return newTopicsArray;
  };

  const handleSubmit = (values: { name: string }) => {
    if (isFirstStep) {
      handleFirstStep(values.name);
    }
    if (isSecondStep) {
      dispatch(setUserTopics(selectedTopics));
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        topics: [],
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isValid }) => (
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(values);
          }}
        >
          {isFirstStep && <FormStepOne />}
          {isSecondStep && (
            <FormStepTwo
              handleTopicSelection={handleTopicSelection}
              selectedTopics={selectedTopics}
            />
          )}
          <Button type='submit' disabled={isValid}>
            Next
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
