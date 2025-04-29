/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let iss = new Set();
    let jss = new Set();
    for(let i=0;i<matrix.length; i++){
        for(let j=0;j<matrix[i].length; j++){
            if(matrix[i][j] == 0){
                iss.add(i);
                jss.add(j);
            }
        }
    }
    for(let i=0;i<matrix.length; i++){
        if(iss.has(i)){
            matrix[i] = new Array(n).fill(0);
        }
        for(let j=0;j<matrix[i].length; j++){
            if(jss.has(j)){
                matrix[i][j] = 0;
            }
        }
    }


};

let numSet = new Set();
numSet.add(1)
numSet.add(2)
numSet.add(3)
console.log(numSet.has(1));
console.log(numSet.has(4));
