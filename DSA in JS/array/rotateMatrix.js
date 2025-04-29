
var rotate = function(nums) {
    let n = nums.length;

    //instead of this block u can do arr.reverse()
    nums.reverse();

    for(let i=0;i<n/2;i++){
            for(let j=0;j<nums[0].length;j++){
                [nums[i][j], nums[n - i - 1][j]] = [nums[n - i - 1][j], nums[i][j]]
            }
        // n--;
        
    }

    console.log(nums)
    // n = nums.length;+1
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
                [nums[i][j], nums[j][i]] = [nums[j][i], nums[i][j]];
            
        }
    }
    console.log(nums)
};

let matrix = [[1,2,3,4,5,6,7,8],[24,37,25,62,37,15,35,36],[42,23,13,58,17,26,19,8],[32,48,9,58,36,18,40,61],[23,16,0,46,35,34,23,60],[9,49,60,47,1,32,20,45],[56,34,40,11,61,60,20,30],[45,30,25,18,49,3,16,10]];
console.log(rotate(matrix))