//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution
{
    public:
    //Function to check if two strings are rotations of each other or not.
    bool areRotations(string s1,string s2)
    {
        // Your code here
        if(s1.size() != s2.size())
        return 0;
        
        queue<char> q1,q2;
        
        for(int i =0;i<s1.size();i++){
            q1.push(s1[i]);
            q2.push(s2[i]);
        }
        
        int x = s1.size();
        while( x--){
            if(q1 == q2){
                return 1;
            }
            char temp = q2.front();
            q2.pop();
            q2.push(temp);
        }
        return 0;
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        string s1;
        string s2;
        cin>>s1>>s2;
        Solution obj;
        cout<<obj.areRotations(s1,s2)<<endl;

    }
    return 0;
}

// } Driver Code Ends