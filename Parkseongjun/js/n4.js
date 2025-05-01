function solution(a, b) {
    function add(x, y) {
      return x + y;
    }
  
    function sub(x, y) {
      return x - y;
    }
  
    function mul(x, y) {
      return x * y;
    }
  
    function div(x, y) {
      return x / y;   
    }
  
    return {
      덧셈: add(a, b),
      뺄셈: sub(a, b),
      곱셈: mul(a, b),
      나눗셈: div(a, b)
    };
  }
  
  const result = solution(10, 2);
  console.log(result);
  