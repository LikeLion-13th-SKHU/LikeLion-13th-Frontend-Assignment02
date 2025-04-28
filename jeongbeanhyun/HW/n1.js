function solution(n) {
    let star = '';

    for(let i =1; i<=n; i++){
        for(let j = 1; j <= n-i; j++){
            star += ' ';
        }
        for(let k = 1; k <= (2 * i) -1; k++){
            star += '*';
        }
        star += '\n';
    }
    console.log(star);
}

solution(3);
solution(5);