const arrayDiff = (a, b) => {
  let result = [];
  a.forEach((element) => {
    if (!b.includes(element)) {
      result.push(element);
    }
  });
  return result;
};
