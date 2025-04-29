/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let dip = -1;
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i-1] < nums[i]){
            dip = i-1;
            break
        }
    }
    console.log(dip);

    let swapNum = 100000;
    let swapIndex = -1;
    for(let j=nums.length-1;j>dip;j--){
        if(nums[j]>nums[dip] && nums[j]<swapNum){
            swapNum = nums[j];
            swapIndex = j;
        }
    }
    [nums[swapIndex], nums[dip]] = [nums[dip], nums[swapIndex]];
        
    console.log(nums);
    let start = dip+1;
    let end = nums.length-1;

    // while(start <= end){
    //     [nums[start], nums[end]] = [nums[end], nums[start]];
    //     start++;
    //     end--;
    // }
    let newarr = nums.slice(0,start).concat(nums.slice(start, end+1).sort()); 
    console.log(newarr)
};

// let arr = [4,1,2,3]
let arr = [4,3,2,1]
// let arr = [2,3,1,3,3]

nextPermutation(arr)