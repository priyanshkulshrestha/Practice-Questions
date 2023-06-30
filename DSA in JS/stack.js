// Stack
// Stack is a linear data structure which follows a particular order in which the operations are performed. T he order may be LIFO(Last In First Out) or FILO(First In Last Out).
class Stack{
    constructor(){
        this.items = [];
    }

    Stack(size){
        this.items = [size];
    }
    
    push(num) {
        this.items.push(num)
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

    printStack(){
        console.log(this.items.toString());
    }
}
const S = new Stack();

console.log(S.isEmpty());

S.push(5);
console.log(S.isEmpty());
console.log(S);
S.push(10)
console.log(S.peek());
console.log(S);
S.pop();
console.log(S)
console.log(S.size());

// const A[10] = new Stack;
