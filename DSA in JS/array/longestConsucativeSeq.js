/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let m = new Map();
    for (let i=0;i<nums.length;i++){
        m.set(nums[i], 1);
    }
    console.log(m);
    let maxCount = 0
    for(let [key, val] of m){
        let count = 0;
        if(!m.has(key -1)){
            maxCount = Math.max(check(m , key, count), maxCount);
        }
    }
    return maxCount;
}

function check(m, k, ans){
    if(m.has(k+1)){
        ans++
        return check(m,k+1, ans)
    }else{
        return ans;
    }

}
let nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums))
