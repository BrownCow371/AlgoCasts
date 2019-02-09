// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((char, i) => {
        return char === str[str.length -i -1];
   })
}

module.exports = palindrome;

// my original solution

// function palindrome(str) {
//     let arr = str.split('');

//     if (arr.length <= 1){
//         return true;
//     } else {
//         if (arr[0]=== arr[arr.length-1]){
//             arr.shift();
//             arr.pop();
//             return palindrome(arr.join(''))
//         }
//         return false;
//     }
// }

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}