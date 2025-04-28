function solution(n1, n2) {
    function add(n1, n2){
        return n1+n2;
    }

    function sub(n1, n2){
        return n1 - n2;
    }

    function mul(n1, n2){
        return n1 * n2;
    }

    function div(n1, n2){
        return n1 / n2;
    }
    console.log("덧셈 결과:"+add(n1, n2));
    console.log("뺄셈 결과:"+sub(n1, n2));
    console.log("곱셈 결과:"+mul(n1, n2));
    console.log("나눗셈 결과:"+div(n1, n2));
}

solution(1, 2);