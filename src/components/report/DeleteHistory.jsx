import React from 'react';
import styled from 'styled-components';
import { ColorType, palette, Size } from '../ui/theme';
import TextDefault, { BoldInnerText } from '../ui/Text';
import useHistory from './useHistory';

const Select = styled.select`
  width: 100%;
  color: ${palette.text[ColorType.secondary]};
`;

const Option = styled.option`
  padding: 3px 8px;
`;

const Notification = styled(TextDefault)`
  padding: 10px 0;
`;

const DeleteHistory = () => {
  const { history: list } = useHistory();

  return (
    <>
      <Select multiple>
        {list.map((item) => (
          <Option key={item.id}>{item.title}</Option>
        ))}
      </Select>
      <Notification size={Size.x05}>
        Please type the word &apos;Delete&apos; to remove the
        <BoldInnerText> Executive metrics </BoldInnerText>
        report and its associated history
      </Notification>
      <input type="text" />
    </>
  );
};

export default DeleteHistory;
