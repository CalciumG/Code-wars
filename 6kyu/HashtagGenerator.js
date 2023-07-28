const generateHashtag = (str) => {
  let result =
    "#" +
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");

  return result.length > 140 || result === "#" ? false : result;
};
