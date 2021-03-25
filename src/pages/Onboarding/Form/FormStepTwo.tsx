import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import Tag from '../../../components/tag';

const CheckboxInput = styled(Field)`
  display: none;
`;

const StyledTagWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  > * {
    margin: 5px;
  }
`;

const FormStepTwo: React.FC<{
  handleTopicSelection: (topic: string) => string[];
  selectedTopics: string[];
}> = ({ handleTopicSelection, selectedTopics }) => {
  const topics = [
    {
      label: 'science',
      keyword: 'science',
      color: theme.colors.green,
    },
    { label: 'tech', keyword: 'technology', color: theme.colors.pastelPink },
    { label: 'sports', keyword: 'sport', color: theme.colors.blue },
    { label: 'opinion', keyword: 'commentisfree', color: theme.colors.pink },
    { label: 'culture', keyword: 'culture', color: theme.colors.rose },
    { label: 'lifestyle', keyword: 'lifeandstyle', color: theme.colors.sand },
    { label: 'business', keyword: 'business', color: theme.colors.darkGreen },
    { label: 'world', keyword: 'world', color: theme.colors.lime },
  ];

  return (
    <StyledTagWrapper role='group' aria-labelledby='checkbox-group'>
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
              disabled={!selectedTopics.includes(topic.keyword)}
            />
            <CheckboxInput
              type='checkbox'
              name='checked'
              value={topic.keyword}
              id={`checkbox-input-${topic.label}`}
              aria-required='true'
              onChange={() => {
                handleTopicSelection(topic.keyword);
              }}
            />
          </label>
        );
      })}
    </StyledTagWrapper>
  );
};

export default FormStepTwo;
