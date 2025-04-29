// leetcode 875. Koko Eating Bananas

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var calculateTotalHours = (piles, mid) => {
    let totalHrs = 0;
    piles.forEach((num) => {
        totalHrs += Math.ceil(num/mid);
    })
    return totalHrs;
}
var minEatingSpeed = function(piles, h) {
    let maxAns = Math.max(...piles);
    
    let s = 1, e = maxAns;
    let ans = Number.MAX_SAFE_INTEGER;
    while(s<=e){
        let mid = Math.floor((s+e)/2)
        let hrs = calculateTotalHours(piles, mid);
        // console.log(mid, hrs);
        // console.log(mid-1, calculateTotalHours(piles, mid-1));

        // if(hrs <= h && calculateTotalHours(piles, mid-1) > h){
        if(hrs <= h ){
            if(ans>mid){
                ans = mid;
            }
            e = mid-1;
        }else{
            s = mid +1;
            console.log("start change");
        }
    }
    return ans;
};
// 7 = 5
// 6 = 6
// 5 = 8


let piles = [3,6,7,11], h = 8;
console.log(minEatingSpeed(piles, h))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([1,1,1,999999999], 10))