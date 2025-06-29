// 1636. Sort Array by Increasing Frequency

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(s) {
    let counter = new Map()
    for(let i=s.length-1;i>=0;i--){
        counter.set(s[i], (counter.get(s[i]) || 0) + 1);
    }
    counter = Array.from(counter.entries());
    // console.log(counter)
    counter.sort((a,b) => {
        if(a[1] == b[1]){
            return b[0] - a[0]
        }
        return a[1]-b[1]
    })
    // console.log(counter)
    let ans = []
    for(let [char, freq] of counter){
        for(let i=0;i<freq;i++){
         ans.push(char)
        }
    }
    return ans;
};