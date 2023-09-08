import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Countries, Links } from './HamburgerMenu.utils';
import Icon from '../../atoms/Icon/Icon';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';

const Wrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: baseline;
  justify-content: baseline;
  max-width: 320px;
  width: 100vw;
`;
const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
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

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeStateOfTheHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={changeStateOfTheHamburgerMenu}>Hamburger Icon</div>
      <Drawer anchor='left' open={isOpen} onClose={changeStateOfTheHamburgerMenu}>
        <Wrapper>
          <TextWithIcon>
            <TopLink>
              <Icon name='tag' />
              <Typography color='blueDark'>Log In</Typography>
            </TopLink>
            <Icon color='iconInputGrey' name='remove' />
          </TextWithIcon>

          {Links.map((link) => (
            <TextWithIcon key={link}>
              <LinkItem>{link}</LinkItem>
              <Icon color='iconInputGrey' name='arrow' />
            </TextWithIcon>
          ))}
          <DropdownContainer>
            <div>
              {Countries.map((country) => (
                <DropdownItem key={country}>
                  <Icon color='iconInputGrey' name={country} />
                  <LinkItem>{country}</LinkItem>
                </DropdownItem>
              ))}
            </div>
          </DropdownContainer>
        </Wrapper>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
