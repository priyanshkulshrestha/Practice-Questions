//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution
{
    public:
    //Function to find a continuous sub-array which adds up to a given number.
    vector<int> subarraySum(int arr[], int n, long long s)
    {
        // Your code here
        vector<int> ans;
        if(s == 0){
            ans.push_back(-1);
            return ans;
        }
        int i=0,j = 0, a1 = -1, a2 = -1, sum = 0;
        
        while(i<=n || j <=n){
            if(sum == s){
                a1 = j;
                a2 = i;
                break;
            }
            else if(sum>s){
                sum -= arr[j];
                j++;
            }
            else{
                sum += arr[i];
                i++;
            }
        }
        
        
        if(a1 != -1)
        ans.push_back(a1+1);
        ans.push_back(a2);
        return ans;
    }
};

//{ Driver Code Starts.

int main()
 {
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        long long s;
        cin>>n>>s;
        int arr[n];
        const int mx = 1e9;
        for(int i=0;i<n;i++)
        {
            cin>>arr[i];
        }
        Solution ob;
        vector<int>res;
        res = ob.subarraySum(arr, n, s);
        
        for(int i = 0;i<res.size();i++)
            cout<<res[i]<<" ";
        cout<<endl;
        
    }
	return 0;
}
// } Driver Code Ends