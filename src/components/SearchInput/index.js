import { useState } from 'react';
import { func, object } from 'prop-types';

import styled from 'styled-components';
import { theme, devices } from '../../utils/theme';

const FormContainer = styled.form`
  margin: 1.5em 0;
  max-width: 500px;
  border-radius: 20px;
  font-size: ${theme.fontSizes.homepage};

  @media ${devices.large} {
    flex: 1 1 auto;
  }
`;

const IconButton = styled.button`
  padding: 18px 0;
  margin-left: -70px;
  background-color: ${({ theme }) => theme['background']};
  position: absolute;
  color: ${({ theme }) => theme['secondary-text']};
  font-weight: ${theme.fontWeights['extra-bold']};
  width: 20px;
  cursor: pointer;
  transition: all .5s linear;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 50px;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme['background']};
  transition: all .5s linear;
  color: ${({ theme }) => theme['secondary-text']};

  &::placeholder {
    color: ${({ theme }) => theme['secondary-text']};
  }
`;

export default function SearchInput ({ themeMode, handleSearch }) {
  const [value, setValue] = useState('');

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <FormContainer theme={themeMode} onSubmit={handleSubmit}>
      <Input
        placeholder='Search for a country...'
        onChange={handleSearchChange}
        value={value}
        theme={themeMode}
      />
      <IconButton>
        <i className="fa-solid fa-magnifying-glass"></i>
      </IconButton>
    </FormContainer>
  );
}

SearchInput.propTypes = {
  themeMode: object,
  handleSearch: func.isRequired
};