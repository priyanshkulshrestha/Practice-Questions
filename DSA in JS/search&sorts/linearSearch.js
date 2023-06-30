let arr = [9,4,7,3,6,1,8,2,5];

let linearSearch = (arr, element) => {

    for(let i=0;i<arr.length;i++){
        if(arr[i] == element){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr,7))
console.log(linearSearch(arr,0))