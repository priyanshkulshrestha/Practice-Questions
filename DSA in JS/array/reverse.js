let x = [1,2,3,4,5,6,7,8,9];

let rev = reverseArr(x);

console.log(rev);

function reverseArr(arr){
    let len = arr.length;
    let start = 0;
    let end = len-1;
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

getMinMax(x,10)

function getMinMax(arr,n){
    //code here
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
        x.foreach(ele => {
            if(ele > max)
                max = ele;
            if(ele < min)
                min = ele;
        })
}