function solution(a, b) {
 
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
            return "Error: Division by zero";
        }
        return x / y;
    }


    const additionResult = add(a, b);
    const subtractionResult = sub(a, b);
    const multiplicationResult = mul(a, b);
    const divisionResult = div(a, b);


    console.log("Addition: " + additionResult);
    console.log("Subtraction: " + subtractionResult);
    console.log("Multiplication: " + multiplicationResult);
    console.log("Division: " + divisionResult);
}
