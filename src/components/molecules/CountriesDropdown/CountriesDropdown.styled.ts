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
  top: 3.4375rem;
  right: -9px;
  min-width: 14rem;
  box-shadow: 0 5px 10px 0 ${initialTheme.palette.iconInputGrey};
  border-radius: 10px;
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  max-width: 200px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: row;

  gap: 0.2rem;
`;

export const CountryItem = styled.div`
  display: flex;
  flex-direction: column;
`;
