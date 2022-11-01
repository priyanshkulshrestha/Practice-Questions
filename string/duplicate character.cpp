#include <bits/stdc++.h> 
vector<pair<char,int>> duplicate_char(string s, int n){
    // Write your code here.
    vector<pair<char,int>> ans;
    map<char, int> m;
    for(int i = 0;i<n;i++){
        m[s[i]]++;
    }
    for(auto k:m){
        if(k.second > 1){
            ans.push_back(make_pair(k.first, k.second));
        }
    }
    return ans;
}