class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        let node = new Node(data)
        if (this.root === null)
            this.root = node;
        else{
            this.#insertAtPos(this.root, node);
        }
    }

    #insertAtPos(root, node){
        if(root === null)
            root = node;
        if(root.data > node.data){
            root.left === null? 
            root.left = node:
            this.#insertAtPos(root.left, node);}
        if(root.data < node.data){
            root.right === null? 
            root.right = node:
            this.#insertAtPos(root.right, node);}
    }

    #inorder(root){
        if(root!=null){
            this.#inorder(root.left);
            console.log(root.data);
            this.#inorder(root.right);
        } 
    }

    #preorder(root){
        if(root!=null){
            console.log(root.data);
            this.#preorder(root.left);
            this.#preorder(root.right);
        } 
    }

    #postorder(root){
        if(root!=null){
            this.#postorder(root.left);
            this.#postorder(root.right);
            console.log(root.data);
        } 
    }

    #levelorder(root){
        let ans = [];
        let que = []
        que.push(root);
        let i = 0;
        while(i<que.length){
            let node = que[i];
            ans.push(node.data);
            if(node.left != null){
                que.push(node.left)
            }
            if(node.right != null){
                que.push(node.right)
            }
            i++;
        }
        console.log(ans);
    }

    #reverseLevelorder(root){
        let stack = [];
        let que = []
        que.push(root);
        let i = 0;
        while(i<que.length){
            let node = que[i];
            stack.push(node.data);
            if(node.right != null){
                que.push(node.right)
            }
            if(node.left != null){
                que.push(node.left)
            }
            i++;
        }
        let ans = [];
        while(stack.length){
            ans.push(stack.pop());
        }
        console.log(ans);
    }

    preorderTraversal(){
        console.log("Preorder Traversal");
        this.#preorder(this.root);
    }
    
    inorderTraversal(){
        console.log("Inorder Traversal");
        this.#inorder(this.root);
    }
    
    postorderTraversal(){
        console.log("Postorder Traversal");
        this.#postorder(this.root);
    }
    
    levelorderTraversal(){
        console.log("Levelorder Traversal");
        this.#levelorder(this.root);
    }

    reverseLevelorderTraversal(){
        console.log("Reverse Levelorder Traversal");
        this.#reverseLevelorder(this.root);
    }
}

let myBST = new BST()

myBST.insert(5);
myBST.insert(6);
myBST.insert(2);
myBST.insert(1);
myBST.insert(3);

myBST.preorderTraversal();
myBST.inorderTraversal();
myBST.postorderTraversal();
myBST.levelorderTraversal();
myBST.reverseLevelorderTraversal();