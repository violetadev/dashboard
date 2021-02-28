import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  background: ${props => props.color};
  font-family: Noto Sans JP;
  min-width: 100px;
  max-width: fit-content;
  height: 30px;
  padding: 8px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

interface TagProps {
  color: string;
  id: string;
  onClickHandler?: (value: string) => void;
  text: string;
}
const Tag: React.FC<TagProps> = ({ id, text, color, onClickHandler }) => {
  return (
    <StyledTag
      color={color}
      onClick={onClickHandler ? () => onClickHandler(id) : undefined}
    >
      {text}
    </StyledTag>
  );
};

export default Tag;
