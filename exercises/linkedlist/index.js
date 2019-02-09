// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const node =  new Node(data, this.head);
        this.head = node;  
    }

    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let last = this.head;
        if(!last) return null;

        while(last.next){
            last = last.next;
        } 
        return last;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        } 
        this.head = this.head.next;
    }

    // removeLast(){
    //     let last = this.head;

    //     if(!last || !last.next) {
    //         return this.head = null;
    //     }

    //     while(last){
    //         if(!last.next.next){
    //             last.next = null;
    //         }
    //         last = last.next;
    //     }
    // }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            return this.head = null;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            this.getLast().next = node;
        }
    }

    // getAt(n){
    //     let counter = 0;
    //     let node = this.head;
    //     while(counter<n && node){
    //         counter ++;
    //         node = node.next;
    //     }
    //     return node;
    // }

    getAt(index){
        let counter = 0;
        let node = this.head;

        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    // removeAt(index){
    //    if(index === 0){
    //        this.removeFirst() 
    //    } else {
    //         let previous = this.getAt(index-1);
    //         let next = this.getAt(index+1);

    //         if(previous){
    //             previous.next = next;
    //         }
    //    }

    // }

    removeAt(index){
        if(index === 0){
            this.removeFirst() 
        } else {
            let previous = this.getAt(index-1);
            if(previous && previous.next){
                previous.next= previous.next.next;
            }
        }
    }

    insertAt(data, index){
        if(index === 0){
            return this.insertFirst(data);
        } else {
            let previous = this.getAt(index-1) || this.getLast();
            previous.next = new Node(data, previous.next);
        }
    }

    forEach(fn){
        if(!this.head){
            return;
        }

        let node = this.head;
        while(node){
            fn(node);
            node = node.next;
        }

    }


}

module.exports = { Node, LinkedList };
