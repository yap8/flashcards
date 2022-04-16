const mergeClasses = (classesObj) => {
  const classesStr = Object.values(classesObj).reduce((acc, cur) => `${acc} ${cur}`)

  console.log(classesStr)

  return classesStr
}

export default mergeClasses
