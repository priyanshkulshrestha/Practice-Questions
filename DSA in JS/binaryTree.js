class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree{

    constructor(){
        this.root = null;
    }

    
    insert(data){
        let node = new Node(data);
        
        if(this.root === null)
            this.root = node;
        
        
    }
} 