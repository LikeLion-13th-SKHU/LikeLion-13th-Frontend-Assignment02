function solution(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
  
      // 공백 출력 (n - i 개)
      for (let j = 1; j <= n - i; j++) {
        line += ' ';
      }
  
      // 별 출력 (2*i - 1 개)
      for (let k = 1; k <= 2 * i - 1; k++) {
        line += '*';
      }
  
      console.log(line)
    }
  }
  
  solution(3);
  solution(5);