import { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { theme, devices } from '../../utils/theme';

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1.75rem;
  text-align: left;

  @media ${devices.large} {
    margin: 1.5rem 0;
  }
`;

const Button = styled.button`
  background-color: ${theme.colors.white};
  display: inline-flex;
  justify-content: center;
  width: 100%;
  border-radius: .5rem;
  padding: 20px 1.25rem;
  font-size: ${theme.fontSizes.homepage};
  color: black;
  cursor: pointer;

  & .icon {
    margin-left: 0.75rem;
    height: 20px;
    width: 20px;
  }
`;

const DropDown = styled.div`
  display: ${props => props.isActive  ? 'inline-block': 'none' };
  transform-origin: top left;
  position: absolute;
  left: 0;
  width: 100%;
  margin-top: .5rem;
  border-radius: .375rem;
  background-color: ${theme.colors.white};

  & .py-1 {
    padding: .875rem 0;
  }
`;

const Option = styled.span`
  display: block;
  color: black;
  padding: .5rem 1.25rem;
  font-size: ${theme.fontSizes.homepage};
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    font-weight: ${theme.fontWeights.bold};
  }
`;

export default function Filter ({ handleFilter, options }) {
  const [active, setActive] = useState(false);

  const handleClickActive = () => {
    setActive(!active);
  };

  const handleFilterCountries = (region) => {
    handleFilter(region);
    setActive(!active);
  };

  return (
    <Container>
      <div>
        <Button type='button' onClick={handleClickActive}>
          Filter by Region
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
      <DropDown isActive={active}>
        <div className='py-1'>
          {options.map(option => (
            <Option
              key={option.value}
              onClick={() => handleFilterCountries(option.value)}
            >
              {option.label}
            </Option>
          ))}
        </div>
      </DropDown>
    </Container>
  );
}

Filter.propTypes = {
  handleFilter: propTypes.func.isRequired,
  options: propTypes.array.isRequired
};