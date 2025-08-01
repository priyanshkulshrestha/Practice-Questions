function trap(heights) {
    let i = 0;
    let j = i+1;
    let maxCapacity = 0;
    let capacity = 0;
    let maxArr = new Array(heights.length);
    let maxHeight = 0;
    maxArr[heights.length-1] = 0;
    for(let i=heights.length-1;i>0;i--){
        maxArr[i-1] = Math.max(maxHeight, heights[i]);
        maxHeight = Math.max(maxHeight, heights[i]);
    }
    // console.log(maxHeight);
    while(j<heights.length){
        // console.log(i, j, capacity, maxCapacity);
        if(maxArr[i]<heights[i]){
            heights[i] = maxArr[i];
        }
        if(heights[i]>heights[j]){
            capacity += heights[i]-heights[j];
            j++;
        }else{
            maxCapacity += capacity;
            i = j++;
            capacity = 0;
        }
    }
    console.log(maxCapacity);
    return maxCapacity;
}
//             0 1 2 3 4 5 6 7 8 9 10
let heights = [0,1,0,2,1,0,1,3,2,1,2,1];
trap(heights); // 6
let heights2 = [4,2,0,3,2,5];
trap(heights2); // 9
trap([0,2,0]); // 0
trap([5,4,1,2]); // 1
 

// write approach and intution 

// The approach is to use a two-pointer technique where we maintain a left pointer and a right pointer.
// We calculate the maximum height to the right of each index and use that to determine
// how much water can be trapped at upcomming indices.
// The intuition is that the water trapped at any index is determined by the minimum of the maximum heights
// to the left and right of that index, minus the height at that index.         