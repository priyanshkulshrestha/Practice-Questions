/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if(nums[0]>target){
        return 0;
    }else if(nums[nums.length-1]< target){
        return nums.length;
    }
    let start = 0;
    let end = nums.length-1;
    while(start<=end){
        let mid = start + Math.floor((end-start) / 2)
        if(nums[mid] == target){
            return mid;
        }
        else if(nums[mid]< target && nums[mid+1]>target){
            return mid+1;
        }
        else if(nums[mid]<target){
            start = mid+1
        }
        else if(nums[mid]> target){
            end = mid-1
        }

        console.log(mid, nums[mid]);
    }
};

// let nums = [1,3,5,6], target = 5;
// let nums = [1,3,5,6], target = 2;
let nums = [1,3,5,6], target = 7

console.log(searchInsert(nums, target))