// Circular Queue 
// It is a queue that have end and start connected.

class CircularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
        this.currenLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currenLength === this.size;
    }

    isEmpty() {
        return this.currenLength === 0;
    }

    enqueue(item) {
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = item;
        this.currenLength++;
        this.front = this.front === -1 ? 0 : this.front;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.size;
        this.currenLength--;
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }
        else{
            let str = "";
            for(let i = this.front; i <= this.rear; (i++)%this.size){
                str += this.items[i] + " ";
            }
            console.log(str);
        }
    }
}

let CircularQ = new CircularQueue(5);

console.log(CircularQ.isEmpty());

CircularQ.enqueue(1);
CircularQ.enqueue(2);
CircularQ.enqueue(3);

console.log(CircularQ.isEmpty());
CircularQ.print();

console.log(CircularQ.dequeue());
CircularQ.print();

console.log(CircularQ.peek());
console.log(CircularQ.isFull());

CircularQ.enqueue(4);
CircularQ.enqueue(5);

CircularQ.print();
console.log(CircularQ.isFull());