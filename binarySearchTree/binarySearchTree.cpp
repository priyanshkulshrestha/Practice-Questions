#include<iostream>
#include<vector>
#include<queue>
using namespace std;

class Node{
    public:
    int data;
    Node* left;
    Node* right;

    Node(int data){
        this->data=data;
        this->left=NULL;
        this->right=NULL;
    }
};

void levelOrderTraversal(Node* root){
    queue<Node*> q;
    q.push(root);
    q.push(NULL);

    while (!q.empty())
    {
        Node* temp = q.front();
        q.pop();

        if(temp == NULL){
            cout<<"\n";
            if(!q.empty())
            q.push(NULL);
        }
        else{
            cout<<temp->data<<" ";
   
            if(temp->left){
                q.push(temp->left);
            }
            if(temp->right){
                q.push(temp->right);
            }
        }
    }
}



Node* insertIntoBST(Node* &root, int data){
    if(root == NULL){
        root = new Node(data);
        return root;
    }

    if(root->data > data){
        root->left = insertIntoBST(root->left, data);
    }

    if(root->data < data){
        root->right = insertIntoBST(root->right, data);
    }
    return root;
}

void takeInput(Node* &root){
    cout<<"Enter data: ";
    int data;
    cin>> data;

    while(data != -1){
        insertIntoBST(root,data);
        cout<<"Enter data: ";
        cin>> data;
    }
}

int main()
{
    Node* root = NULL;


    cout<<"Create BST: \n";
    takeInput(root);


    cout<<"traversal";
    levelOrderTraversal(root);

    return 0;
}