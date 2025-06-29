// 1781. Sum of Beauty of All Substrings

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let SumBeauty = 0;
    for(let i=0;i<s.length;i++){
        let m = new Map();
        for(let j=i;j<s.length;j++){
            m.set(s[j], (m.get(s[j])|| 0) + 1);
             let freq = Array.from(m.values());
            SumBeauty += Math.max(...freq) - Math.min(...freq);
        }
    }
    console.log(SumBeauty)
    return SumBeauty;
};

console.log(beautySum("aabc"))