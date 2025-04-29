var numRabbits = function(answers) {

    let m = new Map();
    let count= 0;
    for(let i =0;i<answers.length;i++){
        if(answers[i] != 0){
             if(m.has(answers[i]) && m.get(answers[i]) < answers[i]+1){
                console.log("updating");
                
                m.set(answers[i], m.get(answers[i])+1)
            }else if(m.has(answers[i]) && m.get(answers[i]) == answers[i]+1){
                console.log("resetting to 0");
                count += answers[i]+1;
                m.set(answers[i], 1)
            } else{
                console.log("adding")
                m.set(answers[i], 1)
            }
        }else{
            count++
        }
    }

    for(let [key, value] of m){
        count += key+1;
    }

    return count;
};

let answers = [10,10,10];
console.log(numRabbits(answers))