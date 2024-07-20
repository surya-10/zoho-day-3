function longestPalin(str) {
    if (!str) return "";
    let longVal = "";
    for (let i=0; i<str.length; i++) {
        let result = findPalin(str, i, i);
        let result2 = findPalin(str, i, i+1);
        if (result.length>longVal.length) {
            longVal = result;
        }
        if (result2.length>longVal.length) {
            longVal = result2;
        }
    }
    
    return longVal;
}
function findPalin(str, left, right) {
    while (left >=0 && right<str.length && str[left]===str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}
console.log(longestPalin("bababd"));