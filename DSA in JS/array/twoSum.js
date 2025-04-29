var twoSum = function(nums, target) {
    let map = new Map();
    let ans;
    for(let i=0;i<nums.length;i++) {
        if(map.has(target - nums[i])){
            return ans = [i, map.get(target - nums[i])];
        }
        // console.log(num, index);
        
        map.set(nums[i], i);
    }

   
    return ans;
};

let nums = [2,7,11,15], target = 9;

console.log(twoSum(nums, target))
