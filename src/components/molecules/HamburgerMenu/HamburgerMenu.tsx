import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Links } from './HamburgerMenu.utils';
import Icon from '../../atoms/Icon/Icon';
import * as Styled from './HamburgerMenu.styled';
import Typography from '../../atoms/Typography/Typography';
import CountriesDropdown from '../CountriesDropdown/CountriesDropdown';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeStateOfTheHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Styled.HamburgerContainer onClick={changeStateOfTheHamburgerMenu}>
        <Icon name='hamburger' color='text' />
      </Styled.HamburgerContainer>
      <Drawer anchor='left' open={isOpen} onClose={changeStateOfTheHamburgerMenu}>
        <Styled.Wrapper>
          <Styled.TextWithIcon>
            <Styled.TopLink>
              <Icon name='tag' />
              <Typography color='blueDark'>Log In</Typography>
            </Styled.TopLink>
            <div onClick={changeStateOfTheHamburgerMenu}>
              <Icon color='iconInputGrey' name='remove' />
            </div>
          </Styled.TextWithIcon>

          {Links.map((link) => (
            <Styled.LinkItem key={link}>
              <div>{link}</div>
              <Icon color='iconInputGrey' name='arrow' />
            </Styled.LinkItem>
          ))}
          <Styled.DropdownContainer>
            <div>
              <Styled.DropdownItem>
                <CountriesDropdown />
              </Styled.DropdownItem>
            </div>
          </Styled.DropdownContainer>
        </Styled.Wrapper>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
