let buquetsInNDays = (arr, n, k)=>{
    let count = 0;
    let ans = 0;
    arr.forEach(daysToBloom => {
        if(daysToBloom <= n){
            count++;
            if(count == k){
                ans++;
                count=0;
            }
        }else{
            count = 0;
        }
    })
    return ans
}
var minDays = function(bloomDay, m, k) {
    if(m*k > bloomDay.length) return -1;
    let ans = Number.MAX_SAFE_INTEGER;
    let s = 1, e = Math.max(...bloomDay);
    while(s<=e){
        mid = Math.floor((s+e)/2);
        let noOfBuquets = buquetsInNDays(bloomDay, mid, k);
        console.log("s ", s, "e ", e, "m ", m);
        
        console.log(mid, noOfBuquets);
        
        if(noOfBuquets >= m){
            if(ans>mid){
                ans = mid;
            }
            e = mid-1;
        }else{
            s = mid +1;
        }
    }
    return ans;
};
let  arr = [1,10,3,10,2], m = 3, k = 1
// let arr = [1,10,3,10,2], m = 3, k = 2
// let arr = [7,7,7,7,12,7,7], m = 2, k = 3
console.log(minDays(arr,m,k))