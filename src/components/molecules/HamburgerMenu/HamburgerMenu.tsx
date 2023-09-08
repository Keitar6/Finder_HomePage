import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Links } from './HamburgerMenu.utils';
import Icon from '../../atoms/Icon/Icon';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import initialTheme from '../../../theme/initialTheme';
import CountriesDropdown from '../CountriesDropdown/CountriesDropdown';

const typography = {
  ...initialTheme.typography.boldParagraph,
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: baseline;
  justify-content: baseline;
  max-width: 320px;
  width: 100vw;
`;

const TopLink = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

const TextWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  cursor: pointer;
`;

const LinkItem = styled(TextWithIcon)`
  cursor: pointer;
  ${typography}
  &:hover {
    color: ${initialTheme.palette.blueDark};
    text-decoration: underline;
  }
`;

const DropdownContainer = styled(TextWithIcon)`
  padding: 24px 0;
`;

const DropdownItem = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 0.2rem;
`;
const HamburgerContainer = styled.div`
  cursor: pointer;
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeStateOfTheHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerContainer onClick={changeStateOfTheHamburgerMenu}>
        <Icon name='hamburger' color='text' />
      </HamburgerContainer>
      <Drawer anchor='left' open={isOpen} onClose={changeStateOfTheHamburgerMenu}>
        <Wrapper>
          <TextWithIcon>
            <TopLink>
              <Icon name='tag' />
              <Typography color='blueDark'>Log In</Typography>
            </TopLink>
            <div onClick={changeStateOfTheHamburgerMenu}>
              <Icon color='iconInputGrey' name='remove' />
            </div>
          </TextWithIcon>

          {Links.map((link) => (
            <LinkItem key={link}>
              <div>{link}</div>
              <Icon color='iconInputGrey' name='arrow' />
            </LinkItem>
          ))}
          <DropdownContainer>
            <div>
              <DropdownItem>
                <CountriesDropdown />
              </DropdownItem>
            </div>
          </DropdownContainer>
        </Wrapper>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
