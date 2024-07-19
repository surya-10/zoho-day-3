// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of
// sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating
// in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.
// Given strings sequence and word, return the maximum k-repeating value of word in sequence.


function findRepeatingStr(str, val) {
    let size = val.length;
    let count = 0;
    for (let i=0; i<= str.length-size; i++) {
        let substr = str.slice(i, i+size);
        if (substr===val) {
            count++;
        }
    }
    return count;
}

let str = "ababac";
let val = "aba";
console.log(findRepeatingStr(str, val));