#include<bits/stdc++.h>
using namespace std;

class Graph{
    public:
       unordered_map<int, list<int>> adj;

        void addEdge(int u, int v, bool direction){
            // When direction s given only one edge will be created else edge from both side will be created.
            if(direction){
                adj[u].push_back(v); 
            }
            else{
                adj[u].push_back(v); 
                adj[v].push_back(u); 
            }
        }

        void printAdjList(){
            for(auto i:adj){
                cout<< i.first << " --> ";
                for(auto j: i.second){
                    cout<<j<<", ";
                }
                cout<<endl;
            }
        }

        
};
 
int main()
{
    int edges, nodes;

    cout<<"Enter no of nodes: ";
    cin>>nodes;
    cout<<"Enter no of edges: ";
    cin>>edges;

    Graph g;
    bool directed;
    cout<<"Graph is directed or not enter in 0 or 1: ";
    cin>>directed;
    cout<<"Enter starting node and ending node of each edge";
    for(int i=0;i<edges;i++){
        int u, v;
        cin>>u>>v;
        g.addEdge(u, v, directed);
    }

    g.printAdjList();
    return 0;
}   