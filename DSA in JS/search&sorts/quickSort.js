let arr = [2,8,9,1,5,7,3,6,4];

function partition(arr, start, end){
    console.log(arr, start, end);
    let pivot = arr[start];

    let count = 0;
    for(let i=start+1;i<end;i++){
        if(arr[i] <= pivot)
            count++;
    }
    // console.log(count);
    let pivotIndex = start + count;

    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[start];
    arr[start] = temp;

    let i=start, j=end;
    while(i<pivotIndex && j>pivotIndex){
        while(arr[i]<=pivot)
            i++;
        while(arr[j]>pivot)
            j--;
        
        if(i<pivotIndex && j>pivotIndex){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        
    }
    console.log(pivotIndex);
    return pivotIndex;
    
}

function quickSort(arr, start, end){
    if(start>=end){
        return;
    }

    let p = partition(arr,  start, end);

    quickSort(arr, start, p);
    quickSort(arr, p+1, end);
}

console.log(arr);

quickSort(arr, 0, arr.length-1);

console.log(arr);