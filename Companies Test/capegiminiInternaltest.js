function countSteps(n){
    let count = 0;  
    while(n!=0){
        if(n%5 == 0){
            n = n/5
        }else if(n%3 == 0){
            n = n/3
        }else if(n%2 == 0){
            n = n/2
        }else{
            n = n-1
        }
        count++;
    }
    return count;
}

console.log(countSteps(6)) 
console.log(countSteps(12)) 
console.log(countSteps(13)) 

function validName(s){
    let str = s.toLowerCase();
    let ans = str.charAt(0).toUpperCase() + str.slice(1);
    return ans;
}

console.log(validName("johN"))
console.log(validName("alice"))
console.log(validName("ALICE"))
console.log(validName("Mike"))

function reverseSecond(n,a){
    let size = n;

    let newArr = [];

    for(let i = size-1; i >= 0; i--){
        if(i%2 == 1)
        newArr.push(a[i]);
    }

    let ansArr = [];
    let j = 0;
    for(let i = 0; i < size; i++){
        if(i%2 == 0)
        ansArr.push(a[i]);
        else{
            ansArr.push(newArr[j]);
            j++;
        }
    }
    return ansArr;
}

console.log(reverseSecond(5,[1,2,3,4,5]))