var kidsWithCandies = function(candies, extraCandies) {
    let biggest = candies.reduce((biggest, num) => Math.max(biggest, num) , 0);

    return ans = candies.map(num => (num + extraCandies) >= biggest); 
};

let candies = [2,3,5,1,3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
