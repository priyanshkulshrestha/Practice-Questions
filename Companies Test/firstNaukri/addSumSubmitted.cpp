#include <bits/stdc++.h>

#define ll long long

using namespace std;

 
int mod = 1e9+7;

 
ll binaryExponential(ll x, ll n){

if(n==0) return 1;

if(n==1) return x;

ll res = binaryExponential(x,n/2)%mod;

if(n&1) return (res%mod*res%mod*x%mod)%mod;

else return (res%mod*res%mod)%mod;

}

 
ll solve(vector<ll>& arr){

ll sum = 0;

for(auto &e : arr) sum=(sum%mod + e%mod)%mod;

 
for(ll i=0; i<31; ++i){

ll cnt = 0;

for(auto &e : arr){

if(e&(1<<i)) cnt++;

}

ll total = (binaryExponential(2,cnt)-cnt-1)*(binaryExponential(2,i));

sum = (sum%mod + total%mod)%mod;

}

return sum;

}

 
void run(){

ll n;

cin>>n;

vector<ll> arr(n);

for(int i=0; i<n; ++i){

cin>>arr[i];

}

cout<<solve(arr)<<endl;

}

 
int32_t main(){

ll t;

cin>>t;

while(t--){

run();

}

return 0;

}