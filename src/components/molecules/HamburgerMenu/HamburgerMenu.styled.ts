import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';

const typography = {
  ...initialTheme.typography.boldParagraph,
};

export const Wrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: baseline;
  justify-content: baseline;
  max-width: 320px;
  width: 100vw;
`;

export const TopLink = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

export const TextWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  cursor: pointer;
`;

export const LinkItem = styled(TextWithIcon)`
  cursor: pointer;
  ${typography}
  &:hover {
    color: ${initialTheme.palette.blueDark};
    text-decoration: underline;
  }
`;

export const DropdownContainer = styled(TextWithIcon)`
  padding: 24px 0;
`;

export const DropdownItem = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 0.2rem;
`;
export const HamburgerContainer = styled.div`
  cursor: pointer;
`;
