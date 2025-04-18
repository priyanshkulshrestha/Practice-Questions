function longestSubarray(arr, k) {
    // code here
    let sum = 0;
    let hashMap = {};
    let prefixSum = []
    arr.forEach((num, index) => {
        sum += num;
        prefixSum.push(sum);
        if(hashMap[sum] == undefined){
            hashMap[sum] = index; 
        }
    })
    console.log("prefixSum = ", prefixSum);
    console.log("map = ", hashMap);
    

    let ans = 0;

    for(let i=0;i<prefixSum.length;i++){
        if(prefixSum[i] == k){
            ans = Math.max(i+1, ans)
        }

        // console.log(hashMap[prefixSum[i] - k])
        if(hashMap[prefixSum[i] - k]){
            // console.log(i - hashMap[prefixSum[i] - k], ans);
            
            ans = Math.max(i - hashMap[prefixSum[i] - k], ans );
        }
    }
    

    return ans;    
}

// let arr = [10, 5, 2, 7, 1, -10], k = 15;
// let arr = [1,2,3,4,5], k = 9;
// let arr = [-5, 8, -14, 2, 4, 12], k = -5;
// let arr = [10, -10, 20, 30], k = 5;
let arr = [94, -33, -13, 40, -82, 94, -33, -13, 40, -82], k=52;

console.log(arr);

console.log(longestSubarray(arr, k));
