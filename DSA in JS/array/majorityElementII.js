/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let m = new Map();
    let n = nums.length;
    let ans = []
    for(let i=0;i<n;i++){
        if(m.has(nums[i])){
            m.set(nums[i],( m.get(nums[i]) + 1));
            console.log(m.get(nums[i]))
            if(m.get(nums[i]) > Math.floor(n/3)){
                ans.push(nums[i])
            }
        }else{
            console.log("f for", nums[i]);
            
            m.set(nums[i], 1);
            if(m.get(nums[i]) > Math.floor(n/3)){
                ans.push(nums[i]);
            }
        }

    }
    console.log(m)
    return ans;
    
};

function code(nums){
    let candidate1;
    let candidate2;
    let count1 = 0;
    let count2 = 0;
    for(let i=0;i<nums.length;i++){

        if(candidate1 == undefined ){
            candidate1 = nums[i];
            count1++;
        }else if(candidate2 == undefined && candidate1 != nums[i]){
            candidate2 = nums[i];
            count2++;
        }else if(candidate1 == nums[i]){
            count1++;
        }else if(candidate2 == nums[i]){
            count2++;
        }else if(count1 == 0 && candidate2 != nums[i]){
            candidate1 = nums[i];
            count1++;
        }else if(count2 == 0 && candidate1 != nums[i]){
            candidate2 = nums[i];
            count2++;
        }else{
            count1--;
            count2--;
        }

    }

    count1 = 0;
    count2 = 0;
    for(let i=0;i<nums.length;i++){
        if(candidate1 == nums[i]){
            count1++;
        }
        if(candidate2 == nums[i]){
            count2++;
        }
    }
    let ans = []
    if(count1>Math.floor(nums.length/3)){
        ans.push(candidate1);
    }
    if(count2>Math.floor(nums.length/3)){
        ans.push(candidate2)
    }
    return ans;
}


let nums = [1,3,3,2,2,4,3,3,5,5,6,3,3,7,7];


// console.log(majorityElement(nums));
console.log(code(nums));
