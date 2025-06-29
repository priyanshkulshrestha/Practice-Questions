// 1539. Kth Missing Positive Number
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // let low = 0;
    // let count = 0;
    // for(let i=0;i<arr.length;i++){
    //     let high = arr[i];
    //     let tempCount = count;
    //     count += high - low-1;
    //     if(count >= k){
    //         for(let j = low+1;j<high;j++){
    //             tempCount++;
    //             if(tempCount == k)
    //                 return j
    //         }
    //     }
    //     low = high;
    // }
    // return low + (k-count)
    let l=0, r=arr.length;
    while(l<r){
        let mid=l+Math.floor((r-l)/2);
        if(arr[mid]-mid-1<k){l=mid+1}
		else{r=mid};
    }
    return k+l;
};