let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello');
    }, 2000);   
});

promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("ojiojjioj", err);
})

