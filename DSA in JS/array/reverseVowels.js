var reverseVowels = function(s) {
    let start = 0, end = s.length-1;
    s = [...s];
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    while(start<=end){

        console.log(s[start],s[end]);

        if(!vowels.includes(s[start])){
            start++
        }
        else if(!vowels.includes(s[end])){
            end--;
        }
        else if(vowels.includes(s[start]) && vowels.includes(s[end])){
            let temp = s[start];
            s[start] = s[end];
            s[end] = temp; 
            // console.log(s);
            start++;
            end--;
        }
    }

    return String(s.join(""));
};

let s = "IceCreAm";

console.log(reverseVowels(s));

