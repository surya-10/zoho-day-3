function reversePolination(arr){
    let stack = [];
    let operators={
        "+":(a, b)=>a+b,
        "-":(a, b)=>a-b,
        "*":(a, b)=>a*b,
        "/":(a, b)=>Math.trunc(a/b)
    }
    for(let key of arr){
        if(operators[key]){
            let b = stack.pop();
            let a = stack.pop();
            stack.push(operators[key](a, b))
        }
        else{
            stack.push(Number(key));
        }
    }
    return stack;
}

console.log(reversePolination(["2", "1", "+", "3", "*"]))
console.log(reversePolination(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))