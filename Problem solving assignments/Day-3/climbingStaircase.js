function stairCase(n){
    let ways = [1, 2];
    for(let i=2; i<=n; i++){
        ways[i] = ways[i-1]+ways[i-2];
    }
    return ways[n];
    
}
console.log(stairCase(6))