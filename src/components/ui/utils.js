import { css } from 'styled-components';

export const centerizeCSS = css`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const fadeInMixin = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  opacity: 0;
  animation-duration: ${({ duration = 200 }) => `${duration}ms`};
  animation-name: fadeIn;
  animation-delay: ${({ delay = 0 }) => `${delay}ms`};
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  animation-fill-mode: ${({ mode = 'forwards' }) => mode};
  animation-direction: ${({ direction = 'normal' }) => direction};
`;
