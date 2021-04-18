import styled from 'styled-components';

export const FlexLine = styled.div`
  display: flex;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexCenter)`
  flex-direction: column;
`;
