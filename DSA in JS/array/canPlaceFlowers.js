var canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    if(flowerbed[0] == 0 && flowerbed[1] !=1){
     flowerbed[0]=1
     count++;
    }
     for(let i=1;i<flowerbed.length-1;i++){
         if(flowerbed[i-1] == 0 && flowerbed[i] ==0 && flowerbed[i+1] == 0){
             flowerbed[i] = 1;
             count++
         }
     }
     if(flowerbed[flowerbed.length-2] == 0 && flowerbed[flowerbed.length-1] == 0){
         flowerbed[flowerbed.length-1] = 1;
         count++
     }
    return count>=n;
 };
 
let arr = [1,0,0,0,1], n=2;


console.log(canPlaceFlowers(arr,n));
