#include<iostream>
using namespace std;
int buildBridges(int n, int A[], int B[]){
    int ans = 0;
    for(int i =0;i<n;i++){
        if(A[i]<B[i]){
            ans++;
        }
    }
    return ans;
}
int main()
{
    int n = 5;
    int A[5] = {}
    func(n,  A[], B[]);
    return 0;
}