 let arr = [2,8,9,1,5,7,3,6,4];

function merge(arr, start, mid, end){
    let len1 = mid - start + 1;
    let len2 = end - mid;
 
    // Create temp arrays
    let left = new Array(len1);
    let right = new Array(len2);

    for(let i=0;i<len1;i++)
        left[i] = arr[start + i];
    for(let i=0;i<len2;i++)
        right[i] = arr[mid + 1 + i];

    let index1=0, index2=0;
    let mainIndex = start;

    while(index1<len1 && index2 < len2){ 
        if(left[index1] < right[index2]){
            arr[mainIndex] = left[index1];
            index1++;
        }
        else{
            arr[mainIndex] = right[index2];
            index2++;
        }
        mainIndex++;
    }

    while(index1<len1){
        arr[mainIndex] = left[index1];
        index1++;
        mainIndex++;
    }

    while(index2<len2){
        arr[mainIndex] = right[index2];
        index2++;
        mainIndex++;
    }

}

function mergeSort(arr, start, end){
    if(start >= end){
        return;
    }
    let mid = start + Math.floor((end-start)/2);
    //Left part
    mergeSort(arr, start, mid);

    //Right part
    mergeSort(arr, mid+1, end);

    //merge 
    merge(arr, start, mid, end);
}

console.log(arr);

mergeSort(arr, 0, arr.length-1);

console.log(arr);