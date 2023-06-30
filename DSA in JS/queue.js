//Queue
// FIFO - First In First Out
// Queue is a sequential data structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.


class Queue{
    // In this queue implementation, we use simple push and shift methods to add and remove elements from the queue. Shift function takes linear time O(n) as it needs to shift all the elements to the left after removing the first element.
    constructor (){
        this.items = [];
    }

    enqueue(num){
        this.items.push(num);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length == 0;
    }

    rear(){
        if(this.isEmpty()){
            return "No elements in Queue";
        }
        return this.items[this.items.length - 1];
    }

    front(){
        if(this.isEmpty()){
            return "No elements in Queue";
        }
        return this.items[0];
    }

    size(){
        return this.items.length;
    }

    printQueue(){
        console.log(this.items.toString());
    }
} 


let q = new Queue();

console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.printQueue();

console.log(q.isEmpty());
console.log(q.dequeue());

q.printQueue();

console.log(q.front());
console.log(q.rear());

console.log(q.size())

// Queue 