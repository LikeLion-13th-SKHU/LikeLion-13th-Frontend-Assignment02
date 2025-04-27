function solution(x, y) {
  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }

  console.log(add(x, y));
  console.log(sub(x, y));
  console.log(mul(x, y));
  console.log(div(x, y));
}

solution(1, 2);
