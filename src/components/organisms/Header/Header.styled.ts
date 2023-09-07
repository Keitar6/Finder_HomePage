import styled from 'styled-components';
import { PaletteType } from '../../../theme/theme.types';

export const HeaderWrapper = styled.div<{ palette: PaletteType }>`
  background-color: ${({ palette }) => palette.light};
  background: linear-gradient(
    180deg,
    ${({ palette }) => palette.light} 0%,
    ${({ palette }) => palette.blueLight} 100%
  );
  margin-bottom: 50px;
`;
export const HeaderNavBar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 16px;
`;

export const HeaderBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5rem 0px;
`;

export const Logo = styled.img`
  height: 64px;
`;
export const LogoAndHambuergerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;
export const SearchAndButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Banner = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  max-width: 50rem;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
