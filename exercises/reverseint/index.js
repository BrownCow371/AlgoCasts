// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let rev = n.toString().split('').reverse().join('');
    return  Math.sign(n) * parseInt(rev);  
}

module.exports = reverseInt;

// My original solution

// function reverseInt(n) {
//     let arr = n.toString().split('');

//     if (n===0) return n;

//     if (arr[0] == '-') {
//         arr.shift();
//     }
    
//     return  Math.sign(n) * parseInt(arr.reverse().join(''), 10);
    
// }
