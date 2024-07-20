// Given an array of integers nums and an integer target, return indices of the two numbers such that they
//  add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same
//  element twice.
//  You can return the answer in any order


function twoSum(arr, val){
    let ind = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j){
                let sum = arr[i]+arr[j];
                if(sum==val){
                    ind = [i, j];
                    break;
                }
            }
        }
        if(ind){
            break;
        }
    }
    return ind;
}
console.log(twoSum([2, 7, 11, 15], 9))