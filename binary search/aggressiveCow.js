class Solution {
    // Check if it is possible to place k cows with at least 'mid' distance
    canPlaceCows(stalls, k, mid) {
        let count = 1; // First cow at first stall
        let lastPos = stalls[0];

        for (let i = 1; i < stalls.length; i++) {
            if (stalls[i] - lastPos >= mid) {
                count++;
                lastPos = stalls[i];
                if (count === k) return true;
            }
        }
        return false;
    }

    aggressiveCows(stalls, k) {
        stalls.sort((a, b) => a - b); // Sort stall positions

        let low = 1;
        let high = stalls[stalls.length - 1] - stalls[0];
        let ans = 0;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (this.canPlaceCows(stalls, k, mid)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}



// this code is not working for `101 cases`

// let willCowSettle = function(stalls, k, mid){
//     let min = Math.min(...stalls);
//     let max = Math.max(...stalls);
//     let settle = false;
//     let stallAt = new Map();
//     stalls.forEach(i => {
//         stallAt.set(i, true);
//     })
//     lastCowAt = min;
//     k--;
//     // console.log("cowat", lastCowAt)
//     while(k && lastCowAt+mid <= max ){
//         if(stallAt.has(lastCowAt + mid)){
//             lastCowAt += mid;
//             // console.log("cowat",lastCowAt);
//             k--;
//         }else{
//             let temp = lastCowAt+mid+1;
//             while(temp<=max){
//                 if(stallAt.has(temp)){
//                     lastCowAt = temp;
//                     // console.log("cowat",lastCowAt);
    
//                     k--;
//                     break;
//                 }
//                 temp++;
//             }
//         }
       
//     }
//     settle = k ? false : true;
//     return settle;
// }

// // console.log(willCowSettle([10, 1, 2, 7, 5], 3, 2))

// let aggressiveCows = function(stalls, k) {
//     // your code here
//     if(stalls.length < k) return -1;
    
//     let s = 1, e = Math.max(...stalls);
//     let ans = 0;
//     while(s<=e){
//         let mid = s + Math.floor((e-s)/2);
//         console.log(mid, willCowSettle(stalls, k, mid))
//         if(willCowSettle(stalls, k, mid)){
//             if(ans < mid) ans = mid;

//             s = mid+1;
//         }else{
//             e = mid-1;
//         }
//     }
//     return ans;
// }

// console.log(aggressiveCows([1, 2, 4, 8, 9],  3))
// console.log(aggressiveCows([10, 1, 2, 7, 5],  3))
// console.log(aggressiveCows([2, 12, 11, 3, 26, 7],  5))