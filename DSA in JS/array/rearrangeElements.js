var rearrangeArray = function(nums) {
    let fir = 0;
    let sec = 1;
    let ans = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] > 0){
            ans[fir] = nums[i];
            fir+=2 
        }else{
            ans[sec] = nums[i];
            sec+=2
        }
    }
    return ans;
};

let arr = [3,1,-2,-5,2,-4];
console.log(rearrangeArray(arr));