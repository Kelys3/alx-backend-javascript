const groceriesList = () => {
  const res = new Map();
  const grocery = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(grocery)) {
    res.set(key, grocery[key]);
  }
  return res;
};

export default groceriesList;
