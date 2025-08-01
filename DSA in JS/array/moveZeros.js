var moveZeroes = function(nums) {
    // if(nums.length == 1 ) return nums
    // let i = 0
    // let j = 0
    // let zeroIndex = 0
    // while(j < nums.length){
    //     if(nums[j] !== 0){
    //         [nums[i], nums[j]] = [nums[j], nums[i]];
    //         i++
    //     }
    //     j++ 
    // }

    // best solution

    let index = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0)
            nums[index++] = nums[i];
    }
    for(let i = index;i<nums.length;i++){
        nums[i] = 0;
    }
};
