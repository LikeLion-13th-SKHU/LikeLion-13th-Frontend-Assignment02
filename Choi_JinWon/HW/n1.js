function solution(n) {
    let star = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n-i; j++) {
            star += ' ';
        }
        for (let l = 1; l <= (i*2)-1; l++) {
            star += '*';
        }
        star += '\n';
    }
    
    console.log(star);
}

solution(3);
solution(5);