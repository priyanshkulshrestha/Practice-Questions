/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // my solution 
    
    // let num = 0;
    // let gotNum = false;
    // let negative = false
    // for(let i=0;i<s.length;i++){
    //     if((s[i] === '+' || s[i] === '-') && s[i+1] === " "){
    //         return 0;
    //     }
    //     if(!gotNum && s[i] === 0 && (s[i+1]!=undefined && s[i+1] === "-")){
    //         break;
    //     }else if(!gotNum && (s[i] === "+" && (s[i+1] === "-" || s[i+1] =="+"))){
    //         return 0;
    //     }else if(!gotNum && (s[i] === 0 || s[i]===" " || s[i] ==='+')){
    //         continue;
    //     }else if(s[i] === '0'){
    //         num = num*10 + Number(s[i])
    //         gotNum = true;
    //     }else if(Number(s[i]) > 0 && Number(s[i])<=9){
    //         num = num*10 + Number(s[i])
    //         gotNum = true;
    //     }else if(!gotNum && (s[i] === "-" && (s[i+1] === "+" || s[i+1] === "-"))){
    //         return 0;
    //     }else if(!gotNum && (s[i] === "-")){
    //         negative = true;
    //     }else{
    //         break;
    //     }
    // }
    // if(negative){
    //     num = -1*num;
    // }
    // let min = -2147483648;
    // let max = 2147483647;
    // if(num < min) return min;
    // if(num > max) return max; 
    // return num;

    
    // Best from chat gpt 
    s = s.trim(); // Step 1: Trim whitespace
    let sign = 1;
    let i = 0;
    let result = 0;

    // Step 2: Check for sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Read digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));

        // Step 4: Clamp
        if (sign * result < -2147483648) return -2147483648;
        if (sign * result > 2147483647) return 2147483647;

        i++;
    }

    return sign * result;
};