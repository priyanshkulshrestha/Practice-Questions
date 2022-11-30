#include<iostream>
#include<bits/stdc++.h>
using namespace std;

bool checkIsAP(vector<int> arr[], int n)
{
  if (n == 1)
    return true;
 
  // Sort array
  sort(arr, arr + n);
 
  // After sorting, difference between
  // consecutive elements must be same.
  int d = arr[1] - arr[0];
  for (int i=2; i<n; i++)
    if (arr[i] - arr[i-1] != d)
      return false;
 
  return true;
}

long long int numInAp(long long int z,long long int s,long long int d,long long int n){
    vector<int> arr[] = {s,d,n};
    checkIsAP(arr, arr.size());
int count = 0;

    while(z != s || z != d||z!=n){

        count++;
        if(z != s || z != d||z!=n){
            z++;
        }
        count++;
        if(z != s || z != d||z!=n){
            z--;
        }

    }
}

int main()
{
    cout<<numInAp(6,2,3,3);
    return 0;
}