console.log("n4)");

function solution(x, y) {
    function add(a, b) {
        return a+b;
    }

    function sub(a, b) {
        return a-b;
    }

    function mul(a, b) {
        return a*b;
    }

    function div(a, b) {
        return a/b;
    }
console.log("덧셈 결과: "+add(x, y));
console.log("뺄셈 결과: "+sub(x, y));
console.log("곱셈 결과: "+mul(x, y));
console.log("나눗셈 결과: "+div(x, y));
}

solution(1, 2);