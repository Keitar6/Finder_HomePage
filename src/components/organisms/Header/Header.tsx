import Finder from '../../../assets/img/Finder.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../../theme/ThemeContext';
import Typography from '../../atoms/Typography/Typography';
import * as Styled from './Header.styled';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const Header = () => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.HeaderWrapper palette={palette}>
      <Styled.HeaderNavBar>
        <Styled.LogoAndHambuergerContainer>
          <div>Hamburger Icon</div>
          <Styled.Logo src={Finder} alt='Logo Finder' />
        </Styled.LogoAndHambuergerContainer>
        <Styled.SearchAndButtonsContainer>
          <Styled.DownloadWrapper>
            <Icon name='download' />
            <Typography color='blueDark' variant='boldParagraph'>
              App
            </Typography>
          </Styled.DownloadWrapper>

          <SearchBar placeholder='Search' />
          <div>Placeholder Icon Bell </div>

          <Styled.ButtonsWrapper>
            <Button variant='ghost'>Log in</Button>
            <Button variant='primary'>Join</Button>
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
