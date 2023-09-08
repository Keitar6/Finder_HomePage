import Finder from '../../../assets/img/Finder.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../../theme/ThemeContext';
import Typography from '../../atoms/Typography/Typography';
import * as Styled from './Header.styled';
import Button from '../../atoms/Button/Button';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import NotificationDropdown from '../../molecules/NotificationDropdown/NotificationDropdown';
import DownloadDropdown from '../../molecules/DownloadDropdown/DownloadDropdown';
import HamburgerMenu from '../../molecules/HamburgerMenu/HamburgerMenu';

const Header = () => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.HeaderWrapper palette={palette}>
      <Styled.HeaderNavBar>
        <Styled.LogoAndHambuergerContainer>
          <HamburgerMenu />
          <Styled.Logo src={Finder} alt='Logo Finder' />
        </Styled.LogoAndHambuergerContainer>

        <Styled.SearchAndButtonsContainer>
          <DownloadDropdown />

          <SearchBar placeholder='Search' />

          <NotificationDropdown />

          <Styled.ButtonsWrapper>
            <Button variant='ghost' style={{ fontWeight: 600 }}>
              Log in
            </Button>
            <Button variant='primary' style={{ fontWeight: 600 }}>
              Join
            </Button>
          </Styled.ButtonsWrapper>
        </Styled.SearchAndButtonsContainer>
      </Styled.HeaderNavBar>

      <Styled.HeaderBox>
        <Styled.Banner>
          <Typography style={{ textAlign: 'center' }} variant='banner'>
            Start making better money decisions right now
          </Typography>
        </Styled.Banner>
      </Styled.HeaderBox>
    </Styled.HeaderWrapper>
  );
};

export default Header;
