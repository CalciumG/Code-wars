// get just the domain name from a url

const domainName = (url) => {
  let domain = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];

  return domain;
};
