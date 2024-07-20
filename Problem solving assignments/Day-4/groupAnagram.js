function groupAnagram(arr){
    let obj = {}
    for(let i=0; i<arr.length; i++){
        let sortedStr=arr[i].split("").sort().join("");
        if(obj[sortedStr]){
            obj[sortedStr].push(arr[i]);
        }
        else{
            obj[sortedStr]=[arr[i]];
        }
    }
    return Object.values(obj);

}
console.log(groupAnagram( ["eat","tea","tan","ate","nat","bat"]))