//my solution 
var check = function(nums) {
    let count =0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]<nums[i-1])
            count++;
    }
    if(nums[nums.length-1] > nums[0]){
        count++
    }
    console.log(count);
    return count <=1 ? true : false;
}; 

// best solution
function check() {
    let count = 0, n = nums.length;
        
        for (let i = 0; i < n; i++) {
            if (nums[i] > nums[(i + 1) % n]) 
                count++;
            if (count > 1) 
                return false;
        }
        
        return true;
}

let t1 = [3,4,5,1,2]

let t2 = [2,1,3,4]

let t3 = [1,2,3]

console.log(check(t1))
console.log(check(t2))
console.log(check(t3))