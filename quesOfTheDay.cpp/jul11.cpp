// { Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function template for C++
class Solution{
public:
	
	int countSubstr (string S)
	{
	    
	    //Approach  1
	    
	   // int n = S.size(), ans =0;
	   // for(int i=0;i<n;i++){
	   //     if(S[i] == '1'){
	   //         for(int j=i+1;j<n;j++){
	   //             if(S[j] == '1')
	   //                 ans++;
	   //         }
	   //     }
	    
	   // }
	   // return ans;
	    
	    //Approach 2
	    int m=0;
	    for(int i=0;i<S.size();i++){
	        if(S[i] == '1')
	            m++;
	    }
	   // cout<<m;
	    return m*(m-1)/2;
	    
	}
};

// { Driver Code Starts.
int main()
{
    int t; cin >> t;
    while (t--)
    {
        string s; cin >> s;
        Solution ob;
        
        cout << ob.countSubstr (s) << '\n';
    }
}

// Contributed By: Pranay Bansal
  // } Driver Code Ends