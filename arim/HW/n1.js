function solution(n) {
  for (let i = 1; i <= n; i++) {
    const space = ' '.repeat(n - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(space + stars);
  }
}

solution(3);
solution(5);
