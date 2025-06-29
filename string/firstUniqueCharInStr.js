// 387. First Unique Character in a String

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let m = new Map();
    for(let ch of s){
        m.set(ch, (m.get(ch) || 0) +1)
    }
    for(let i=0;i<s.length;i++){
        if(m.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
};