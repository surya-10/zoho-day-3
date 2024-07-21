class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size == 0;
    }
    prepend(val) {
        let node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    display() {
        // if (this.isEmpty()) {
        //     console.log("linked list is empty");
        //     return;
        // }
        // else {
            let arr = [];
            let current = this.head;
            while (current) {
                arr[arr.length] = current.value;
                current = current.next;
            }
            console.log(arr);
        }
    // }
}
 function  mergeLinkedList(list1, list2) {
    let dummy = new Node(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.value <= list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }
    return dummy.next;
}

let sll = new LinkedList();
sll.prepend(5);
sll.prepend(4);
sll.prepend(3);
sll.prepend(2);
sll.prepend(1);
sll.display();

let sl1 = new LinkedList();
sl1.prepend(7);
sl1.prepend(6);
sl1.prepend(5);
sl1.prepend(2);
sl1.prepend(1);
sl1.display();

let result = mergeLinkedList(sll.head, sl1.head);
let mergedList = new LinkedList();
mergedList.head=result;
mergedList.display()
