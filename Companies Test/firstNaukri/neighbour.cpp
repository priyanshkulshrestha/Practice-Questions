#include<bits/stdc++.h>
#include<iostream>
using namespace std;

class Solution {
public:
int n=0,m=0;
int solve(vector<vector>&grid,int i,int j)
{
if(i<0 or j<0 or i>=n or j>=m)
return 0;
    if(!grid[i][j] )
        return 0;
    // vis[{i,j}]=1;
    grid[i][j]=0;
   int a = solve(grid,i+1,j);     
   int b= solve(grid,i,j+1);
   int c= solve(grid,i-1,j);
    int d = solve(grid,i,j-1);
        
    return a+b+c+d+1;
}

int maxAreaOfIsland(vector<vector<int>>& grid) {
 n=grid.size();
m=grid[0].size();int ans=0;
    // map<pair<int,int>,int>vis;
    for(int i=0;i<n;++i)
    {
        for(int j=0;j<m;++j)
        {
            // if(vis[{i,j}])
            //     continue;
            // else
                if(grid[i][j])
            {int temp=0;

                temp = solve(grid,i,j);
             ans=max(temp,ans);
            }
        }
    }
    return ans;
}
};



int main()
{

    Solution ob;
    int n,m;
    cin>>n>>m;
    int vector<vector<int>> arr;
    for(int i  =0;i<n;i++){
        for(int j =0;j<m;j++){
            cin>>arr[i][j];
        }
    }
    cout<<ob.maxAreaOfIsland(arr);

    return 0;
}