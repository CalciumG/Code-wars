const createPhoneNumber = (numbers) => {
  let format = "(xxx) xxx-xxxx";

  numbers.forEach((n) => {
    format = format.replace("x", n);
  });

  return format;
};
