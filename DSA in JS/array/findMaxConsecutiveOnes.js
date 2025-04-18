/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currSum = 0, maxSum = 0;
    for(let i=0;i<nums.length;i++){
        
        if(nums[i] == 1){
            currSum += 1;
        }
        if(nums[i] == 0){
            currSum = 0;
        }
        if(currSum > maxSum){
            maxSum = currSum;
        }
    }
    return maxSum;
};