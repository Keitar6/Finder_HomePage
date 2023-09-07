import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';

const searchBarTypography = {
  ...initialTheme.typography.paragraph,
};

export const SearchBarContainer = styled.div`
  align-items: center;
  background-color: ${initialTheme.palette.white};
  border: 1px solid ${initialTheme.palette.inputGrey};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  height: 36px;
  width: 17.5rem;
`;

export const SearchBarContent = styled.div`
  align-items: center;
  background-color: ${initialTheme.palette.white};
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  height: 1.75rem;
  justify-content: start;
`;

export const Input = styled.input`
  ${searchBarTypography}
  width: 100%;
`;
export const BoldedLetter = styled.span`
  font-weight: bold;
`;
