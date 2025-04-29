--
var spiralOrder = function(matrix) {
    let i=0;
    let ans = [];
    while(i<Math.ceil(matrix[i].length/2)){
        let j=i;
        while(j<matrix[i].length-i){
            ans.push(matrix[i][j]);
            console.log(matrix[i][j]);
            j++;
        }
        j--;
        console.log("-------------------")
        let k = i+1;
        while(k<= matrix.length-1){
            console.log(matrix[k][j]);
            ans.push(matrix[k][j]);
            k++;
        }
        k--;
        console.log("-------------------")

        let l= matrix[k].length -i-2;
        while(l>=i){
            console.log(matrix[k][l])
            ans.push(matrix[k][l])
            l--;
        }
        // ------------------------
        i++;              
        l++;
        console.log("-------------------")

        let m = matrix.length-i-1;
        while(m>=i){
            console.log(matrix[m][l])
            ans.push(matrix[m][l])
            m--;
        }
        console.log("-------------------")

    }
    return ans;
};

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
let matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let matrix3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

// console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));
// console.log(spiralOrder(matrix3));