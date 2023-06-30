#include <bits/stdc++.h>
using namespace std;
string s1,s2;
int ans=1e9; int n;

void rec(string s1,int level){
    if(s1==s2){
        ans = min(ans,level-2);
        return;
    }

    for(int i=0; i<= n-level; i++){
        reverse(s1.begin()+i, s1.begin()+i+level);
        rec(s1,level+1);
        reverse(s1.begin()+i, s1.begin()+i+level);
    }
}

int main(){

  cin>>s1>>s2;
  n = s1.size();
  rec(s1,2);
  if(ans==1e9)
      cout<<"-1"<<endl;
  else
  cout<<ans<<endl;
}