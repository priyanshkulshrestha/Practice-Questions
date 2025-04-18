// let nums = [1,2,3,4]
let nums = [-1,1,0,-3,3]

var productExceptSelf = function(nums) {
    let product = 1;
    let prefix = nums.map(num => {
        return product = num * product;
    })
    console.log(prefix);
    
    product = 1;
    let sufix = nums.reverse().map(num => {
        return product = num * product;
    })
    console.log(sufix.reverse())
    sufix.push(1);
    // console.log([24,12,8,6])

    let ans = [];
    for(let i=0;i<nums.length;i++){
        let prefixnum = prefix[i-1] != undefined ?prefix[i-1]:1;
        let sufixnum = sufix[1+1] != undefined ?sufix[i+1]:1;
        console.log(prefixnum, sufixnum)
        ans.push(prefixnum * sufixnum);
    }
    console.log(ans);
    
};

productExceptSelf(nums)