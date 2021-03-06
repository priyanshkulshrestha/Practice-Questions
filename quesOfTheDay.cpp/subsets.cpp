// { Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function Template for C++

class Solution
{
    
    private:
        void solve(vector<int> nums, vector<int> output, int index, vector<vector<int>>& ans){
            if(index >= nums.size()){
                ans.push_back(output);
                return;
            }
            
            // exclude
            solve(nums, output, index+1, ans);

            // include
            int element = nums[index];
            output.push_back(element);
            solve(nums, output, index+1, ans);
            sort(output.begin(),output.end());
        }
        
        
    public:
    vector<vector<int>> subsets(vector<int>& A)
    {
        //code here
        vector<vector <int>> ans;
        vector<int> output;
        int index = 0;
        solve(A, output, index, ans);
        sort(ans.begin(),ans.end());
        return ans;
    }


    bool subsetsum(vector<int>& A){
        vector<vector<int>> res = subsets(A);
        for (int i = 0; i < res.size(); i++) {
            int sum =0;
            if( (res[i].size()) %2 ==0 ){
			for (int j = 0; j < res[i].size(); j++){
			    sum+=res[i][j];
            }
            if(sum != 0) {
                break;
                return 0;
            }
            }
		}
        return 1;
    }

};

// { Driver Code Starts.

int main()
{
	int t;
	cin >> t;

	while (t--)
	{
		int n, x;
		cin >> n;

		vector<int> array;
		for (int i = 0; i < n; i++)
		{
			cin >> x;
			array.push_back(x);
		}
        
        
        Solution ob;
		bool res = ob.subsetsum(array);
        cout<<res;
		// Print result
		// for (int i = 0; i < res.size(); i++) {
		// 	for (int j = 0; j < res[i].size(); j++)
		// 		cout << res[i][j] << " ";
		// 	cout << endl;
		// }

		
	}

	return 0;
}  // } Driver Code Ends