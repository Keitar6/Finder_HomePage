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
        <Styled.BaseRow>
          <Icon name={Countries[0]} />
          {Countries[0]}
        </Styled.BaseRow>
        <Icon name='arrowDown' color='text' size={20} />
      </Styled.BaseContainer>

      {isDropdownOpen ? (
        <Styled.Wrapper>
          {Countries.map((country) => (
            <Styled.Row key={country}>
              <Icon color='iconInputGrey' size={24} name={country} />
              <Styled.CountryItem>{country}</Styled.CountryItem>
            </Styled.Row>
          ))}
        </Styled.Wrapper>
      ) : null}
    </Styled.DropdownBox>
  );
};
export default CountriesDropdown;
