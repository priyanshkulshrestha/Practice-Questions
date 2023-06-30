var reverse = function(x) {
    if(x <= (Math.pow(2,31)-1) && x >= -1*(Math.pow(2,31)))
    {
        let num = (x>0)?x:x*-1;
        let rev = 0;
        while(num>0){
            let rem = num%10;
            num = Math.floor(num/10);
            rev = rev*10 + rem;
        }
        rev = (x<0)?-1*rev:rev;
        if(rev <= (Math.pow(2,31)-1) && rev >= -1*(Math.pow(2,31))){
            return rev;
        }
        else{
            return 0;
        }
    }
    else{
        return 0;
    }
}
let x = 1534236469;
console.log(reverse(x));