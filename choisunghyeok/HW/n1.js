
function solution(n) {
    for (let i = 1; i <= n; i++) {
        let space = ' '.repeat(n - i);        
        let star = '*'.repeat(2 * i - 1);   
        console.log(space + star);
    }
}

solution(3);
solution(5);
