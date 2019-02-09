// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counter = [0];
    let store = [root, "s"];

    while(store.length>1){
        let node = store.shift();
        
        if(node === 's'){
            store.push(node);
            counter.push(0);
        } else {    
            store.push(...node.children);
            counter[counter.length-1] += 1;
        }
    }
    return counter;
}

module.exports = levelWidth;
