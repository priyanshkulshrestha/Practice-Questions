// Linked List 
//  Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers.

// Why Linked List?
// 1) Dynamic size
// 2) Ease of insertion/deletion
// 3) Memory allocation is efficient
 
class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    add(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    prepend(data){
        let node = new Node(data);

        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAtPos(data, pos){
        if(pos < 0 || pos > this.size){
            console.log('Invalid index');
            return -1;
        }
        else{
            let node = new Node(data);

            if(pos == 0){
                this.prepend(data);
            }
            else{
                let current = this.head;
                for(let i=0;i<pos-1;i++){
                    current = current.next;
                }
                node.next = current.next;
                current.next = node;
            }
            this.size++;
        }
    }

    removeFromPos(pos){
        if(pos<0 || pos >= this.size){
            console.log('wrong index is given');
            return -1;
        }
        else{
            let removedNode;
            if(pos == 0){
                removedNode = this.head;
                this.head = this.head.next;
            }
            else{
                let prev = this.head;
                for(let i=0;i<pos-1;i++){
                    prev = prev.next;
                }
                removedNode = prev.next;
                prev.next = removedNode.next;
            }
            this.size--;
            return removedNode.data;
        }
    }

    removeElement(value){
        let current = this.head;
        let prev = null;

        while(current != null){
            if(current.data === value){
                if(prev == null){
                    this.head = current.next;   
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        console.log('Element not found');
        return -1;
    }

    search(element){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.data == element){
                return index;
            }
            index++;
            current = current.next;
        }
        return index;
    }

    reverseList()
    {
        //your code here
        let curr = this.head;
        let prev = null;
        let next = null;
        
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        this.head = prev;
        
    }

    printList(){
        if(this.isEmpty()){
            console.log('List is empty. ');
        }
        else{
            let current = this.head;

            while(current){
                console.log(current.data + " -> ");
                current = current.next;
            }
        }
    }
}

let ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(1);
ll.printList();
console.log(ll.getSize());
ll.add(2);
ll.printList();
console.log(ll.getSize());
ll.add(3);
ll.printList();
console.log(ll.getSize());
ll.prepend(0);
ll.printList();
console.log(ll.getSize());
ll.insertAtPos(6,2)
ll.printList();
console.log(ll.getSize());
ll.insertAtPos(10,5)
ll.printList();

console.log(ll.search(0));
console.log(ll.search(1));
console.log(ll.search(2));
console.log(ll.search(3));
console.log(ll.search(10));

// ll.reverseList();

// console.log(ll.getSize());
// ll.removeFromPos(2)
// ll.printList();
// console.log(ll.getSize());
// ll.removeFromPos(4)
// ll.printList();
// console.log(ll.getSize());
// ll.removeElement(2)
// ll.printList();
// console.log(ll.getSize());
// ll.removeElement(0)
// ll.printList();
// console.log(ll.getSize());