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

export const Container = styled.div`
  background-color: ${initialTheme.palette.light};
  border: 1px solid ${initialTheme.palette.inputGrey};
  border-radius: 6px;

  div:first-child {
    border-radius: 6px 6px 0 0;
  }
  div:last-child {
    border-radius: 0 0 6px 6px;
    border-bottom: transparent;
  }
`;

export const Bell = styled.div`
  z-index: 10;
`;
