import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ColorType, palette, Size } from '../ui/theme';
import TextDefault, { BoldInnerText } from '../ui/Text';

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

const confirmationKeyword = 'Delete';

const DeleteHistory = ({ data, children }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState([]);

  const handleSelection = (e) => {
    setSelected(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  useEffect(() => {
    setConfirmed(value === confirmationKeyword);
  }, [value]);

  const render = () => (
    <>
      <Select multiple onChange={handleSelection}>
        {data.map((item) => (
          <Option key={item.id}>{item.title}</Option>
        ))}
      </Select>
      <Notification size={Size.x05}>
        Please type the word &apos;
        {confirmationKeyword}
        &apos; to remove the
        <BoldInnerText> Executive metrics </BoldInnerText>
        report and its associated history
      </Notification>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );

  return children(render, confirmed, selected);
};

DeleteHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default DeleteHistory;
