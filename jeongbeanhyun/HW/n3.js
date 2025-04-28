function solution(n) {
    let result = ''

    if(n == 100){
        result = 'A+';
    }
    else if(n >= 90){
        result = 'A';
    }
    else if(n >= 80){
        result = 'B';
    }
    else if(n >= 70){
        result = 'C';
    }
    else if(n >= 60){
        result = 'D';
    }
    else{
        result = 'F';
    }

    console.log(result);
}

solution(13); // F
solution(24); // F
solution(48); // F
solution(62); // D
solution(73); // C
solution(33); // F
solution(83); // B
solution(93);  // A
solution(70);  // C
solution(80);  // B
solution(90);  // A
solution(100); // A+