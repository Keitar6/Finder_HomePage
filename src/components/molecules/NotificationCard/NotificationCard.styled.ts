import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';

const typography = {
  ...initialTheme.typography.smallParagraph,
};
export const NotificationCardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid transparent;
  gap: 1.5rem;
  padding: 0.75rem 2.5rem 0.75rem 1.25rem;
  border-bottom-color: ${initialTheme.palette.inputGrey};
  min-width: 400px;
  background-color: transparent;

  cursor: pointer;

  :hover {
    background-color: ${initialTheme.palette.notificationGreyHover};
  }
`;

export const Texts = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  gap: 0.3rem;
  max-width: 255px;
`;
export const RemoveButtonWrapper = styled.div`
  position: absolute;
  right: 1rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
`;
export const Dummy = styled.div`
  width: 20px;
`;
export const UndoButton = styled.div`
  color: ${initialTheme.palette.blueDark};
  text-decoration: underline;
  cursor: default;
  ${typography}
`;
