import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 4rem;

  min-width: 14rem;
`;
export const QRDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 26px 8px;
  border: 1px solid ${initialTheme.palette.inputGrey};
  border-radius: 8px;
  background-color: ${initialTheme.palette.light};

  min-width: 14rem;
  position: absolute;
`;

export const QRImage = styled.img`
  width: 10rem;
`;
export const Texts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 0.3rem;
`;
