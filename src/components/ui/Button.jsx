import styled, { css } from 'styled-components';
import { ColorType, palette, Size } from './theme';
import { fadeInMixin } from './utils';

const stylesBySize = {
  x05: css`
    font-size: 0.5em;
    padding: 6px;
    border-radius: 4px;
  `,
  x1: css`
    font-size: 0.8em;
    padding: 8px;
    border-radius: 5px;
  `,
  x2: css`
    font-size: 1em;
    padding: 15px;
    border-radius: 8px;
    font-weight: bolder;
  `,
  x3: css`
    font-size: 1.2em;
    padding: 20px;
    border-radius: 10px;
    font-weight: bolder;
  `,
};

const backgroundByColorType = {
  [ColorType.primary]: palette.background.buttonPrimary,
  [ColorType.secondary]: palette.background.buttonSecondary,
  [ColorType.danger]: palette.background.buttonDanger,
};

const textColorByColorType = {
  [ColorType.primary]: palette.text[ColorType.secondary],
  [ColorType.secondary]: palette.text[ColorType.secondary],
  [ColorType.danger]: '#fff',
};

const getBorder = (colorType) => {
  if (colorType === ColorType.secondary) {
    return `1px inset ${palette.border.primary}`;
  }

  return 'none';
};

const Button = styled.button`
  ${({ size = Size.x1 }) => stylesBySize[size]};
  display: inline-block;
  background: ${({ colorType = ColorType.primary }) => backgroundByColorType[colorType]};
  border: ${({ colorType = ColorType.primary }) => getBorder(colorType)};
  color: ${({ colorType = ColorType.primary }) => textColorByColorType[colorType]};
  font-weight: bold;
  padding: 10px 14px;
  height: auto;
  outline: none;
  cursor: pointer;
  ${({ fadeIn }) => fadeIn && fadeInMixin}
`;

export default Button;
