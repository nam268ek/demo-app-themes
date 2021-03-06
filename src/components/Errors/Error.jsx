import React from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

Error.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Error.defaultProps = {
  message: '',
  title: '',
};

function Error({ title, message }) {
  toast.error(`${title}: ${message}`, { theme: 'colored' });
  return <ToastContainer autoClose={3000} />;
}

export default Error;
