import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={css.notificationMsg}>{message}</p>
);

export default Notification;
