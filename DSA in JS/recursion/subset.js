function solve(nums, output, index, ans){
    // base case
    if(index >= nums.length){
        ans.push([...output]);
        // console.log("returning ans = ", ans, "added output", output);
        return;
    }

    // exclude case
    // console.log("exclude " + `[${output}]`, index);
    solve(nums, [...output], index+1, ans);
    
    // include case
    let element = nums[index];
    output.push(element);
    // console.log("include " + `[${output}]`, index);
    solve(nums, [...output], index+1, ans);

}

var subsets = function(nums) {
    let ans = []; //arr of arr
    let output = [];
    let index = 0;
    solve(nums, output, index, ans);
    return ans;
};

let arr = [1,2,3];

console.log("Ans -->  ",subsets(arr));