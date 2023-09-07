import { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
  transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

export const animations: { [key: string]: any } = {
  pulse: css`
    animation: ${pulse} 400ms ease;
  `,
};
