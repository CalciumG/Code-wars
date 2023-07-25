const fibonacci = (function () {
  const memo = {};

  function fib(n) {
    if (n < 2) return n;
    if (memo[n]) return memo[n];

    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  return fib;
})();
