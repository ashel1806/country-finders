import propTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

const Text = styled.h3`
  text-align: center;
  color: ${theme.colors.light['dark-gray']}
`;

export default function Notification ({ message }) {
  return (
    <Text>{message}</Text>
  );
}

Notification.propTypes = {
  message: propTypes.string.isRequired
};