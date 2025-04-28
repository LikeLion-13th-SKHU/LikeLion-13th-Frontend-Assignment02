
/*n1. n의 개수만큼 피라미드 층을 만들어 출력해라 */
function solution(n) {
    for(let i=1;i<=n;i++){
        let spaces=' '.repeat(n - i);
        let stars='*'.repeat(2*i-1);
        console.log(spaces + stars);
    }
}
solution(3);
solution(5);