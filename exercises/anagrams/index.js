// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    function cleanString(str){
        return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    }

    return cleanString(stringA) === cleanString(stringB);

}

module.exports = anagrams;

// original solution
// function anagrams(stringA, stringB) {
    
//     function buildCharMap(str) {
//         const arr = str.replace(/[^\w]/g, "").toLowerCase().split("");
//         let charMap = {};

//         for(let char of arr){
//             charMap[char] = charMap[char] +1 || 1;
//         }
//         return charMap;
//     }

//     let charMapA = buildCharMap(stringA);
//     let charMapB = buildCharMap(stringB);


//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
    
//     return Object.keys(charMapA).every(key=> {
//         return charMapA[key] === charMapB[key]
//     });

// }