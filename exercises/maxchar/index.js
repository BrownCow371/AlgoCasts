// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars ={};
    for(let letter of str){
        chars[letter] ? chars[letter]++ : chars[letter] = 1 
    }
    
    let maxChar;
    let maxVal = 0;

    Object.keys(chars).forEach(key => {
        if (chars[key] > maxVal) {
            maxVal=chars[key];
            maxChar = key;
        }
    })
    return maxChar;

}

module.exports = maxChar;
