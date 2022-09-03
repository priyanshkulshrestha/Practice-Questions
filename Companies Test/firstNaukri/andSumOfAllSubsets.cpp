#include<iostream>
#include<bits/stdc++.h>

#define BITS 32

using namespace std;

int andSum(int arr[], int n)
{
    int ans = 0;
 
    for (int i = 0; i < BITS; i++) {
        int countSetBits = 0;
 
        for (int j = 0; j < n; j++) {
 
            if (arr[j] & (1 << i))
                countSetBits++;
        }
 
        int subset = (1 << countSetBits) - 1;
 
        subset = (subset * (1 << i));
 
        ans += subset;
    }
    if(ans<INT_MAX)
    return ans;
    return ans % 1000000007;
}
 

int main()
{
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        int arr[n];
        for(int i =0;i<n;i++){
            cin>>arr[i];
        }
        cout<<andSum(arr, n);
    }
    return 0;
}