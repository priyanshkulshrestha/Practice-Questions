function maxArea(heights) {
    let start = 0;
    let end = heights.length-1;
    let maxWater = 0;
    while(start < end){
        let currCap = Math.min(heights[start], heights[end]) * (end-start);
        maxWater = Math.max(currCap,maxWater);
        // console.log(maxWater, start, end);
        if(heights[start] < heights[end]){
            start++;
        }else{
            // currCap = Math.min(heights[start], heights[end]) * end-start;
            end--;
        }
    } 
    return maxWater;
}

// Example usage:
let heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights)); // Output: 49