import { useState } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import theme from '../../utils/theme';

const FormContainer = styled.form`
  margin: 1.5em 0;
  max-width: 500px;
  background-color: ${theme.colors.white};
  font-size: ${theme.fontSizes.homepage};
`;

const IconButton = styled.button`
  padding: 20px 0;
  margin-left: -70px;
  background-color: ${theme.colors.white};
  position: absolute;
  color: ${theme.colors.light['dark-gray']};
  font-weight: ${theme.fontWeights['extra-bold']};
  width: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 50px;

  &:placeholder {
    color: ${theme.colors.light['dark-gray']}
  }
`;

const SearchInput = ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const handleSearchChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        placeholder='Search for a country...'
        onChange={handleSearchChange}
        value={value}
      />
      <IconButton>
        <i className="fa-solid fa-magnifying-glass"></i>
      </IconButton>
    </FormContainer>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  handleSearch: propTypes.func.isRequired
};