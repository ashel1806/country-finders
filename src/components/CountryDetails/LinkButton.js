import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const StyledLink = styled(Link)`
  padding: .5em .8em;
  background-color: ${({ theme }) => theme['background']};
  box-shadow: 10px 10px 5px 10px ${({ theme }) => theme['foreground']};
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme['secondary-text']};
  font-size: ${props => props.size === 'tiny' ? theme.fontSizes.homepage : '1em'};
  margin-right: 1em;
  margin-bottom: 1em;

  i {
    margin-right: .5em;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default function LinkButton({ themeMode, label, url, icon, size }) {
  return (
    <>
      <StyledLink to={url} size={size} theme={themeMode}>
        {icon && <i className="fa-solid fa-arrow-left-long"></i>}
        {label}
      </StyledLink>
    </>
  );
}

LinkButton.propTypes = {
  themeMode: propTypes.object,
  label: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  icon: propTypes.bool,
  size: propTypes.string
};