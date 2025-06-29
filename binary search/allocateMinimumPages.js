// Allocate Minimum Pages


//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findPages(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find minimum number of pages.
    
    checkKcanGetbooksOnMax(arr, k, mid){
        let sc = 1
        let pages = 0
        for(let i =0;i<arr.length;i++){
            if (arr[i] > mid) return false;

            if(pages + arr[i] <= mid){
                pages += arr[i];
            }else{
                sc++;
                pages = arr[i];
            }
        }
        
        return sc <= k;
        
    }
    findPages(arr, k) {
        // your code here
        if(arr.length < k) return -1;
        
        let low = Math.max(...arr);
        let high = arr.reduce(( sum, num) => sum + num, 0);
        let ans = -1;
        while(low<=high){
            let mid = Math.floor((high+low)/2);
            // console.log("mid --> ", mid, this.checkKcanGetbooksOnMax(arr, k, mid))
            if(this.checkKcanGetbooksOnMax(arr, k, mid)){
                ans = mid;
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        return ans;
    }
}

let arr =[12, 34, 67, 90], k = 2;
let s = new Solution()
console.log(s.findPages(arr, k));
