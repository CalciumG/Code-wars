function solution(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var result = "";

  for (var i of Object.keys(roman)) {
    var count = Math.floor(num / roman[i]);
    num -= count * roman[i];
    result += i.repeat(count);
  }
  return result;
}
