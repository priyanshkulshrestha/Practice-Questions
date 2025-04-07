let size = 5;

for(let i=0;i<size;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}



for(let i=size;i>0;i--){
    for(let j=0;j<i;j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}

for(let i=size;i>0;i--){
    for(let j=0;j<size+1;j++){
        if(j<i)
        process.stdout.write(" ")
        else
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}

for(let i=0;i<size;i++){
    for(let j=0;j<size+1;j++){
        if(j<=i){
            process.stdout.write(" ")
        }else
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}