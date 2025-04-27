function solution(a, b) {
    function add(a, b){
        return a+b;
    }

    function sub(a, b){
        return a-b;
    }

    function div(a, b){
        return a*b;
    }

    function mul(a, b){
        return a/b;
    }
    
    console.log('덧셈:', add(a, b));
    console.log('뺄셈:', sub(a, b));
    console.log('나눗셈:', mul(a, b));
    console.log('곱셈:', div(a, b));
}

solution(1, 2);