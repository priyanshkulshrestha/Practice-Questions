let solve = function(digits, output, ans, index, mapping){
    console.log(digits, output, index+1, ans);
    if(index >= digits.length){
        ans.push(output);
        return;
    }
    console.log(digits[index])
    let number = parseInt(digits[index]);
    console.log(number);
    let value = mapping[number];
    console.log(value
    );

    for(let i=0;i<value.length;i++){
        output = output.concat(value[i]);
        console.log(output);
        solve(digits, output, ans, index+1, mapping);
        output = output.slice(0, output.length-1);
    }
}

var letterCombinations = function(digits) {
    if(digits.length == 0) return [];
    let ans = [];
    let index = 0;
    let output = "";
    let mapping = [" ", " ", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    solve(digits, output, ans, index, mapping);
    return ans;
};

digits = "32";
console.log(letterCombinations(digits))
