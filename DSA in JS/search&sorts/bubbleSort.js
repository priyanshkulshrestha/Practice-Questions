arr = [2,7,9,3,6,1,8,5,4];

let bubbleSort = (arr) => {
    let len = arr.length;
    let temp;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubbleSort(arr);
console.log(arr);