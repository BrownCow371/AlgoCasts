// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, character)=>{
        return character + reversed;
    }, '');
    
}

reverse('Fred');

// alternative
    // return str.split('').reverse().join('');

// for of loop
    // let reversed = '';{
    // for(let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;

// my original 
    // let array = str.split('');
    // let revArray = [];
    // for(let i = (array.length -1); i >= 0; i--){
    //     revArray.push(array[i])
    // };

    // let revString = revArray.join('');
    // return revString;

module.exports = reverse;
