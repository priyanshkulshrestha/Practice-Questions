// My logic
var sortColors = function(nums) {
    let zeros = 0, ones = 0, twos = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            ones++;
        }else if(nums[i] == 2){
            twos++
        }else{
            zeros++
        }
    }

    for(let i=0;i<nums.length;i++){
        if(i < zeros){
            nums[i] = 0;
        }else if(i < zeros + ones){
            nums[i] = 1;
        }else{
            nums[i] = 2;
        }
    }
};

// best approach in a pass and in place
let arr = [2,0,2,1,1,0]
let bestSortColors = (arr) => {
    let start = 0, mid = 0, end = arr.length-1;
    
    while(mid <= end){
        if(arr[mid] == 0){
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        }else if(arr[mid] == 1){
            mid++;
        }else{
            [arr[mid], arr[end]] = [arr[end], arr[mid]];
            end--;
        }
    }
    console.log(arr)
}
