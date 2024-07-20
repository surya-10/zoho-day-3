function mostFreqElement(arr, k){
    let obj = {};
    for(let val of arr){
        obj[val]=(obj[val] || 0) + 1;
    }
    let counts = Object.entries(obj)
    let result =  counts.filter(([key, count])=>count>=k).map(([key, count])=>Number(key))
    return result;
}
console.log(mostFreqElement([1, 1, 1, 2,2, 3], 2));