const FormInput = ({ label, name, ...rest }) => {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1)

  return <>
    { label && (
      <label
        className="text-xl block text-gray-700 font-semibold mb-2"
        htmlFor={name}
      >
        { capitalize(name) }
      </label>
    )}
    <input
      className="text-xl shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      type={ name === 'password' ? 'password' : 'text' }
      name={ name }
      id={ name }
      placeholder={ capitalize(name) }
      { ...rest }
    />
  </>
}

export default FormInput
