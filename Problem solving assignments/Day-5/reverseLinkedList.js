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
    reverse(){
        if(this.isEmpty()){
            console.log("empty linked list");
        }
        else{
            let prev = null;
            let current = this.head;
            while(current){
                let next = current.next;
                current.next=prev;
                prev=current;
                current=next;
            }
            this.head=prev
            this.display();
        }
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
sll.reverse()