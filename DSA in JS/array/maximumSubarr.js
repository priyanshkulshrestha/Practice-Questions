var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let curSum = nums[0];
    for(let i=1;i<nums.length;i++){
        // curSum += nums[i];
        // if(nums[i] > curSum){
        //     curSum = nums[i];
        // }
        // if(curSum > maxSum){
        //     maxSum = curSum;
        // }
        // console.log(curSum, maxSum)
        curSum = Math.max(nums[i], curSum+nums[i]);
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-1,-2,-3,-4])); // -1
console.log(maxSubArray([1,2,3,4])); // 10