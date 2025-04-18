
var gcdOfStrings = function(str1, str2) {
    let smallWord = (str1.length < str2.length)?str1:str2;
    let bigWord = (str1.length > str2.length)?str1:str2;
    let ans = "";
    // for(let i=0;i<smallWord.length;i++){
    //     ans += smallWord[i];
    //     // console.log(ans);
    //     // console.log("condition1 = ",((bigWord.length % ans.length == 0 ) && (smallWord.length % ans.length == 0)) );
    //     // console.log("condition2 = ",((ans * (str1.length / ans.length) == str1) && (ans * (str2.length / ans.length) == str2)));
    //     // console.log(multiple(ans , (str1.length / ans.length)), ans *(str2.length / ans.length));
    //     if((bigWord.length % ans.length == 0 ) && (smallWord.length % ans.length == 0)){
    //         if((multiple(ans , (str1.length / ans.length)) == str1) && (multiple(ans , (str2.length / ans.length)) == str2)){
    //             return ans;
    //         }
    //     }
    // }
    while(smallWord != ""){
        smallWord = smallWord.slice(0,-1);
        ans = smallWord;
        if((bigWord.length % ans.length == 0 ) && (smallWord.length % ans.length == 0)){
            if((multiple(ans , (str1.length / ans.length)) == str1) && (multiple(ans , (str2.length / ans.length)) == str2)){
                return ans;
            }
        }
    }

    return "";
};

let str1 = "ABABAB";

let str2 = "ABAB";

console.log(gcdOfStrings(str1, str2))

function multiple(str, num)
{
    let ans = "";
    for(let i=0;i<num;i++){
        ans += str;
    }
    return ans;
}

