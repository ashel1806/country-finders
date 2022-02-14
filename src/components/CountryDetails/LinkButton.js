import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const StyledLink = styled(Link)`
  padding: .5em .8em;
  background: ${theme.colors.white};
  box-shadow: 0 0 10px 2px #cacaca};
  display: inline-block;
  text-decoration: none;
  color: black;
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

export default function LinkButton({ label, url, icon, size }) {
  return (
    <>
      <StyledLink to={url} size={size}>
        {icon && <i className="fa-solid fa-arrow-left-long"></i>}
        {label}
      </StyledLink>
    </>
  );
}

LinkButton.propTypes = {
  label: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  icon: propTypes.bool,
  size: propTypes.string
};