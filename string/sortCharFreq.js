// 451. Sort Characters By Frequency

var frequencySort = function(s) {
    let counter = new Map()
    for(let i=-0;i<s.length;i++){
        counter.set(s[i], (counter.get(s[i]) || 0) + 1);
    }
    counter = Array.from(counter.entries());
    console.log(counter)
    counter.sort((a,b) => b[1]-a[1])
    console.log(counter)
    let ans = "";
    for(let [char, freq] of counter){
        ans += char.repeat(freq)
    }
    return ans;
};