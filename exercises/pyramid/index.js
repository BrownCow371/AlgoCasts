// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row=0, level="") {
    let colNum = (2*n)-1;
    let center = n-1;
    
    if(row===n){
        return;
    }

    if(level.length === colNum){
        console.log(level)
        return pyramid(n, ++row)
    }

    if(level.length>=center-row && level.length<=center+row){
        level += "#";
    } else {
        level += " ";
    }

    pyramid(n, row, level);
    
}

// function pyramid(n) {
//     let colNum = (2*n)-1;
//     let center = n-1;

//     for(let row=0; row<n; row++){
//        let level = "";
//        for(let col=0; col<colNum; col++){
//            if(col>=center-row && col<=center+row){
//                level += "#";
//            } else {
//                level += " ";
//            }
//        } 
//        console.log(level);
//     }
// }

module.exports = pyramid;
