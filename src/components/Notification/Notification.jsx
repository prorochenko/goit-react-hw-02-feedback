import PropTypes from 'prop-types';
// import css from './Notification.module.css';
// className={css.notificationMsg}
const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
