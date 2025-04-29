// 242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return 0;

    const counter = new Array(26).fill(0);

    for(let idx = 0; idx < s.length; idx++){
        counter[s.charCodeAt(idx)-97]++;
        counter[t.charCodeAt(idx)-97]--;
    }

    for (let idx = 0; idx < 26; idx++) {
        if(counter[idx] != 0)
            return false;
    }
    return true;
    // one liner but slow
    // return s.split('').sort().join('') == t.split('').sort().join('');
};