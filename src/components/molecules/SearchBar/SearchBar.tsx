import { ChangeEvent, FC, useState, useEffect, useRef } from 'react';
import Icon from '../../../components/atoms/Icon/Icon';
import * as Styled from './SearchBar.styled';

type SearchBarProps = { placeholder: string };

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Styled.SearchBarContainer>
        <Styled.SearchBarContent>
          <Icon name='search' size={20} color='iconInputGrey' />
          <Styled.Input
            data-testid='SearchBarInput'
            value={searchValue}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
          />
        </Styled.SearchBarContent>
      </Styled.SearchBarContainer>
    </div>
  );
};

export default SearchBar;
