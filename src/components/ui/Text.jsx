import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ColorType, palette, Size } from './theme';

const cssBySize = {
  x05: css`
    font-size: 0.75em;
  `,
  x1: css`
    font-size: 1em;
  `,
  x2: css`
    font-size: 1.25em;
  `,
  x3: css`
    font-size: 1.5em;
  `,
};

const Text = styled.p`
  ${({ size }) => (size ? cssBySize[size] : cssBySize.x1)};
  color: ${({ colorType }) => (colorType ? palette.text[colorType] : palette.text[ColorType.primary])};
`;

export const BoldInnerText = styled(Text.withComponent('span'))`
  font-weight: bold;
`;

Text.propTypes = {
  size: PropTypes.oneOf(Object.values(Size)),
  colorType: PropTypes.oneOf(Object.values(ColorType)),
};

Text.defaultProps = {
  size: Size.x1,
  colorType: ColorType.primary,
};

export default Text;
