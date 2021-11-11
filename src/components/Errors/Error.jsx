import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

Error.defaultProps = {
  message: "",
};

function Error({ title, message }) {
  const error = `${title}: ${message}`;
  console.log("content", message);
  useEffect(() => {
    error
      ? toast.error(error, { theme: "colored" })
      : toast.error(error, { theme: "colorgreen" });
  }, [error]);

  return <>{message && <ToastContainer autoClose={6000} limit={3} />}</>;
}

export default Error;
