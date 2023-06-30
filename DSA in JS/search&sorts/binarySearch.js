let arr = [1,2,3,4,5,6,7,8,9];

let binarySearch = (arr, element) => {

    let start = 0, end = arr.length;
    let mid = Math.floor(start + (end-start)/2);

    while(start<=end){
        if(arr[mid] == element){
            return mid;
        }
        else if(arr[mid] < element){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
        mid = Math.floor(start + (end - start)/2);
    }
    return -1;
}

let binarySearchRecursive = (arr,element,start,end) => {
    if(start>end){
        return -1;
        console.log("breaking at ", start, end);
    }
    let mid = Math.floor(start + (end-start)/2)
    // console.log('calling with mid - '+ mid);
    if(arr[mid] == element){
        return mid;
    }
    else if(arr[mid] < element){
        return binarySearchRecursive(arr,element,mid+1,end);
    }
    else{
        return binarySearchRecursive(arr,element,start,mid-1);
    }
}

console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 90));

console.log(binarySearchRecursive(arr,9,0,arr.length))
console.log(binarySearchRecursive(arr,50,0,arr.length));