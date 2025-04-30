//n3. 100점은 A+, 90점 이상은 A, 80점 이상은 B, 70점 이상은 C, 60점 이상은 D, 그 이외에 점수는 F를 출력하는 solution 함수를 완성해라. (n은 받은 점수)
function solution(n) {
    if (n === 100) {
        return "A+"; //100점은 A+, 
    } else if (n >= 90) {
        return "A";  //90점 이상은 A,
    } else if (n >= 80) {
        return "B";  // 80점 이상은 B, 
    } else if (n >= 70) {
        return "C";  //70점 이상은 C,
    } else if (n >= 60) {
        return "D";   //60점 이상은 D,
    } else {
        return "F";   //그 이외에 점수는 F
    }
}

console.log(solution(13));
console.log(solution(24));
console.log(solution(48));
console.log(solution(62));
console.log(solution(73));
console.log(solution(33));
console.log(solution(83));
console.log(solution(93));
console.log(solution(70));
console.log(solution(80));
console.log(solution(90));
console.log(solution(100));