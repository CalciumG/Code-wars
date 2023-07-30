function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let ns = 0;
  let ew = 0;

  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        ns++;
        break;
      case "s":
        ns--;
        break;
      case "e":
        ew++;
        break;
      case "w":
        ew--;
        break;
    }
  });

  return ns === 0 && ew === 0;
}
