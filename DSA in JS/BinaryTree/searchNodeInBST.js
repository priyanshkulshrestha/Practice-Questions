//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function newNode(root, data) {
    if (root === null)
        root = new Node(data);
    else if (data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let root = null;
        for (let i = 0; i < N; i++) {
            root = newNode(root, input_ar1[i]);
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        if (obj.search(root, x)) {
            console.log("1");
        } else {
            console.log("0");
        }
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @param {number} x
 * @returns {boolean}
*/

class Solution {
    // Function to search a node in BST.
    search(root, x) {
        // your code here
        // ********* Recursive *********
        
        if(root == null){
            return 0;
        }
        else if(root.data > x){
            return this.search(root.left, x);
        }
        else if(root.data < x){
            return this.search(root.right, x);
        }
        else if(root.data == x){
            return 1;
        }
        
        // ********* Itrative *********

        // while(root){
        //     if(root.data==x)
        //         return 1;
        //     else if(root.data > x)
        //         root = root.left;
        //     else
        //         root = root.right;
        // }
        
    }
}