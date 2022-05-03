import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import mergeClasses from '../../helpers/mergeClasses';

const Form = ({ children, className, ...props }) => {
  const classes = {
    base: 'w-full max-w-full md:max-w-lg m-auto bg-white shadow rounded px-4 py-4 pb-1 transition md:px-8 md:py-6 md:pb-4',
    dark: 'dark:bg-slate-800',
    inherited: className || '',
  };

  const { error, message } = useSelector((state) => state.app);

  useEffect(() => {
    if (error && message) toast.error(message);
  }, [error, message]);

  return (
    <form className={mergeClasses(classes)} {...props}>
      {children}
    </form>
  );
};

export default Form;
