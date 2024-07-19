function largestSum(arr){
    if(arr.length==0) return 0;
    let sumArr = new Array(arr.length);
    sumArr[0]=arr[0];
    let maxSum = arr[0];
    for(let i=1; i<arr.length; i++){
        sumArr[i]=Math.max(arr[i], sumArr[i-1]+arr[i]);
        maxSum = Math.max(maxSum, sumArr[i]);

    }
    return maxSum;
}
let arr =[4, -1, 5, 7, 8];
console.log(largestSum(arr))

