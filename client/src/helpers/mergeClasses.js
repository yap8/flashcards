const mergeClasses = (classesObj) => {
  const classesStr = Object.values(classesObj).reduce((acc, cur) => `${acc} ${cur}`)

  return classesStr
}

export default mergeClasses
