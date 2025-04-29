let daysforNweight = (weights, w) => {
    let sum = 0;
    let count = 1;
    for(i=0;i<weights.length;i++){
        if((sum+weights[i])<=w){
            sum+=weights[i];
        }else if((sum+weights[i])==w){
            count++;
            sum = 0;
        }
        else{
            count++;
            sum = 0;
            i--;
        }
        console.log(weights[i], count)
    }
    return count;
}
// var shipWithinDays = function(weights, days) {
//     let s = Math.max(...weights), e=0;
//     weights.forEach(num => {
//         e += num;
//     });

//     let ans = Number.MAX_SAFE_INTEGER;
//     while(s <= e){
//         mid = Math.floor((s+e)/2);
//         let d = daysforNweight(weights,mid)
//         if(d <= days){
//             if(ans>mid){
//                 ans = mid
//             }
//             e = mid-1;
//         }else{
//             s = mid+1;
//         }
//     }
//     return ans;
// };
console.log(daysforNweight([1,2,3,4,5,6,7,8,9,10], 10));
