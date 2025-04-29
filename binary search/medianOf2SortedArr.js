/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log(arr)
    if((arr.length-1 )% 2 ==0){
        return arr[Math.floor((arr.length-1)/2)];
    }else{
        let prev = Math.floor((arr.length-1 )/ 2)
        let next = prev + 1
        console.log(prev, next);
        
        return (arr[prev] + arr[next])/2;
    }
};

console.log(findMedianSortedArrays([1,3], [2]))