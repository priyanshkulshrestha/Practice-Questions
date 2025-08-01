var majorityElement = function(nums) {
    let candidate = -1;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(count == 0){
            candidate = nums[i];
            count++;
        }else {
            if(nums[i] == candidate){
                count++;
            }else{
                count--;
            }
        }
    }
    return candidate;
};
