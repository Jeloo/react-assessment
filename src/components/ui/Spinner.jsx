import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ColorType, palette, Size } from './theme';

function getSizes(size = Size.x1) {
  switch (size) {
    case Size.x05:
      return 16;
    case Size.x1:
      return 32;
    case Size.x2:
      return 48;
    case Size.x3:
      return 64;
    default:
      return 32;
  }
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerElement = styled.div`
  display: block;
  position: relative;
  width: ${({ size }) => getSizes(size)}px;
  height: ${({ size }) => getSizes(size)}px;
  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size = Size.x1 }) => getSizes(size) - getSizes(size) / 5}px;
    height: ${({ size }) => getSizes(size) - getSizes(size) / 5}px;
    margin: ${({ size }) => getSizes(size) / 10}px;
    border: ${({ size }) => getSizes(size) / 10}px solid
      ${palette.border[ColorType.primary]};
    border-radius: 50%;
    animation: ${rotate360} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${palette.border.primary} transparent transparent transparent;
  }
  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Spinner = ({ size }) => (
  <SpinnerElement size={size}>
    <div />
    <div />
    <div />
    <div />
  </SpinnerElement>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(Object.values(Size)),
};

Spinner.defaultProps = {
  size: Size.x1,
};

export default Spinner;
