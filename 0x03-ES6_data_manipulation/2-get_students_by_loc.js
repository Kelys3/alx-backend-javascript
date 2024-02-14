const getStudentsByLocation = (students, city) => {
  const arrayObject = students.filter((funcion) => funcion.location === city);
  return arrayObject;
};

export default getStudentsByLocation;
