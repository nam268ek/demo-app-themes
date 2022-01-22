import { Loader } from 'features/Register/Register.styles';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const toastSuccess = (message, theme, timeOut) => {
  toast.configure();
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: theme || 'colored',
    autoClose: timeOut || 3000,
  });
};

const toastError = (message, theme, timeOut) => {
  toast.configure();
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: theme || 'colored',
    autoClose: timeOut || 3000,
  });
};

const toastWarning = (message, theme, timeOut) => {
  toast.configure();
  toast.warn(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: theme || 'colored',
    autoClose: timeOut || 3000,
  });
};

const toastInfo = (message, theme, timeOut) => {
  toast.configure();
  toast.info(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: theme || 'colored',
    autoClose: timeOut,
  });
};

const customMessage = (message, type, theme, timeOut) => {
  toast.configure();
  toast[type](message, {
    position: toast.POSITION.TOP_CENTER,
    theme: theme || 'colored',
    autoClose: timeOut || 3000,
  });
};

const toastLoadingSuccess = (message, timeOut) => {
  toast.configure();
  const id = toast.info('Please wait...', {
    position: toast.POSITION.TOP_CENTER,
    style: { backgroundColor: '#f8f8f8', fontWeight: '500' },
    autoClose: false,
    icon: <Loader />,
  });
  setTimeout(() => {
    toast.update(id, {
      position: toast.POSITION.TOP_CENTER,
      type: toast.TYPE.SUCCESS,
      icon: <BsFillCheckCircleFill size={25} />,
      render: message,
      autoClose: timeOut || 3000,
      style: {
        color: '#fff',
        backgroundColor: '#07bc0c',
        fontWeight: '500',
      },
    });
  }, 1500);
};

const toastLoadingError = (message, timeOut) => {
  toast.configure();
  const id = toast.info('Please wait...', {
    position: toast.POSITION.TOP_CENTER,
    style: { backgroundColor: '#f8f8f8', fontWeight: '500' },
    autoClose: false,
    icon: <Loader />,
  });
  setTimeout(() => {
    return toast.update(id, {
      position: toast.POSITION.TOP_CENTER,
      type: toast.TYPE.ERROR,
      icon: <FaTimesCircle size={25} />,
      render: message,
      autoClose: timeOut || 3000,
      style: {
        color: '#fff',
        backgroundColor: '#e74c3c',
        fontWeight: '500',
      },
    });
  }, 1500);
};

const ToastConfig = {
  toastSuccess,
  toastError,
  toastWarning,
  toastInfo,
  customMessage,
  toastLoadingSuccess,
  toastLoadingError,
};
export default ToastConfig;
