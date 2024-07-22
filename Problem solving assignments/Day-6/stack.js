// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.


class Stack{
    constructor(){
        this.items = [];
        this.minItems = [];
    }
    push(val){
        this.items.push(val);
        if(this.minItems.length==0 || val < this.getMin()){
            this.minItems.push(val);
        }
    }
    peek(){
        return this.items[this.items.length-1];
    }
    pop(){
        return this.items.pop();
    }
    getMin(){
        return this.minItems[this.minItems.length-1];
    }
    array(){
        return this.items;
    }
}
let stack = new Stack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin())
console.log(stack.array())
stack.push(-7);
console.log(stack.getMin())