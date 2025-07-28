function groupAnagrams(strs) {
    let m = new Map();
    // let ans:string[][] = []
    strs.forEach(str => {
        let sortStr = str.split("").sort().join("")
        m.set(sortStr, (m.get(sortStr) || []).concat(str));
    })
    return m.values()
    // return ans;
};

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(str)); // Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]