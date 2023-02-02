//node of a linked list
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
// console.log(list)
// console.log(list.push("HELLO"))
// console.log(list.push("WORLD"))

// list.push("GOODBYE")