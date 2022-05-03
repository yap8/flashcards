import mergeClasses from '../../helpers/mergeClasses';
import capitalize from '../../helpers/capitalize';

const FormInput = ({ className, label, name, ...props }) => {
  const classes = {
    base: 'text-xl appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline',
    dark: 'dark:bg-slate-700 dark:border-slate-700 dark:text-white',
    inherited: className || '',
  };

  return (
    <>
      {label && (
        <label
          className="text-xl block text-gray-700 font-semibold mb-2 dark:text-white"
          htmlFor={name}
        >
          {label === true
            ? capitalize(name === 'passwordRepeat' ? 'Repeat password' : name)
            : label}
        </label>
      )}
      <input
        className={mergeClasses(classes)}
        type={name === 'passwordRepeat' ? 'password' : name}
        name={name}
        id={name}
        placeholder={
          name === 'password' || name === 'passwordRepeat'
            ? '********'
            : capitalize(name)
        }
        {...props}
      />
    </>
  );
};

export default FormInput;
