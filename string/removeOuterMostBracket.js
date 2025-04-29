// 1021. Remove Outermost Parentheses

class Stack{
    constructor(){
        this.items = [];
    }

    Stack(size){
        this.items = [size];
    }
    
    push(num) {
        this.items.push(num)
    }

    pop(){
        return this.items.pop();
    }

    size(){
        return this.items.length;
    }
    
}

var removeOuterParentheses = function(str) {
    // let pointer = 0;
    // let indexs = []
    // for(let i=0;i<s.length;i++){
    //     if(s[i] == "("){
    //         pointer++;
    //         if(pointer === 1){
    //             indexs.push(i);
    //         }
    //     }else if(s[i] == ')'){
    //         pointer--;
    //         if(pointer === 0){
    //             indexs.push(i);
    //         }
    //     }
    // }
    // let arr = s.split('');
    // for(let i=0;i<indexs.length;i++){
    //     arr.splice(indexs[i]-i, 1);
    // }
    // return arr.join('')

    // ----- Stack solution -----

    let s = new Stack();
    let ans = "";
    for(i=0;i<str.length;i++){

        if(str[i] == "("){

            s.push(str[i])
            // s.printStack();
            if(s.size() != 1){
                ans += str[i];
            }
        }else if(str[i] == ')'){
            s.pop();
            if(s.size()!=0){
                ans += str[i];
            }
        }
    }
    // console.log(ans)
    return ans;
};
