
// n5. solution 함수 내부에 각각 사칙연산을 하는 add, sub, div, mul 함수를 만들어라.
// solution 함수는 매개변수를 2개 받아 4개의 사칙연산 함수를 각각 호출하여 결과를 return 한다. 
//return 된 값을 콘솔에 출력해라.

function solution(a, b) {
    //solution 함수 내부에 각각 사칙연산을 하는 add, sub, div, mul 함수를 만들어라
        function add(x, y) {
            return x + y;
        }
    
    
        function sub(x, y) {
            return x - y;
        }
    
        function mul(x, y) {
            return x * y;
        }
    
    
        function div(x, y) {
            if (y === 0) {
                return "Error";
            }
            return x / y;
        }
    
        // solution 함수는 매개변수를 2개 받아 4개의 사칙연산 함수를 각각 호출하여 결과를 return 한다.
        const add = add(a, b);
        const sub = sub(a, b);
        const mul= mul(a, b);
        const div = div(a, b);
    
    //return 된 값을 콘솔에 출력해라.
        console.log("Add: " + add);
        console.log("Sub: " + sub);
        console.log("Mul: " + mul);
        console.log("Div: " + div);
    }
    solution(1,2);