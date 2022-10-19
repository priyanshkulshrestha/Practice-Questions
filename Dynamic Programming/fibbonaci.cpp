//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
// User function Template for C++
class Solution {
     long long int solveByDp(long long int n, vector<long long int> &dp){
        if(n <= 1){
            return n;
        }
        if(dp[n] != -1){
            return dp[n];
        }
        
        return (solveByDp(n-1, dp) + solveByDp(n-2, dp));
    }
  
    
  public:
   
    long long int nthFibonacci(long long int n){
        // code here
        
        // ********************
        // memoization method
        // ********************
        // std::vector<long long int> dp[n+1];
        // // for(long long int i =0;i<=n;i++){
        // //     dp[i] = -1;
        // // }
        // std::fill(dp.begin(), dp.end(), -1);

        // return solveByDp(n, dp);
        
        
        
        // *********************
        //    Tabular method
        // *********************
        
        int m = 1e9+7;
        // long long v[n];
        // v[1] = 1;
        // v[0] = 0;
        
        
        // for(int i =2;i<n+1;i++){
        //     v[i] = (v[i-1] + v[i-2])%m;
        // }
        
        // return v[n];
        
        // ***********************
        // Modified tabular method
        // ***********************
        
        long long v[n];
        
        if(n<=1){
            return n;
        }
        
        int prev1 = 1;
        int prev2 = 0;
        int curr ;
        
        for(int i =2;i<n+1;i++){
            curr = (prev1 + prev2)%m;
            prev2 = prev1;
            prev1 = curr;
        }
        
        return curr;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int n;
        cin >> n;
        Solution ob;
        cout << ob.nthFibonacci(n) << endl;
    }
    return 0;
}

// } Driver Code Ends