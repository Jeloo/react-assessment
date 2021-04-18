import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ColorType, palette } from '../ui/theme';
import { centerizeCSS, fadeInMixin } from '../ui/utils';
import Button from '../ui/Button';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ color }) => palette.border[color]};
  padding: 10px 15px;
  background: ${palette.background.primary};
  position: absolute;
  z-index: ${({ priority }) => priority};
  ${centerizeCSS};
  ${fadeInMixin};
`;

const ModalHeader = styled.header`
  font-weight: bold;
  padding: 10px 5px;
  border-bottom: 1px solid #f1f3f5;
`;

const ModalContent = styled.div`
  padding: 10px 5px;
`;

const ModalFooter = styled.footer`
  display: flex;
  padding: 10px 5px;
`;

const Modal = ({
  headingText = '',
  priority = 1,
  styles = {},
  children,
  buttons,
  color = ColorType.primary,
}) => (
  <ModalWrapper
    role="dialog"
    aria-modal="true"
    color={color}
    priority={priority}
    style={styles?.ModalWrapper}
  >
    {headingText && (
      <ModalHeader style={styles?.ModalHeader}>{headingText}</ModalHeader>
    )}
    <ModalContent style={styles?.ModalContent}>{children}</ModalContent>
    <ModalFooter style={styles?.ModalFooter}>
      {buttons.length > 0
        && buttons.map((btn) => (
          <Button
            key={btn.id}
            onClick={btn.onClick}
            colorType={btn.colorType}
            style={styles?.Button}
          >
            {btn.text}
          </Button>
        ))}
    </ModalFooter>
  </ModalWrapper>
);

Modal.propTypes = {
  headingText: PropTypes.string,
  priority: PropTypes.number,
  styles: PropTypes.shape({
    ModalWrapper: PropTypes.object,
    ModalHeader: PropTypes.object,
    ModalContent: PropTypes.object,
    ModalFooter: PropTypes.object,
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      colorType: ColorType,
      text: PropTypes.string,
    })
  ),
  color: PropTypes.oneOf(Object.values(ColorType)),
};

Modal.defaultProps = {
  headingText: '',
  priority: 1,
  styles: {},
  buttons: [],
  color: ColorType.primary,
};

export default Modal;
