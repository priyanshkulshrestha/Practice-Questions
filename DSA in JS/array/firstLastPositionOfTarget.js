/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let s =-1, e=-1;
    let end = nums.length-1;
    while(start <=end){
        let mid = Math.floor((start +end)/2);
        console.log(mid, nums[mid])
        if(nums[mid] == target && (nums[mid-1] <target || nums[mid-1] == undefined)){
            s = mid;
            break;
        }else if(nums[mid] < target ){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    // let nums = [5,7,7,8,8,10], target = 8;


    console.log("-----------------------")
    start = 0;
    end = nums.length-1;
    while(start <= end){

        let mid = Math.floor((start +end)/2);
        console.log(mid, nums[mid])

        if(nums[mid] == target && (nums[mid+1] >target || nums[mid+1] == undefined)){
            e = mid;
            break;
        }else if(nums[mid] >  target){
            
            end = mid-1;
        }else{
            start = mid+1;
        }
    }

};
return [s, e]

let nums = [5,7,7,8,8,10], target = 8;
// let nums = [2,2], target = 2;
console.log(searchRange(nums, target));
console.log(searchRange(nums, target));