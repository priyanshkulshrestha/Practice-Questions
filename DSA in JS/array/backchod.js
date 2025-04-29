
var numberOfArrays = function(differences, lower, upper) {
    let count = 0;
    for(let i=lower;i<=upper;i++){
        let arr = [];
        let first = differences[0]+i;
        arr.push(first);
        for(let j=0;j<differences.length;j++){
            let x = arr[j] + differences[j]
            console.log(x);
            if(lower <= x  && x <= upper){
                arr.push(x)
                if(j == differences.length-1){
                    count++;
                    console.log(arr);
                }
            }else{
                console.log(x, "break")
                break;
            }
           
        }
    }
    return count;
};





console.log(numberOfArrays([1,-3,4], 1, 6));
console.log(numberOfArrays([3,-4,5,1,-2], -4, 5));