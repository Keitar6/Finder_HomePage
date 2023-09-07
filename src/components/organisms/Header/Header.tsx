import Finder from '../../../assets/img/Finder.svg';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../theme/ThemeContext';
import Typography from '../../atoms/Typography/Typography';
import * as Styled from './Header.styled';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import QRDropdownItem from '../../molecules/QRDropdownItem/QRDropdownItem';
import NotificationDropdown from '../../molecules/NotificationDropdown/NotificationDropdown';

const Header = () => {
  const { palette } = useContext(ThemeContext);
  const [isQRDropdownOpen, setIsQRDropdownOpen] = useState<boolean>(false);

  const openQRDropdown = () => {
    setIsQRDropdownOpen(true);
  };
  const closeQRDropdown = () => {
    setIsQRDropdownOpen(false);
  };

  return (
    <Styled.HeaderWrapper palette={palette}>
      <Styled.HeaderNavBar>
        <Styled.LogoAndHambuergerContainer>
          <div>Hamburger Icon</div>
          <Styled.Logo src={Finder} alt='Logo Finder' />
        </Styled.LogoAndHambuergerContainer>
        <Styled.SearchAndButtonsContainer>
          <Styled.DownloadWrapper onMouseOver={openQRDropdown} onMouseOut={closeQRDropdown}>
            <Icon name='download' />
            <Typography color='blueDark' variant='boldParagraph'>
              App
            </Typography>
            {isQRDropdownOpen ? <QRDropdownItem /> : null}
          </Styled.DownloadWrapper>

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
