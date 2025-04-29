/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows){
    
    return solve(numRows)
}


function solve (numRows) {

    if(numRows == 1){
        let ans = []

        ans.push([1])
        return ans;
    }else if(numRows == 2){
        let ans = []
        
        ans.push([1])
        ans.push([1,1])
        return ans;
    }
    ans = solve(numRows-1);
    prev = ans[ans.length-1];

    let n = numRows;
    let myArr = [];
    myArr[0] = 1;
    for(let i=1;i<n-1;i++){
        myArr[i] = prev[i-1] + prev[i];
    }
    myArr[n-1] = 1
    // console.log(myArr);
    
    ans.push(myArr);
    return ans;
};

// console.log(generate(3))
// console.log(generate(4))
console.log(generate(5))
// console.log(generate(6))