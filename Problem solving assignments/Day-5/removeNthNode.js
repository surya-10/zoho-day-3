class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size==0;
    }
    prepend(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    remove(ind){
        if(ind<0 || ind>=this.size){
            return "invalid index";
        }
        let removedNode;
        if(ind==0){
            removedNode=this.head;
            this.head=this.head.next;
            this.size--;
            return removedNode.value;
        }
        else{
            let prev = this.head;
            for(let i=0; i<ind-1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next=removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }
    removeNthFromEnd(n) {
        let length = 0;
        let current = this.head;
        while (current !== null) {
            length++;
            current = current.next;
        }
        let targetIndex = length - n;
        if (targetIndex < 0 || targetIndex >= length) {
            return "invalid index";
        }
        return this.remove(targetIndex);
    }
    display(){
        if(this.isEmpty()){
            console.log("linked list is empty");
            return;
        }
        else{
            let arr = [];
            let current = this.head;
            while(current){
                arr[arr.length]=current.value;
                current=current.next;
            }
            console.log(arr);
        }
    }
}
let sll = new LinkedList();
sll.prepend(5);
sll.prepend(4);
sll.prepend(3);
sll.prepend(2);
sll.prepend(1);
sll.display();
console.log(sll.removeNthFromEnd(2));
sll.display();