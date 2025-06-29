// 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
let convert = function(roman){
    
    if(roman === "I")
        return 1
    else if(roman === "V")
        return 5
    else if(roman === "X")
        return 10
    else if(roman === "L")
        return 50
    else if(roman === "C")
        return 100
    else if(roman === "D")
        return 500
    else if(roman === "M")
        return 1000
    
}

var romanToInt = function(s) {
    let num = 0;
    for(let i=0;i<s.length;i++){
        if(s[i+1] != undefined && convert(s[i]) < convert(s[i+1])){
            num -= convert(s[i])
        }else{
            num += convert(s[i])
        }
    }
    return num
};