//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
#define MAX_HEIGHT 100000

// Tree Node
struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};




// } Driver Code Ends
class Solution
{
    public:
    //Function to check whether a Binary Tree is BST or not.
    
    bool check(Node* &root){
        if(root == NULL)
            return 1;
            
        if(root->left && root->right){
            if(root->data > root->left->data && root->data < root->right->data)
                return (check(root->left) && check(root->right));
            else 
                return false;
        }
        
        else if(root->left){
            if(root->data > root->left->data)
                return check(root->left);
            else return false;
        }
        
        else if(root->right){
            if(root->data < root->right->data)
                return check(root->right);
            else return false;
        }
        
        return true;
    }
    
    bool checkBST(Node* node, int min, int max){
        if(node == NULL){
            return 1;
        }
        
        if(node->data < min || node->data > max){
            return 0;
        }
        
        return checkBST(node->left, min, node->data-1) && checkBST(node->right, node->data+1, max); 
    }
    bool isBST(Node* node) 
    {
        // Your code here
        
        return checkBST(node,INT_MIN, INT_MAX);
        
        
        
        
        // ********************
        // wrong naive approach
        // ********************

        // return check(root);
       
    }
};




//{ Driver Code Starts.

// Function to Build Tree
Node* buildTree(string str)
{
   // Corner Case
   if(str.length() == 0 || str[0] == 'N')
       return NULL;

   // Creating vector of strings from input
   // string after spliting by space
   vector<string> ip;

   istringstream iss(str);
   for(string str; iss >> str; )
       ip.push_back(str);

   // Create the root of the tree
   Node* root = new Node(stoi(ip[0]));

   // Push the root to the queue
   queue<Node*> queue;
   queue.push(root);

   // Starting from the second element
   int i = 1;
   while(!queue.empty() && i < ip.size()) {

       // Get and remove the front of the queue
       Node* currNode = queue.front();
       queue.pop();

       // Get the current node's value from the string
       string currVal = ip[i];

       // If the left child is not null
       if(currVal != "N") {

           // Create the left child for the current node
           currNode->left = new Node(stoi(currVal));

           // Push it to the queue
           queue.push(currNode->left);
       }

       // For the right child
       i++;
       if(i >= ip.size())
           break;
       currVal = ip[i];

       // If the right child is not null
       if(currVal != "N") {

           // Create the right child for the current node
           currNode->right = new Node(stoi(currVal));

           // Push it to the queue
           queue.push(currNode->right);
       }
       i++;
   }

   return root;
}

void inorder(Node *root, vector<int> &v)
{
    if(root==NULL)
        return;

    inorder(root->left, v);
    v.push_back(root->data);
    inorder(root->right, v);
}

int main() {
 
   int t;
   string tc;
   getline(cin, tc);
   t=stoi(tc);
   while(t--)
   {
    string s; 
    getline(cin, s);
    Node* root = buildTree(s);
    Solution ob;
    if(ob.isBST(root)) 
        cout<<"1\n";
        
    else
        cout<<"0\n";
   }
   return 0;
}


// } Driver Code Ends