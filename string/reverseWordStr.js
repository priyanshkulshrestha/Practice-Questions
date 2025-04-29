// 151. Reverse Words in a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return string = (s.trim().split(" ").reverse().filter(ele =>  ele.trim() != "")).join(" ");  

};