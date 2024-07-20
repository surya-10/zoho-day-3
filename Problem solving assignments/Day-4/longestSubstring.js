function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    function hasUniqueCharacters(substring) {
        let charSet = new Set();
        for (let char of substring) {
            if (charSet.has(char)) return false;
            charSet.add(char);
        }
        return true;
    }
    for (let i=0; i<s.length; i++) {
        for (let j=i+1; j<=s.length; j++) {
            let substring = s.substring(i, j);
            if (hasUniqueCharacters(substring)) {
                maxLength = Math.max(maxLength, substring.length);
            }
        }
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
