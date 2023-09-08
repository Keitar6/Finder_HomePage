import Icon from '../../atoms/Icon/Icon';
import * as Styled from './CountriesDropdown.styled';
import { FC, useState } from 'react';
import { CountryIcon } from '../../atoms/Icon/icon.types';
import Typography from '../../atoms/Typography/Typography';

export const Countries: CountryIcon[] = ['Australia', 'United States', 'Canada', 'United Kingdom'];

const CountriesDropdown: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const changeStateOfTheDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <Styled.DropdownBox>
      <Styled.BaseContainer onClick={changeStateOfTheDropdown}>
        <Styled.Row>
          <Icon name={Countries[0]}  />
          <Typography>{Countries[0]}</Typography>
        </Styled.Row>
        <Icon name='arrowDown' />
      </Styled.BaseContainer>

      {isDropdownOpen ? (
        <Styled.Wrapper>
          {Countries.map((country) => (
            <div key={country}>
              <Icon color='iconInputGrey' name={country} />
              <Styled.CountryItem>{country}</Styled.CountryItem>
            </div>
          ))}
        </Styled.Wrapper>
      ) : null}
    </Styled.DropdownBox>
  );
};
export default CountriesDropdown;
