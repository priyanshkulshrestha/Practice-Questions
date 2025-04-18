var rotate = function(nums, k) {
    let ans = [];
    for(let i=0;i<nums.length;i++){
        ans[i] = nums[(i+k)%nums.length];
    }
    nums = ans;
    console.log(nums)
};

let nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums, k);