import propTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../utils/theme';

const Text = styled.h3`
  text-align: center;
  color: ${theme.colors.light['dark-gray']}
`;

const Notification = ({ message }) => {
  return (
    <Text>{message}</Text>
  );
};

export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired
};