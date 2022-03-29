#include<iostream>
#include<queue>
using namespace std;
int main(){
    queue<int> q;
    int n,a;
    cin>>a;
    for(int i=0;i<n;i++){
        cin>>a;
        q.push(a);
    }
    for(int i=0;i<q.size();i++){
        cout<<q.pop();
    }
    q.pop();

}