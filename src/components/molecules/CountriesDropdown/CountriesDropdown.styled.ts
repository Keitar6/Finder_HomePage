import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';

export const DropdownBox = styled.div`
  display: block;
  height: 100%;
  position: relative;
  height: auto;
  max-height: 15.625;
  max-width: 25rem;
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 3.4375rem;
  right: 0px;
  width: 200px;
  box-shadow: 0 5px 10px 0 ${initialTheme.palette.iconInputGrey};
  border-radius: 10px;
  flex-direction: column;

  div:first-child {
    border-radius: 8px 8px 0 0;
  }
  div:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  padding: 4px 8px;

  border-radius: 8px;
  border: 1px solid;
  border-color: ${initialTheme.palette.inputGrey};

  &:hover {
    border-color: ${initialTheme.palette.text};
    text-decoration: underline;
    color: ${initialTheme.palette.blueDark};
  }
`;
export const BaseRow = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: row;

  gap: 0.2rem;
`;
export const Row = styled(BaseRow)`
  &:hover {
    background-color: ${initialTheme.palette.notificationGrey};
    border-color: ${initialTheme.palette.text};
    text-decoration: underline;
    color: ${initialTheme.palette.blueDark};
  }

  padding: 4px 8px;
`;

export const CountryItem = styled.div`
  display: flex;
  flex-direction: row;
`;
