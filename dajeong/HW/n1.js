console.log("n1)")

function solution(n) {
    for (let i=0; i<n; i++) {
        let star = "";

        for (let j=0; j<n-i-1; j++) {
            star += " ";
        }

        for (let j=0; j<i*2+1; j++) {
            star += "*";
        }
        console.log(star);
    }
    console.log('\n');
}

solution(3);
solution(5);