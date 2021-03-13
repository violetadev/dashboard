import theme from '@styles/theme';
import Basic from '@layouts/Basic';
import Content from '@layouts/Content';
import React, { useEffect, useState } from 'react';
import Wrapper from '@layouts/Wrapper';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  setUserTopics,
  setUserName,
} from '../../features/userSettings/userSettings.reducer';
import Tag from '../../components/tag';

const CheckboxInput = styled(Field)`
  display: none;
`;

interface TopicsInterface {
  world: boolean;
  science: boolean;
  tech: boolean;
  business: boolean;
  lifestyle: boolean;
  culture: boolean;
  sports: boolean;
  opinion: boolean;
}

interface FormValues {
  name: string;
  topics: TopicsInterface;
}

const Onboarding: React.FC = () => {
  // const [name, setName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState<string[] | []>([]);
  const dispatch = useDispatch();

  const sendForm = (values: FormValues) => {
    console.log(values);
  };

  const handleFirstStep = (userName: string) => {
    dispatch(setUserName(userName));
    setCurrentStep(currentStep + 1);
  };

  const handleTopicSelection = (topic: string) => {
    if ((selectedTopics as Array<string | null>).indexOf(topic) > -1) {
      const newTopicsArray = selectedTopics.filter(item => item !== topic);
      setSelectedTopics(newTopicsArray);
    } else {
      const newTopicsArray = [...selectedTopics, topic];
      setSelectedTopics(newTopicsArray);
    }
  };

  const handleRemoveTopicSelection = (topic: string) => {
    const newTopicsArray = [...selectedTopics, topic];
    setSelectedTopics(newTopicsArray);
  };

  const Button = styled.button`
    background: none;
    border: none;
    font-family: ${props => props.theme.fonts.fontFamily};
    font-weight: ${props => props.theme.fonts.fontWeight.regular};
    font-size: 1.5rem;
    text-align: right;
    letter-spacing: 0px;
    color: ${props => props.theme.colors.purpleBlue};
    opacity: 1;
  `;

  useEffect(() => {
    // console.log(name, 'name');
  }, [name]);

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    checked: Yup.array().of(Yup.string()),
  });

  const StyledTitle = styled.h1``;

  const StyledTagWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    > * {
      margin: 5px;
    }
  `;

  const StyledSubtitle = styled.h2`
    color: ${props => props.theme.colors.purpleBlue};
  `;

  const topics = [
    {
      label: 'science',
      keyword: 'science',
      color: theme.colors.green,
    },
    { label: 'tech', keyword: 'tech', color: theme.colors.pastelPink },
    { label: 'sports', keyword: 'sports', color: theme.colors.blue },
    { label: 'opinion', keyword: 'opinion', color: theme.colors.pink },
    { label: 'culture', keyword: 'culture', color: theme.colors.rose },
    { label: 'lifestyle', keyword: 'lifestyle', color: theme.colors.sand },
    { label: 'business', keyword: 'business', color: theme.colors.darkGreen },
    { label: 'world', keyword: 'world', color: theme.colors.lime },
  ];

  return (
    <Basic>
      <Wrapper>
        <Content>
          <div>
            <Formik
              initialValues={{
                name: '',
                topics: [],
              }}
              validationSchema={FormSchema}
              onSubmit={values => {
                // console.log(values, 'val');
              }}
            >
              {({
                values,
                errors,
                isValid,
                isSubmitting,
                dirty,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    if (currentStep === 1) {
                      handleFirstStep(values.name);
                    }
                    if (currentStep === 2) {
                      // console.log(selectedTopics, 'sel');
                      // dispatch(setUserName(values.name));
                      // dispatch(setUserTopics(selectedTopics));
                    }
                  }}
                >
                  {currentStep === 1 && (
                    <>
                      <StyledSubtitle>What is your name?</StyledSubtitle>
                      <Field
                        type='text'
                        name='name'
                        placeholder='What is your name?'
                      />
                      {errors.name && errors.name}
                    </>
                  )}
                  <div id='checkbox-group'>Checked</div>
                  {currentStep === 2 && (
                    <StyledTagWrapper
                      role='group'
                      aria-labelledby='checkbox-group'
                    >
                      {topics.map(topic => {
                        return (
                          <label
                            htmlFor={`checkbox-input-${topic.label}`}
                            key={`checkbox-input-${topic.label}`}
                          >
                            <Tag
                              id={`checkbox-${topic.label}`}
                              text={topic.label}
                              color={topic.color}
                              onClickHandler={() => {}}
                            />
                            <CheckboxInput
                              type='checkbox'
                              name='checked'
                              value={topic.keyword}
                              id={`checkbox-input-${topic.label}`}
                              aria-required='true'
                              onChange={(event: {
                                target: { checked: any };
                              }) => {
                                handleTopicSelection(topic.keyword);
                              }}
                            />
                          </label>
                        );
                      })}
                    </StyledTagWrapper>
                  )}
                  <Button type='submit'>Next</Button>
                </form>
              )}
            </Formik>
          </div>
        </Content>
      </Wrapper>
    </Basic>
  );
};

export default Onboarding;
