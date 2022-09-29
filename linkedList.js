// class declarations are not hoisted

// list node contains two items: data and pointer to next node
class ListNode {
    // method for creating and initializing an object created with a class
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// if the head node is not passed, it is initialised to null
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data);
