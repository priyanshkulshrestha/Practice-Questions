let s = "the    sky is blue";
let string = (s.trim().split(" ").reverse().filter(ele =>  ele.trim() != "")).join(" ");  

let arr = s.split("");
console.log(arr);

let start = 0, end = arr.length;
// while(start < end){
//     if()
// }
